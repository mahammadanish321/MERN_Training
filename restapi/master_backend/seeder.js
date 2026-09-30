const mongoose = require('mongoose');
require('dotenv').config();
const User = require('./models/userModel');
const Product = require('./models/productModel');

const users = [
    { name: 'System Administrator', email: 'admin@example.com', password: 'AdminPassword123!', role: 'admin', isActive: true },
    { name: 'Content Moderator', email: 'moderator@example.com', password: 'ModPassword123!', role: 'moderator', isActive: true },
    { name: 'Regular Customer', email: 'user@example.com', password: 'UserPassword123!', role: 'user', isActive: true },
    { name: 'Deactivated User', email: 'inactive@example.com', password: 'InactivePassword123!', role: 'user', isActive: false },
];

const sampleProducts = [
    { name: 'MacBook Pro 16" M3 Max', description: 'Apple M3 Max chip, 64GB RAM, 1TB SSD', price: 3499.99, category: 'electronics', inStock: true, quantity: 18 },
    { name: 'Sony WH-1000XM5 Wireless Headphones', description: 'Industry-leading noise canceling', price: 398.00, category: 'electronics', inStock: true, quantity: 45 },
    { name: 'Clean Code Book', description: 'Handbook of Agile Software Craftsmanship', price: 44.95, category: 'books', inStock: true, quantity: 80 },
];

const importData = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        await User.deleteMany();
        await Product.deleteMany();

        const createdUsers = [];
        for (const user of users) {
            const userDoc = new User(user);
            await userDoc.save();
            createdUsers.push(userDoc);
        }

        const admin = createdUsers.find((user) => user.role === 'admin');
        const productsWithCreator = sampleProducts.map((product) => ({ ...product, createdBy: admin._id }));
        await Product.insertMany(productsWithCreator);
        console.log('Demo Data Imported Successfully!');
        process.exit(0);
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

const destroyData = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        await User.deleteMany();
        await Product.deleteMany();
        console.log('All data destroyed!');
        process.exit(0);
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

if (process.argv[2] === '-d') {
    destroyData();
} else {
    importData();
}
