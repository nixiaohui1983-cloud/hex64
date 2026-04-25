import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.hex64.app',
  appName: 'Hex64',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      backgroundColor: "#667eea",
      showSpinner: false
    },
    StatusBar: {
      style: 'DARK',
      backgroundColor: "#1a1a1a"
    }
  }
};

export default config;
