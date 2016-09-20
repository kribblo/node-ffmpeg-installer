'use strict';

function readVersion(platform) {
    var packageName = '@ffmpeg-installer/' + platform;
    var version = require('../package.json').optionalDependencies[packageName];

    if (!version) {
        console.error('ERROR: Unsupported platform/architecture:', platform);
        process.exit(1);
    }

    return version;
}

module.exports = readVersion;
