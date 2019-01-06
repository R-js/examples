# Standalone examples projects using the R-js libraries

This repository is a collection of selfcontained example projects demonstrating how to use the various libraries composing _R-js_.

## browser and node

The examples are subdivided in the categories for either the browser or nodejs. Examples using typescript are kept seperate and distinct from the examples that do not use typescript.

## minimalistic configuration

Configuration of the various bundlers/transpilers are kept as minimalistic as possible on purpose.

## `libRmath.js` examples

Nomenclature

* `$repodir`: is the main directory of this git repo after cloning

### Building with webpack and typescript

From the main repository directory

```bash
>cd examples/lib-r-math.js/typescript

>npm i

>npm run build

```

The resulting bundle build will be in `$repodir/examples/lib-r-math.js/typescript/dist/bundle.js`

