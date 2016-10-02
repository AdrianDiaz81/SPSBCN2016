'use strict';  
var  log = require('gulp-core-build').log;

var SPSBcn = {  
  execute: (config) => {
    return new Promise((resolve, reject) => {
      

        log(`Hello SPSBcn`);
        resolve();
      
    });
  },
  name: 'spsbcn'
};
exports.default = SPSBcn;  