# OpenAPI Typescript Codegen

Fork of https://github.com/hypoport/openapi-typescript-codegen

# How to test
Make sure the correct api spec is reference under `/test/index.spec.ts` (for example `./test/homecloud-api-specs.json` if you want to test against a local file)

The test command will generate the services under `test/generated` and do some basic validation tests.
```shell
  npm run test
```

# How to release

```shell
  npm run release
```

```shell
  npm pack
```

Copy and paste the file
