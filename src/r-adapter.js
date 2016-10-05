// example.js

import R from 'r-script';

// sync
var out = R("r-modules/hello-world.R")
    .data("hello world", 20)
    .callSync();
console.log(out);
