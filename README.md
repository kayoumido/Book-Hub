# Find my books
> Find my books is a [Framework7](http://www.idangero.us/framework7) based application that allows you to manage your book library. You can add books using their ISBN code, either by scanning it or manually entering it. Once your library is created, you can set books as "favorite" and rate them.

## Installation

### Cordova CLI
The Cordova command-line-tool is distributed as a [npm](https://www.npmjs.com/) package.
To install `cordova`, follow these steps:
1. Download and install [Node.js](https://nodejs.org/en/). Once installed, you should be able to use `node` and `npm` in your command line.
2. Install `cordova` module using `npm`.
```
$ npm i -g cordova
```
The `-g` flag tells `npm` to install `cordova` globally. if not specified it will be installed in the `node_modules` subdirectory of the working directory.

### The project
In the directory where you maintain your source code, clone the project:
```
$ git clone https://github.com/CPNV-ES/MOB1-Books-Framework7.git
```
_You can just download the zip file._

All the following commands need to be run within the project's directory:
```
$ cd MOB1-Books-Framework7
```

Now you need to install the project dependencies:
```
$ npm i
```

#### Add platforms
The project was created for android devices, so we need to add the android platform.
```
$ cordova platform add android
```
#### Pre-requisites
To build and run apps, you need to install SDKs for each platform you wish to target. Alternatively, if you are using the browser for development you can use the browser platform which does not require any platform SDKs.

To check if you satisfy requirements for building the platform:
```
$ cordova requirements
Java JDK: installed .
Android SDK: installed
Android target: installed android-19,android-21,android-22,android-23,Google Inc.:Google APIs:19,Google Inc.:Google APIs (x86 System Image):19,Google Inc.:Google APIs:23
Gradle: installed

Requirements check results for ios:
Apple OS X: not installed
Cordova tooling for iOS requires Apple OS X
Error: Some of requirements check failed
```
##### See Also
* [Android platform requirements](https://cordova.apache.org/docs/en/7.x/guide/platforms/android/index.html#requirements-and-support)

#### Build the app
Run the following command to build the project for __all platforms__
```
$ cordova build
```
You can specify the platform for which you want to build:
```
$ cordova build android
```
You should find the apk in `C:/.../platforms/android/build/outputs/apk/android-debug.apk`.

_This will build an unsigned apk. If you wish to build a signed apk please refer [to cordova's](https://cordova.apache.org/docs/en/7.x/guide/overview/index.html) and [android's](https://developer.android.com/studio/publish/app-signing.html) documentation_

#### Test the app
When developping it takes quite some time to build the apk and then transfer it on a device to install, thats why you can use an AVD to emulate a device on your machine. Via Android Studio you can creat a new AVD. Then you only need to run:
```
$ cordova run <platform>
```
_If you plug in a device, it will run the app on the device and not the AVD_

##### See also
[Managing AVDs](https://developer.android.com/studio/run/managing-avds.html)

#### Add plugins
Here's a list of the plugins this project uses:
* [Browser Sync](https://github.com/phonegap/phonegap-plugin-barcodescanner) : It allows you to refresh your browser/AVD when developping. You wont need to rebuild the project so you can test your latest functionnality.
* [Barcode Scanner](https://github.com/nparashuram/cordova-plugin-browsersync) : This will allow us to use the devices camera so we can scan the ISBN code of books.

The plugins beeing set in the `config.xml`, when we add a platform, cordova will automatically install the plugins for that platform. If you wish you can manually install them:
```
$ cordova plugin add phonegap-plugin-barcodescanner
$ cordova plugin add cordova-plugin-browsersync
```
