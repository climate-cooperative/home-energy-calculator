# Home Energy Calculator [![](https://img.shields.io/badge/discord-8A2BE2)](https://discord.com/channels/1234653337547440190)

This repo acts as the front-end React app of the energy calculator.

## Local Development

This service utilizes vite to build the static assets and host the local development server.

`npm start`

This Project relies on running the [backend api](https://github.com/climate-cooperative/home-energy-assessment-database) at the same time locally in order to handle api request. See Mentioned repo for local development startup.

[TODO] Create api response mocks/stubs to simplify local development.

## Linting and Formatting

### ESLINT

Lints the codebase at `src/`

`npm run lint` or `npm run lint:fix` to apply changes if possible.

### PRETTIER

Formats the code

`npm run format`

## Testing

### VITEST

Runs all unit tests under `src/`. The convention is to create a `.test.js` file in the same directory as the code under test (e.g. `src/helpers/equations.test.js` for `src/helpers/equations.js`).

To run all tests in "watch mode" where tests are re-run when a file is changed:

`npm run test`

Additional options can be passed to the Vitest command ([docs](https://vitest.dev/guide/cli.html#options)), e.g.

```bash
# only run tests for a specific file or directory
npm run test -- src/helpers/equations.test.js

# disable watch mode
npm run test -- --run  
```