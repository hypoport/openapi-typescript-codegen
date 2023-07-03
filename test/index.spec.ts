import { readFileSync } from 'fs';
import { sync } from 'glob';

import { generate, HttpClient, Indent } from '../';

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
