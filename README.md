# Home Energy Calculator

This repo acts as the front-end React app of the energy calculator.

## Local Development

This service utilizes webpack and babel to build the static assets and host the local development server.

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
