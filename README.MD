# Portal Items

Portal Items is an Android app that is a companion app to [Heimdall](https://heimdall.site/). This Android app loads all of the items that you have added to Heimdall and displays them in a list with a hyperlink to launch each Heimdall item in your browser for quick and easy quick access.

This app is made up of 2 parts
- Portal-Backend: This is a Docker container which will get the items from Heimdall's database. This is accomplished by accessing Heimdall's database file app.sqlite.
- Portal-Frontend: The Android app which displays the Heimdall Items. You can sideload the apk in the Releases section or build the app yourself. 

This app works by you giving the Portal-Backend accesses to Heimdall's database file which reads the title and URL of all Heimdall items. In order to make sure that only you and no one else can access your own Heimdall items, you will set an AUTH_KEY on the backend that must be provided in the Android app in order for it to work.

### Build Portal-Backend

1. `cd Portal-Backend`
1. Edit portalitems.yml and change `YOURNETWORK` and `PATH_TO_HEIMDALL_DATA` accordingly. 
1. Edit docker/portalitems.js and set `AUTH_KEY` with a secure password. It can be whatever you want but it is better to use a long key here.
1. Build the Portal Items image: `docker build docker/ -t portalitems:latest`
1. Build the Portal Items docker container: `docker-compose -f portalitems.yml up -d`

### Build Portal-Frontend Android app
1. `cd Portal-Frontend`
1. `npm install`
1. `npm install -g @ionic/cli native-run cordova-res`
1. `ionic build`
1. `ionic cap copy`
1. `ionic cap open android`
1. Android Studio should launch and open the Portal-Frontend Android app.
1. You can now build an Android apk by going to `Build-> Build Bundle(s) / APK(s) -> Build APK(s)` or plug in an Android phone and install the app directly on your phone.
1. When you launch the app, tap on the menu icon and paste the `AUTH_KEY` that you set above. 