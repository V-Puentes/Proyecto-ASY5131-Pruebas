// Configura variables para Jest

process.env.NODE_ENV = 'test';
jest.setTimeout(10000);

afterAll(async () => {
const db = require('../lib/db');
await db.end();
});