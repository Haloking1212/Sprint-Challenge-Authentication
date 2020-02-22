const server = require("../api/server.js");
const request = require("supertest");


describe('server.js', () => {

    test('should be the testing environment', () => {
        expect(process.env.DB_ENV).toBe('testing');
    });

    describe('POST /api/auth/register', () => {
        it('should return 500', async () => {
            const res = await request(server).post('/api/auth/register');
            expect(res.status).toBe(500)
        })
    })

    describe('POST /api/auth/register', () => {
        it('should return an object {}', async () => {
            const res = await request(server).post('/api/auth/register');
            expect(res.body).toEqual({})
        })
    })

    describe('POST /api/auth/login', () => {
        it('should return you shall not pass', async () => {
            const res = await request(server).post('/api/auth/login');
            expect(res.body).toEqual({ message: "You Shall Not Pass!" })
        })
    })

    describe('POST /api/auth/login', () => {
        it('should return 401 unauthorized', async () => {
            const res = await request(server).post('/api/auth/login');
            expect(res.status).toBe(401)
        })
    })
});