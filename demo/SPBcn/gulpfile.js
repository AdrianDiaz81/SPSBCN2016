'use strict';

const gulp = require('gulp');
const build = require('@microsoft/sp-build-web');

gulp.task('Hello', function() {
    console.log('Welcome');
});

  const spsbcn = require('./task');

build.addBuildTasks(spsbcn);  
build.initialize(gulp);
