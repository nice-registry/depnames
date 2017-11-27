# depnames 

> Fetch a list of dependency names for a given npm package

Uses [fetch-nice-package] and [nice-package] under the hood.

## Installation

Node 8 or greater is required because this module uses async functions. 

```sh
npm i -g depnames
```

# Module Usage

This module exports a single function which expects a package name and returns a 
promise. The resolved value is an array of package name strings:

```js
require('depnames')('cheerio')
  .then(names => console.log(names))
```

To fetch dev dependencies, set the `dev` option:

```js
require('depnames')('cheerio', {dev: true})
  .then(names => console.log(names))
```

If you need more flexibility, see
[fetch-nice-package] and [nice-package].

# CLI Usage

The CLI prints a newline-delimited list to standard out:

```sh
depnames budo

bole
browserify
chokidar
connect-pushstate
escape-html
...
```

This newline pattern plays nicely with tools like the [ghub] CLI. 

The following command will open every dependency's repository page 
in a browser tab:

```
npm i -g ghub depnames
depnames express | ghub
```

Pass the --dev flag to list `devDependencies`:

```sh
depnames budo --dev

2d-context
babel-preset-es2015
babelify
brfs
canvas-loop
...
```

## Tests

```sh
npm install
npm test
```

## Dependencies

- [fetch-nice-package](): fetch cleaned package metadata from the npm registry.
- [minimist](https://github.com/substack/minimist): parse argument options

## Dev Dependencies

- [chai](https://github.com/chaijs/chai): BDD/TDD assertion library for node.js and the browser. Test framework agnostic.
- [mocha](https://github.com/mochajs/mocha): simple, flexible, fun test framework
- [nixt](https://github.com/vesln/nixt): Simple and powerful testing for command-line apps
- [standard](https://github.com/standard/standard): JavaScript Standard Style
- [standard-markdown](): Test your Markdown files for Standard JavaScript Style™


## License

MIT

[fetch-nice-package]: http://ghub.io/fetch-nice-package
[nice-package]: https://github.com/nice-registry/nice-package/blob/master/README.md#convenience-methods
[ghub]: https://github.com/nice-registry/ghub.io#cli-usage