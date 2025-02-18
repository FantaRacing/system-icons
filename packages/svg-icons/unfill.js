// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// The 'replace' module doesn't work on Windows command line.
const r = require("replace");
const argv = require("yargs").argv;

const path = argv.path;

r({
    regex: /\sfill="(none|#212121|#111827|#6B7280|#242424|#EE0000|#E00)"/g,
    replacement: '',
    paths: [path],
    recursive: true,
    include: '*.svg',
    silent: true
});
