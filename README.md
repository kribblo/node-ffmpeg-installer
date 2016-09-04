# node-ffmpeg-installer

Platform independent binary installer of [FFmpeg](https://ffmpeg.org/) for node projects. Useful for tools that should "just work" on multiple environments.

Installs a binary of `ffmpeg` for the current platform and provides a path and version. Supports Linux, Windows and Mac OS/X.

A combination of package.json fields `optionalDependencies`, `cpu`, and `os` let's the installer only download the binary for the current platform.

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
const ffmpeg = spawn('ffmpeg', args);
ffmpeg.on('exit', onExit);
```

### fluent-ffmpeg

```javascript
const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;
const ffmpeg = require('fluent-ffmpeg');
ffmpeg.setFfmpegPath(ffmpegPath);
```

## The binaries

Downloaded from the sources listed at [ffmpeg.org](https://ffmpeg.org/download.html):

* Linux (v3.1.3): https://www.johnvansickle.com/ffmpeg/
* Mac OS/X (v3.1.3): https://evermeet.cx/ffmpeg/
* Windows (v3.0.1): https://ffmpeg.zeranoe.com/builds/

For version updates, submit issue or pull request.
