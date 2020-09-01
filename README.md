# TypeScript / React in Bazel

## Goals

Example usage of:
- ts_library
- tests
- ts_devserver
- webpack for prod build

All in an app that is more complex than the current bare-bones examples in rules_nodejs:
- More than a single file per ts_library
- Dependencies between ts_library targets
- npm dependencies

## Implementation

`/myframework` is an example of an internal package, using both internal and external dependencies.

`/myapp` is a React app, using both internal and external dependencies.

`/bundle` contains the scripts to build/bundle/serve the app

## Usage

- `yarn build` to build all targets
- `yarn bundle` to build prod bundle
- `yarn test` to run all tests
- `yarn testwatcher` to watch tests and re-run on changes

- `yarn devserver` to run the devserver
- `yarn prodserver` to serve index.html with the prod bundle

(see `package.json`)

## Issues to solve

- The need to do manual UMD builds for each dependency we need in the ts_devserver seems strange (see `demo/bundle/BUILD.bazel`)
- The UMD builds needs to be specified in ts_devserver. Ideally they would be specified in each ts_library and then collected by ts_devserver? (see `demo/bundle/BUILD.bazel`)
- Why the need to specify all transitive dependencies to ts_library when accessing es5_sources through a filegroup? (see `demo/bundle/BUILD.bazel`)
- Importing React in TypeScript should be `import * as React from "react"`, but the JS output fails to compile in Webpack due to some issue with default imports. 
    - Workaround:
        - Configure TS to use `esModuleInterop` (see `tsconfig.json`)
        - Use `import React from "react"` in all files
        - Configure TS to output `React.default.createElement` instead of `React.createElement` for JSX (see `tsconfig.json`)
        - Monkey-patch to make it work runtime: `React.default = React` (see `demo/bundle/entry.tsx` and `demo/myapp/test-setup.ts`)
- When running ibazel for tests, any change to the source files seems to trigger a rebuild of the prod bundle, even though it is not used in tests     



