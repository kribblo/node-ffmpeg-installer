#!/usr/bin/env node

var os = require('os');
var readVersion = require('../lib/read-version');

var platform = os.platform() + '-' + os.arch();
readVersion(platform);

