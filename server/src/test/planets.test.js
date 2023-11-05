const request = require('supertest');
const app = require('app');

describe('Test planets endpoints', () => {
    it('should get all planets', async () => {
        const res = await request(app).get('/planets');
        expect(res.statusCode).toEqual(200);
    });
});