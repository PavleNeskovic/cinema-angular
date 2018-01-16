// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
   // Initialize Firebase
  firebase : {
    apiKey: "AIzaSyA1H6UKcPNCkUPuj0RB6n4IhAurJDci2YI",
    authDomain: "cinema2-2d714.firebaseapp.com",
    databaseURL: "https://cinema2-2d714.firebaseio.com",
    projectId: "cinema2-2d714",
    storageBucket: "cinema2-2d714.appspot.com",
    messagingSenderId: "56239811692"
  }
};
