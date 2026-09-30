# REST API Test Cases

| # | Test scenario | Method and route | Expected |
|---|---|---|---|
| 01 | API discovery directory | GET / | 200 OK |
| 02 | System health check | GET /api/health | 200 OK |
| 03 | Missing required fields | POST /api/auth/register | 400 Bad Request |
| 04 | Register standard user | POST /api/auth/register | 201 Created |
| 05 | Duplicate email blocked | POST /api/auth/register | 409 Conflict |
| 06 | Register moderator user | POST /api/auth/register | 201 Created |
| 07 | Register admin user | POST /api/auth/register | 201 Created |
| 08 | Wrong password rejection | POST /api/auth/login | 401 Unauthorized |
| 09 | Valid login and token issue | POST /api/auth/login | 200 OK + JWT |
| 10 | Get user profile | GET /api/auth/me | 200 OK |
| 11 | Access without bearer token | GET /api/auth/me | 401 Unauthorized |
| 12 | Update profile details | PUT /api/auth/updatedetails | 200 OK |
| 13 | Standard user blocked from admin routes | GET /api/users | 403 Forbidden |
| 14 | Admin allowed to access users | GET /api/users | 200 OK |
| 15 | Public product catalog | GET /api/products | 200 OK |
| 16 | Standard user cannot create product | POST /api/products | 403 Forbidden |
| 17 | Moderator can create product | POST /api/products | 201 Created |
| 18 | Fetch product by ID | GET /api/products/:id | 200 OK |
| 19 | Moderator cannot delete product | DELETE /api/products/:id | 403 Forbidden |
| 20 | Admin can delete product | DELETE /api/products/:id | 200 OK |
| 21 | Undefined route fallback | GET /api/undefined-route | 404 Not Found |
