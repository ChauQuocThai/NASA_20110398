const request = require('supertest');
const app = require('../app');

describe('Test endpoints', () => {
    it('should get all launches',async () => {
        const res = await request(app).get('/launches');
        expect(res.statusCode).toEqual(200);
    });

    it('should add a launch',async () => {
        const newLaunch={
            mission:'Test mission',
            rocket: 'Test rocket',
            launchDate: '2023-11-95',
            target:'Test target',
        };
        const res = await request(app).post('/launches').send(newLaunch);
        expect(res.statusCode).toEqual(201);
    });
    it('should abort a launch', async () => {
        const res = await request(app).delete('/launches/launchID');
        expect(res.statusCode).toEqual(200);
    });
});