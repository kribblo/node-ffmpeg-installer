#!/usr/bin/env bash

file platforms/darwin-x64/ffmpeg | grep -qF "Mach-O" || (echo "Not OK darwin!" && exit 1)

file platforms/linux-x64/ffmpeg | grep -qF "ELF 64-bit" || (echo "Not OK linux-x64!" && exit 1)
file platforms/linux-ia32/ffmpeg | grep -qF "ELF 32-bit" || (echo "Not OK linux-ia32!" && exit 1)

file platforms/win32-x64/ffmpeg.exe | grep -qF "PE32+" || (echo "Not OK win32-x64!" && exit 1)
file platforms/win32-ia32/ffmpeg.exe | grep -qF "PE32" || (echo "Not OK win32-ia32!" && exit 1)
