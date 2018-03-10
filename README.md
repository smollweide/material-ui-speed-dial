
# material-ui-speed-dial (:exclamation:Work in process) [![Build Status](https://img.shields.io/travis/smollweide/material-ui-speed-dial/master.svg)](https://travis-ci.org/smollweide/material-ui-speed-dial)

> Components, that implements [material design speed dial](https://material.io/guidelines/components/buttons-floating-action-button.html#buttons-floating-action-button-transitions) for [material-ui v1](https://material-ui-next.com/)

[demo](https://smollweide.github.io/material-ui-speed-dial)

## Installation

For the installation of Material-UI please have look in the [Material-UI Documentation](https://material-ui-next.com/)

Material-UI speed dial is available as an [npm package](https://www.npmjs.com/package/@smollweide/material-ui-speed-dial).

```sh
npm install @smollweide/material-ui-speed-dial
```

## Usage

```jsx
import React from 'react';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import Avatar from 'material-ui/Avatar';

import AddIcon from 'material-ui-icons/Add';
import EditIcon from 'material-ui-icons/Edit';

import SpeedDial, { SpeedDialItem, SpeedDialLabel, SpeedDialBackdrop } from '@smollweide/material-ui-speed-dial';
import presetFixedBottomRight from '@smollweide/material-ui-speed-dial/dist/presets/presetFixedBottomRight';

const MyMaterialUiSpeedDial = ({ classes }) => {
  return (
    <SpeedDial
      preset={classes}
      renderButton={(props, propsIcon) => (
        <Button {...props} variant="fab" color="primary" aria-label="add">
          <AddIcon {...propsIcon} />
        </Button>
      )}
      renderOpenedButton={(props, propsIcon) => (
        <Button {...props} variant="fab" color="secondary" aria-label="edit">
          <EditIcon {...propsIcon} />
        </Button>
      )}
      renderList={props => <ul {...props} />}
      renderBackdrop={(props) => <SpeedDialBackdrop {...props} />}
    >
      {props => [
        <SpeedDialItem
          {...props}
          key="c"
          renderAvatar={propsAvatar => (
            <Avatar {...propsAvatar} alt="Eric Hoffman" src="http://lorempixel.com/80/80/people/3" />
          )}
        >
          {propsLabel => <SpeedDialLabel {...propsLabel} text="Eric Hoffman" />}
        </SpeedDialItem>,
        <SpeedDialItem
          {...props}
          key="b"
          renderAvatar={propsAvatar => (
            <Avatar {...propsAvatar} alt="Grace Ng" src="http://lorempixel.com/80/80/people/9" />
          )}
        >
          {propsLabel => <SpeedDialLabel {...propsLabel} text="Grace Ng" />}
        </SpeedDialItem>,
        <SpeedDialItem {...{ ...props, className: `${props.className} ${classes.firstItem}` }} key="a">
          {propsLabel => <SpeedDialLabel {...propsLabel} text="Edit" />}
        </SpeedDialItem>,
      ]}
    </SpeedDial>
  );
};
MyMaterialUiSpeedDial.displayName = 'MyMaterialUiSpeedDial';

export default withStyles(presetFixedBottomRight)(MyMaterialUiSpeedDial);
```

## Examples
- [Basic](https://smollweide.github.io/material-ui-speed-dial/#/example-basic)

## Shields
[![coverage status](https://coveralls.io/repos/github/smollweide/material-ui-speed-dial/badge.svg?branch=master)](https://coveralls.io/github/smollweide/material-ui-speed-dial?branch=master)
[![npm](https://img.shields.io/npm/v/@smollweide/material-ui-speed-dial.svg)](http://npm.im/@smollweide/material-ui-speed-dial)
[![downloads](https://img.shields.io/npm/dm/@smollweide/material-ui-speed-dial.svg)](https://npm-stat.com/charts.html?package=@smollweide/material-ui-speed-dial)
[![MIT License](https://img.shields.io/npm/l/@smollweide/material-ui-speed-dial.svg)](http://opensource.org/licenses/MIT)
[![Codestyle](https://img.shields.io/badge/codestyle-namics-green.svg)](https://github.com/namics/eslint-config-namics)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

## Contributing

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

### Getting started

1. Fork the material-ui-speed-dial repository on Github
2. Clone your fork to your local machine `git clone git@github.com:<yourname>/material-ui-speed-dial.git`
3. Create a branch `git checkout -b my-topic-branch`
4. Make your changes and add tests for them, lint, test then push to to github with `git push --set-upstream origin my-topic-branch`.
5. Visit github and make your pull request.

### Scripts
- Install `npm install`
- Start developing `npm start`
- Lint `npm run lint`
- Test `npm test`
- Build `npm run build`

### Coding style
Please follow the coding style of the current code base.
material-ui-speed-dial uses eslint, so if possible, enable linting in your editor to get realtime feedback.
The linting rules can be run manually with `npm run lint`.
