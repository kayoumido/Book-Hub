# Find my books
> Find my books is a [Framework7](http://www.idangero.us/framework7) based application that allows you to manage your book library. You can add books using their ISBN code, either by scanning it or manually entering it. Once your library is created, you can set books as "favorite" and rate them.

## Requirements

* [Node.js](https://nodejs.org) : The project beeing highly developed in javascript you'll need it to install the dependencies.
* [Cordova](http://cordova.apache.org/) : Framework7 is base of cordova so it's needed to compile the porject, intall plugins and add platorms.

## Instalation
_All of the following commands must be executed in the project folder!_

Fist of all you need to clone the project either by downloading the zip or using the git CLI.
```
$ git clone https://github.com/CPNV-ES/Joutes.git
```  
Then you need to install Cordova.
```
$ npm i -g cordova
```
Now you need to install all of the project dependencies saved in `package.json`.
```
$ npm i
```

### Platforms
Find my books is guarranteed to work in the Browser and Android (>= Android 4.1 Jelly Bean API 16).
As for IOS it kinda works. It wasn't fully tested so I can't guarrantee it fully works.
```
$ cordova platform add <browser/android/ios>
```

#### Browser
No specific requirements except Google Chrome. It doesn't work any other browsers.

#### Android
To be able to run it on android, there are some prerequisites.

* First, you must have the [Java Development Kit (JDK) 8](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html) or later.  
* Second you need to have an android SDK. The simplest way to install them is to install [Android Studio](https://developer.android.com/studio/index.html). Once installed, launch it and open the SDK manager and intall the wanted SDK. For more details on the SDK manager click [here](https://developer.android.com/studio/intro/update.html).  
If you want to work with a virtual android device, you can add a new AVD via android studio. For more detail on AVD click [here](https://developer.android.com/studio/run/managing-avds.html).


#### IOS
For IOS development please follow the [official documentation](http://cordova.apache.org/docs/en/latest/guide/platforms/ios/index.html).

## Plugins
Plugins are an integral part of the cordova ecosystem. They provide an interface for Cordova and native components to communicate with each other and bindings to standard device APIs. This enables you to invoke native code from JavaScript.
Here is a list of all the plugins used it this project.

* (Browser Sync)[https://github.com/phonegap/phonegap-plugin-barcodescanner] : It allows you to refresh your browser/AVD when developping. You wont need to rebuild the project so you can test your latest functionnality.
* (Barcode Scanner)[https://github.com/nparashuram/cordova-plugin-browsersync] : This will allow us to use the devices camera so we can scan the ISBN code of books.

### Instalation
Normaly when adding the platforms, cordova will see the plugins in the `config.xml` file and automaticlly install them. But if they aren't installed, you can manually install them.
```
$ cordova plugin add phonegap-plugin-barcodescanner
$ cordova plugin add cordova-plugin-browsersync
```

## Usage
### Development
When developping you can just use cordovas run command to quickly test your changes
```
$ cordova run <browser/android>
```
if you are using Browser Sync
```
$ cordova run <browser/android> -- --live-reload
```

### Build an APK
