const { withNativeFederation, shareAll } = require('@angular-architects/native-federation/config');

module.exports = withNativeFederation({

  name: 'microfrontend-clients',

  exposes: {
    './Clients': './src/app/pages/clients/clients.component.ts',
    './SelectedClients': './src/app/pages/selected-clients/selected-clients.component.ts',
    './Home': './src/app/pages/home/home.component.ts',

  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

  skip: [
    'rxjs/ajax',
    'rxjs/fetch',
    'rxjs/testing',
    'rxjs/webSocket',
    // Add further packages you don't need at runtime
  ]

  // Please read our FAQ about sharing libs:
  // https://shorturl.at/jmzH0

});
