# NodeSchool `learnyoumongo` Solutions
Workshop: https://github.com/evanlucas/learnyoumongo

Solutions for exercises 3 through 8 are written in code that runs without transpilation.

#### Usage
```
learnyounode verify solution-03.js
learnyounode verify solution-04.js
learnyounode verify solution-05.js
learnyounode verify solution-06.js
learnyounode verify solution-07.js
learnyounode verify solution-08.js
```

## Asynchronous Solution
`solution-08-async.js` uses Bluebird to turn Mongo into an asynchronous, Promise-based API. It requires Babel to support `async`/`await` syntax.

`solution-08-async.es6` is a shim to transpile with Babel.

#### Usage
```
learnyounode verify solution-08-async.js
```
