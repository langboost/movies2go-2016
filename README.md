# movies2go-2016
Sample of statically hosting files with node. Used this on a raspberry pi for ad-hoc wifi content delivery.

## Setting it up on your Pi
* Get raspbian going on a pi
* Wifi drivers (had to compile one)
  * Includes getting wpa_supplicant up and going as a “server” or “host” to manage wireless connections. Various blogs/tutorials out there for this.
* sudo apt-get install nodejs
* sudo apt-get install npm
* git clone https://github.com/langboost/movies2go-2016.git
* Change the paths inside server.js to point to your repo
  * uploadsPath
  * assetsPath
* Test it with: “npm start” from the cloned directory
* Setup boot.sh (part of the git repo) as an init.d script, as an event trigger from an if-up interface, etc.
* Any fstab/mounting, network interfaces, etc work to persist the environment at boot on the pi. I used fstab to persist the mounting of a USB stick with content to share.

