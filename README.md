# node-ffmpeg-installer

Platform independent binary installer of [FFmpeg](https://ffmpeg.org/) for node projects. Useful for tools that should "just work" on multiple environments.

Installs a binary of `ffmpeg` for the current platform and provides a path and version. Supports Linux, Windows and Mac OS/X.

A combination of package.json fields `optionalDependencies`, `cpu`, and `os` let's the installer only download the binary for the current platform. See also "Warnings during install", below.

## Install

    npm install --save @ffmpeg-installer/ffmpeg
    
## Usage examples

```javascript
const ffmpeg = require('@ffmpeg-installer/ffmpeg');
console.log(ffmpeg.path, ffmpeg.version);
```

### process.spawn()

```javascript
const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;
const spawn = require('child_process').spawn;
const ffmpeg = spawn(ffmpegPath, args);
ffmpeg.on('exit', onExit);
```

### [fluent-ffmpeg](https://github.com/fluent-ffmpeg/node-fluent-ffmpeg)

```javascript
const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;
const ffmpeg = require('fluent-ffmpeg');
ffmpeg.setFfmpegPath(ffmpegPath);
```

## Known issues

### Warnings during install

To automatically choose the binary to install, [optionalDependencies](https://docs.npmjs.com/files/package.json#optionaldependencies) are used. This currently outputs warnings in the console, an issue that is [tracked by the npm team here](https://github.com/npm/npm/issues/9567).

### Wrong path under Electron with Asar enabled

It's a [known issue](https://github.com/electron-userland/electron-packager/issues/740) that Asar breaks native paths. As a workaround, if you use Asar, you can do something like this:

```javascript
const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path.replace('app.asar', 'app.asar.unpacked');
```

## The binaries

Downloaded from the sources listed at [ffmpeg.org](https://ffmpeg.org/download.html):

* Linux 32-bit: (20180429-g19c3df0cd): https://www.johnvansickle.com/ffmpeg/
* Linux 64-bit: (20180429-g19c3df0cd): https://www.johnvansickle.com/ffmpeg/
* Mac OS/X (91158-g63c4a4b0d6): https://evermeet.cx/ffmpeg/
* Windows 32-bit (20180102-41e51fb): https://ffmpeg.zeranoe.com/builds/win32/static/
* Windows 64-bit (20180102-41e51fb): https://ffmpeg.zeranoe.com/builds/win64/static/

For version updates, submit issue or pull request.

## Upload new versions

In every updated `platforms/*` directory:
 
    npm run upload
    
## See also

* [node-ffprobe-installer](https://www.npmjs.com/package/@ffprobe-installer/ffprobe) - fork of this project that does the same thing for FFprobe
