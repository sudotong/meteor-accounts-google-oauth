Package.describe({
  summary: "Login service for Google accounts using native Google SDK for authorization",
  version: "0.1.1",
  name: "spencercarli:accounts-google-oauth",
  git: "https://github.com/spencercarli/meteor-accounts-google-oauth"
});

Package.onUse(function(api) {
  api.versionsFrom("METEOR@1.2");

  api.use(['oauth', 'oauth2'], ['server']);
  api.use(['underscore', 'random', 'service-configuration']);
  api.use('accounts-base', ['client', 'server']);
  api.use('http', ['server']);
  api.use('ecmascript', ['server']);

  // Export Accounts (etc) to packages using this one.
  api.imply('accounts-base', ['client', 'server']);
  api.use('accounts-oauth', ['client', 'server']);

  api.use('google-auth', ['server']);

  api.addFiles("google.js", "server");
});
