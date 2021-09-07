# React Test Project

## Stack

- Node 14.15.1 (or above), npm 6 (or above)
- React 16.8.6

## Setup

```terminal
yarn install
```

## Development

```terminal
yarn start
```

## Testing

Some document below:

- [Global](https://jestjs.io/docs/en/api) Some API run global as needed.
- [Expect](https://jestjs.io/docs/en/expect) Some API expect result of testing.
- [Mock Functions](https://jestjs.io/docs/en/mock-function-api) Some mocking function.

## Mocking

Using [json-server](https://github.com/typicode/json-server) to fake data and api.

Note when doing request:

- Your request body JSON should be object enclosed, just like the GET output. (for example {"name": "Foobar"})
- Id values are not mutable. Any id value in the body of your PUT or PATCH request will be ignored. Only a value set in a POST request will be respected, but only if not already taken.
- A POST, PUT or PATCH request should include a Content-Type: application/json header to use the JSON in the request body. Otherwise it will result in a 200 OK but without changes being made to the data.

## Dependency size test

```terminal
npm run analyze
```

This command will generate a `stats.json` file from your production build, which
you can upload to the [webpack analyzer](https://webpack.github.io/analyse/) or [Webpack Visualizer](https://chrisbateman.github.io/webpack-visualizer/). This
analyzer will visualize your dependencies and chunks with detailed statistics
about the bundle size.

## Contribute

- Fork the repository and make changes on your fork in a feature branch.
- After every commit, make sure the test suite passes.
- Dev sends pull request to feature/develop branch and start cross review.
- Don't push logs or any unnecessary files to git repository
- Merge when pull request got OK from all members or customers and CI build is green.
- Merge develop to staging to deploy to staging server.
- Merge staging to production to deploy to production server.
