import { readFileSync } from 'fs';
import { sync } from 'glob';

import { generate, HttpClient, Indent } from '../';

describe('v2', () => {
    it('should generate', async () => {
        await generate({
            input: './test/spec/v2.json',
            output: './test/generated/v2/',
            httpClient: HttpClient.FETCH,
            useOptions: false,
            useUnionTypes: false,
            exportCore: true,
            exportSchemas: true,
            exportModels: true,
            exportServices: true,
        });

        sync('./test/generated/v2/**/*.ts').forEach(file => {
            const content = readFileSync(file, 'utf8').toString();
            expect(content).toMatchSnapshot(file);
        });
    });
});

describe('v3', () => {
    it('should generate', async () => {
        await generate({
            input: './test/spec/v3.json',
            output: './test/generated/v3/',
            httpClient: HttpClient.FETCH,
            useOptions: false,
            useUnionTypes: false,
            exportCore: true,
            exportSchemas: true,
            exportModels: true,
            exportServices: true,
        });

        sync('./test/generated/v3/**/*.ts').forEach(file => {
            const content = readFileSync(file, 'utf8').toString();
            expect(content).toMatchSnapshot(file);
        });
    });
});

describe('homecloud', () => {
    it('should generate', async () => {
        await generate({
            clientName: 'HomecloudApiService',
            exportCore: false,
            exportModels: false,
            exportSchemas: false,
            exportServices: true,
            httpClient: HttpClient.AXIOS,
            indent: Indent.SPACE_2,
            input: 'https://test.docs.api.homecloud.de/homecloud-api-specs.json',
            output: './test/generated/homecloud/',
            postfixServices: 'ApiService',
            useOptions: false,
            useUnionTypes: false,
        });
    });
});
