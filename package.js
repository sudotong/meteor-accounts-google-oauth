Package.describe({
  summary: "Login service for Google accounts using native Google SDK for authorization",
  version: "0.0.1"
});

Package.onUse(function(api) {
  api.use(['oauth', 'oauth2'], ['server']);
  api.use(['underscore', 'random', 'service-configuration']);
  api.use('accounts-base', ['client', 'server']);
  api.use('http', ['server']);
  api.use('ecmascript', ['server']);

  // Export Accounts (etc) to packages using this one.
  api.imply('accounts-base', ['client', 'server']);
  api.use('accounts-oauth', ['client', 'server']);

  api.use('google', ['server']);

  api.addFiles("google.js", "server");
});
