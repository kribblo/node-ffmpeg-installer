'use strict';

const os = require('os');
const path = require('path');

const test = require('tape');
const semver = require('semver');

const ffmpegInstaller = require('../index');

const platform = os.platform() + '-' + os.arch();
const binary = platform === 'win32' ? 'ffmpeg.exe' : 'ffmpeg';

test('', (t) => {
    //console.log(ffmpegInstaller.path);
    //console.log(ffmpegInstaller.version);

    t.true(ffmpegInstaller.path.indexOf(platform) > 0, 'Contains platform');
    t.true(ffmpegInstaller.path.indexOf(binary) > 0, 'Contains binary');
    t.true(semver.valid(ffmpegInstaller.version), 'Valid version number');
    t.end();
});