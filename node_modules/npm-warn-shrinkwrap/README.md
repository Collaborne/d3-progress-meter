# npm-warn-shrinkwrap

Check whether a `npm-shrinkwrap.json` exists in the current directory, and warn if so.

This is intended for environments where the shrinkwrapping process only happens on CI steps, but where developers should _not_ use `npm shrinkwrap`.

## Install

~~~~
npm install --save-dev npm-warn-shrinkwrap
~~~~

## Usage

Configure this in `package.json` in the `preinstall` script:

```js
{
  ...,
  "scripts": {
    "preinstall": "npm-warn-shrinkwrap"
  }
}

