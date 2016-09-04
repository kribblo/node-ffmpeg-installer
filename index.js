'use strict';

const os = require('os');
const fs = require('fs');
const path = require('path');

const platform = os.platform() + '-' + os.arch();

const packageName = '@ffmpeg-installer/' + platform;
const version = require('./package.json').optionalDependencies[packageName];

if (!version) {
    console.error('Unsupported platform/architecture:', platform);
    process.exit(1);
}

const binary = platform === 'win32' ? 'ffmpeg.exe' : 'ffmpeg';

const ffmpegPath = path.join(__dirname, 'node_modules', packageName, binary);

module.exports = {
    path: ffmpegPath,
    version: version
};
