# gulp-typescript-poc
PoC for `gulp-typescript` package bug with `allowJs`

`tsc` works as expected:
```
$ npx tsc -p .\src\tsconfig.json
```

But when `gulp-typescript` used, option `allowJs: true` doesn't inherited from base `tsconfig.json`
```
$ gulp build
```
Produces an output:
```
No inputs were found in config file 'proof-of-concept\src\tsconfig.json'. Specified 'include' paths were '["**/*"]' and 'exclude' paths were '[]'.
```