
# Movie Capacitor

For Debugging and Prototyping BLE on iOS and Mobile Devices using ionic v6 with angular v15.
Ended up being a movie application for all platforms.

## Prerequisites

You need node and npm to be installed and available from cli. On windows and linux, also install android studio.
On macos additionally, have xcode on the ready.


### Important:

For demonstration purposes in this particular app I added the TMDB api.
In order for the demo app to work for now, [register here](https://www.themoviedb.org/signup) and get your own api key.

After creating the .env file from .sample-env, add your api key to the .env file after the `MOVIE_API_KEY=` part.

### Install ionic cli

Open a shell of your choice then, execute the following commands:

```shell
npm install -g @ionic/cli
```

This installs the ionic cli globally.

### create a .env file from .sample.env

```shell
cp .sample.env .env
```


Navigate to this project after cloning it from git within your shell, then execute these commands:


```shell
npm i              # install all deps
npm run config     # IMPORTANT: I use .env and a set-env.js script to generate the angular environment.ts variable!
ionic cap copy     # See for explanation down below ... 1.)
ionic cap sync     # ... 2.)
ionic build        # ... 3.)
ionic serve        # serve the app to a local browser - default port is 8100
```

1. `ionic cap copy` - This command is used to copy the web assets from your Ionic app to your native project. When you run this command, Ionic will look at your `angular.json` file and copy the files in the `assets` and `www` directories to your native project. This command is typically run after making changes to your web assets that you want to include in your native app, such as modifying CSS, HTML or JavaScript code.

2. `ionic cap sync` - This command is used to synchronize the native projects with any changes made to the web assets of your Ionic app. This command is typically used after making changes to the web assets and running `ionic cap copy`. `ionic cap sync` will perform several tasks, including updating the native project dependencies, syncing the web assets, and generating any necessary native code. It's important to run this command to ensure that your native project is up to date with the latest changes you made to your Ionic app.

3. `ionic build` - This command is used to compile your Ionic app and generate the necessary files for a web app build. When you run `ionic build`, Ionic will compile your app's TypeScript code into JavaScript, bundle your app's assets, and generate any necessary CSS and HTML files. This command is typically used when you want to deploy your app to a web server or when you want to run it locally on your computer. Once the build is complete, you will find the compiled files in the `www` directory.

## Android
If all the Prerequisites are met, you need to run the following command. Attention: It will open android studio as well. This is normal behaviour.

```shell
ionic capacitor add android
ionic capacitor run android --livereload --external --open
```

## Execute on a mac for iOS

```shell
ionic capacitor add ios
ionic capacitor open ios # opens xcode
```

## License

Proprietary



## Authors's afterword

Best regards and have fun playing around,
- [@soulwax](https://www.github.com/soulwax)

