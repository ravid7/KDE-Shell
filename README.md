# SSHFS based automation script for *Nix & Mac 

## ( ADB | KDE connect ) + External Application Button {Firefox Extension}

This is a shell script intended to make your life a bit easier.

Basically it lets you send any object (Image, Video, Music, document) which you find over the internet directly to your device connected via KDE connect.



Usually, you have to download the file -> Open the folder -> look for the file -> transfer it to your mobile -> delete it if needed. By using this extension + script, you dont have to any such things, just click and forget.



# Installation 

+ Change the permission of the file `chmod +x dispatch`.

+ Copy the `dispatch` file `/usr/local/bin/`

+ Download **External Application Button** extension from firefox [https://addons.mozilla.org/en-US/firefox/addon/external-application/]()

+ After Installation, go to the settings page of this AddOn.

+ Create a new application with **Executable name** as dispatch and Arguments as *[HREF]*

+ Also check "Surround the arguments with quote characters".  

+ Select Image, Video, Audio Context inside Context Menus.

+ That's it, make sure you are connected (either via KDEconnect or ADB) to your device, right click on any image, gif, video adn select the desired action.


