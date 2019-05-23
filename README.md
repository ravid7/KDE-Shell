# SSHFS based automation script for *Nix & Mac 

[![License](http://img.shields.io/:license-LGPLv2.1-blue.svg)](https://github.com/ravid7/KDE-Shell/blob/master/LICENSE)
[![Build Status](https://travis-ci.org/ravid7/KDE-Shell.svg?branch=master)](https://github.com/ravid7/KDE-Shell)

## ( ADB | KDE connect ) + External Application Button {Firefox Extension}

This is a shell script intended to make your life a bit easier.

Basically it lets you send any object (Image, Video, Music, document) which you find over the internet directly to your device connected via KDE connect.

Usually, you have to download the file -> Open the folder -> look for the file -> transfer it to your mobile -> delete it if needed. By using this extension + script, you dont have to any such things, just click and forget.

## Installation

+ Change the permission of the file `chmod +x dispatch`.

+ Copy the `dispatch` file `$HOME/.local/bin/` (Make sure `$HOME/.local/bin` in in your `$PATH`)

+ Download **External Application Button** extension from [Firefox](https://addons.mozilla.org/en-US/firefox/addon/external-application/)

+ After Installation, go to the settings page of this AddOn.

+ Create a new application with **Executable name** as dispatch and Arguments as *[HREF]*

+ Also check "Surround the arguments with quote characters".

+ Select Image, Video, Audio Context inside Context Menus.

+ That's it, make sure you are connected (either via KDEconnect or ADB) to your device, right click on any image, gif, video and select the desired action.


