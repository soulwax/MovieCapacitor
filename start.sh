npm install -g @ionic/cli

ionic start movie-capacitor blank --type=angular

cd movie-capacitor

npm install
ionic cap copy
ionic cap sync
ionic build
ionic serve # run in web-browser (no native functions)
ionic capacitor run android --livereload --external --open

# Use the CLI to generate some pages and a service
ionic generate page pages/dabox
ionic generate page pages/scan
ionic generate service services/ble

# All "ionic capacitor" commands can be triggered with "npx cap" instead

# Add ios
npx cap add ios
npx cap open ios

# Add android
npx cap add android
npx cap open android

