# Contributing

> This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Getting started

1. Fork the material-ui-speed-dial repository on Github
2. Clone your fork to your local machine `git clone git@github.com:<yourname>/material-ui-speed-dial.git`
3. Create a branch `git checkout -b my-topic-branch`
4. Make your changes and add tests for them, lint, test then push to to github with `git push --set-upstream origin my-topic-branch`.
5. Visit github and make your pull request.

## Scripts
- Install `npm install`
- Start developing `npm start`
- Lint `npm run lint`
- Flow `npm run flow`
- Restart Flow `npm run flow-restart`
- Install Flow libs `npm run flow-install`
- Test `npm test` in dev mode `npm run test:dev`
- Build `npm run build`
- Build demo `npm run build-demo`
- Commit with commitizen `npm run c`

## Coding style
Please follow the coding style of the current code base.
material-ui-speed-dial uses [eslint](https://eslint.org/), so if possible, enable linting in your editor to get realtime feedback.
The linting rules can be run manually with `npm run lint`.

## Commitlint
Please follow the commitlint [config-conventional](https://github.com/marionebl/commitlint/tree/master/@commitlint/config-conventional) rules.
Or use commitizen by run `npm run c`.

## Unit tests
material-ui-speed-dial uses [jest](https://facebook.github.io/jest/) and [enzyme](http://airbnb.io/enzyme/) for unit tests.
The coverage is 100% and should stay on this level.
Please make sure your changes are fully covered.

## Strictly typed
material-ui-speed-dial uses [flow](https://github.com/facebook/flow), so if possible, enable flow in your editor to get realtime feedback.
The flow checker can be run manually with `npm run flow`.
