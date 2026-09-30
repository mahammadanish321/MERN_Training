const BASE_URL = process.env.API_URL || 'http://127.0.0.1:5000';
const suffix = Date.now();
const accounts = {
    user: { name: 'Test User', email: `user-${suffix}@example.com`, password: 'UserPassword123!' },
    moderator: { name: 'Test Moderator', email: `moderator-${suffix}@example.com`, password: 'ModPassword123!', role: 'moderator' },
    admin: { name: 'Test Admin', email: `admin-${suffix}@example.com`, password: 'AdminPassword123!', role: 'admin' },
};

let userToken;
let moderatorToken;
let adminToken;
let productId;
let passed = 0;

const request = async (method, path, body, token) => {
    const response = await fetch(`${BASE_URL}${path}`, {
        method,
        headers: {
            'Content-Type': 'application/json',
            ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
        body: body === undefined ? undefined : JSON.stringify(body),
    });
    let data = {};
    try {
        data = await response.json();
    } catch (error) {
        data = {};
    }
    return { status: response.status, data };
};

const check = async (number, description, expected, action) => {
    const result = await action();
    if (result.status !== expected) {
        throw new Error(`${number} ${description}: expected ${expected}, received ${result.status}`);
    }
    passed += 1;
    console.log(`PASS ${String(number).padStart(2, '0')} ${description}`);
    return result;
};

const run = async () => {
    await check(1, 'API discovery directory', 200, () => request('GET', '/'));
    await check(2, 'System health check', 200, () => request('GET', '/api/health'));
    await check(3, 'Missing required fields', 400, () => request('POST', '/api/auth/register', {}));

    let result = await check(4, 'Register standard user', 201, () => request('POST', '/api/auth/register', accounts.user));
    userToken = result.data.token;
    await check(5, 'Duplicate email blocked', 409, () => request('POST', '/api/auth/register', accounts.user));

    result = await check(6, 'Register moderator user', 201, () => request('POST', '/api/auth/register', accounts.moderator));
    moderatorToken = result.data.token;
    result = await check(7, 'Register admin user', 201, () => request('POST', '/api/auth/register', accounts.admin));
    adminToken = result.data.token;

    await check(8, 'Wrong password rejection', 401, () => request('POST', '/api/auth/login', { email: accounts.user.email, password: 'wrong-password' }));
    result = await check(9, 'Valid login and token issue', 200, () => request('POST', '/api/auth/login', accounts.user));
    userToken = result.data.token;
    await check(10, 'Get user profile', 200, () => request('GET', '/api/auth/me', undefined, userToken));
    await check(11, 'Access without bearer token', 401, () => request('GET', '/api/auth/me'));
    await check(12, 'Update profile details', 200, () => request('PUT', '/api/auth/updatedetails', { name: 'Updated Test User' }, userToken));
    await check(13, 'Standard user blocked from admin routes', 403, () => request('GET', '/api/users', undefined, userToken));
    await check(14, 'Admin allowed to access users', 200, () => request('GET', '/api/users', undefined, adminToken));
    await check(15, 'Public product catalog', 200, () => request('GET', '/api/products'));
    await check(16, 'Standard user cannot create product', 403, () => request('POST', '/api/products', { name: 'Blocked Product', price: 10 }, userToken));

    result = await check(17, 'Moderator can create product', 201, () => request('POST', '/api/products', { name: 'Test Product', price: 10, quantity: 2 }, moderatorToken));
    productId = result.data.data._id;
    await check(18, 'Fetch product by ID', 200, () => request('GET', `/api/products/${productId}`));
    await check(19, 'Moderator cannot delete product', 403, () => request('DELETE', `/api/products/${productId}`, undefined, moderatorToken));
    await check(20, 'Admin can delete product', 200, () => request('DELETE', `/api/products/${productId}`, undefined, adminToken));
    await check(21, 'Undefined route fallback', 404, () => request('GET', '/api/undefined-route'));

    console.log(`\n${passed}/21 tests passed`);
};

run().catch((error) => {
    console.error(`\nTest run failed: ${error.message}`);
    process.exitCode = 1;
});
