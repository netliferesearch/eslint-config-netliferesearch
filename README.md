# eslint-config-netliferesearch
This package provides ESLint configs used in Netlife Research projects. The configurations are based on eslint-config-airbnb only differs on the tab size, using four space soft tabs.

For more details on the rules and how to work with the standard and ESLint itself see [Airbnb's Javascript styleguide](https://github.com/airbnb/javascript) and
the [ESlint config docs](http://eslint.org/docs/user-guide/configuring#extending-configuration-files).

## Installations
First, add `eslint`, `eslint-plugin-import` to your project by running

```sh
npm install --save-dev eslint eslint-plugin-import
```

Then add the config itself by installing `eslint-config-netliferesearch`:

```sh
npm install --save-dev eslint-config-netliferesearch
```

## Usage
In order for eslint to lint your file using the config, you need to add an `.eslintrc` to the root of your project:

```json
{
  "extends": "netliferesearch"
}
```

## Alternative configurations
The default configuration (`netliferesearch`) expects your project to use the new ES6/2015 features. Depending on your project you might want or need something else, and a few other configs is provided:

* `netliferesearch/legacy` - A config for ES5 style projects.
* `netliferesearch/react` - A config for React+ES6/2015 projects.
