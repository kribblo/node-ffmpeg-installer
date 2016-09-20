#!/usr/bin/env node

var verifyFile = require('../lib/verify-file');
var ffmpeg = require('../');

var successfulInstall = verifyFile(ffmpeg.path);
if (!successfulInstall) {
    console.error('ERROR: Installed path does not exist:', ffmpeg.path);
    process.exit(1);
}
