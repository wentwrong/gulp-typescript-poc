const { dest } = require('gulp');
const ts = require('gulp-typescript');

const projectWithMixedJsAndTs = ts.createProject('src/tsconfig.json');

function transpile () {
    return projectWithMixedJsAndTs
        .src()
        .pipe(projectWithMixedJsAndTs())
        .js
        .pipe(dest('lib'));
}

exports.build = transpile;