'use strict';

var os = require('os');
var fs = require('fs');
var path = require('path');

var platform = os.platform() + '-' + os.arch();

var packageName = '@ffmpeg-installer/' + platform;
var version = require('./package.json').optionalDependencies[packageName];

if (!version) {
    console.error('Unsupported platform/architecture:', platform);
    process.exit(1);
}

var binary = os.platform() === 'win32' ? 'ffmpeg.exe' : 'ffmpeg';

var ffmpegPath = path.resolve(__dirname, '..', platform, binary);

module.exports = {
    path: ffmpegPath,
    version: version
};
