import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import setupTests from './setup-tests';

let app: INestApplication;

describe('App (e2e)', () => {
    beforeAll(async () => {
        app = await setupTests();
    });

    test('/ (GET)', () => {
        return request(app.getHttpServer())
            .get('/')
            .expect(200)
            .expect('Welcome to the RR Survey wizard API!');
    });
});
