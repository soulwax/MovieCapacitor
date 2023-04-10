import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'movie-capacitor',
  webDir: 'www',
  bundledWebRuntime: false,
  plugins: {
    SplashScreen: {
      launchShowDuration: 0,
    },
    BluetoothLe: {
      displayStrings: {
        scanning: 'Scanning...',
        cancel: 'Cancel',
        availableDevices: 'Available devices',
        noDeviceFound: 'No device found',
      },
    },
  },
};

export default config;
