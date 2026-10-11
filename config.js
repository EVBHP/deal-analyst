// Deal Analyst runtime config. Safe to publish: the OAuth client ID is public by design,
// and the API key must be restricted (HTTP referrer https://evbhp.github.io/* + Picker API only).
window.DEAL_ANALYST_CONFIG = {
  googleClientId: '',   // e.g. 1234567890-abc.apps.googleusercontent.com
  googleApiKey: '',     // browser API key, referrer-restricted, Picker API only
  googleAppId: '',      // Cloud project NUMBER (needed only if scope is drive.file)
  // drive.readonly lets the app export any intake Sheet you pick (Internal consent screen = no Google review).
  // Switch to 'https://www.googleapis.com/auth/drive.file' (and set googleAppId) for the narrowest access.
  googleScope: 'https://www.googleapis.com/auth/drive.readonly',
  // Picker opens here: House Partner Team > Intake Lead Folders. Leave '' to open at the shared-drive list.
  driveStartFolderId: '1Eu4-S-1x0-pedR_dSX7tdo1fqkhebRZF',
};
