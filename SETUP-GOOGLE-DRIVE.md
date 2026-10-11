# Google Drive picker setup (one time, ~10 min)

Use the Google account that owns the House Partners Workspace.

1. **Create a project:** https://console.cloud.google.com/projectcreate, name it `deal-analyst`, then click Create. Write down the **Project number** (Dashboard > Project info).
2. **Enable the APIs:** APIs & Services > Library. Enable **Google Drive API** and **Google Picker API**.
3. **OAuth consent screen** (APIs & Services > OAuth consent screen / "Google Auth Platform"):
   - User type: **Internal** (Workspace only, so there's no Google verification). App name `Deal Analyst`, then fill in the support and developer emails.
   - Data access / Scopes: add `https://www.googleapis.com/auth/drive.readonly`.
4. **OAuth client:** Credentials > Create credentials > **OAuth client ID** > Application type **Web application**.
   - Authorized JavaScript origins: `https://evbhp.github.io` (add `http://localhost:8765` for local testing).
   - No redirect URIs are needed. Then Create, and copy the **Client ID** (`…apps.googleusercontent.com`). The client secret is not used.
5. **API key:** Credentials > Create credentials > **API key**, then Edit:
   - Application restrictions: **Websites**, `https://evbhp.github.io/*` (plus `http://localhost:8765/*` if wanted).
   - API restrictions: **Restrict key**, **Google Picker API** only. Save, and copy the key.
6. **Send back:** Client ID, API key and Project number. They go in `config.js` (`googleClientId`, `googleApiKey`, `googleAppId`). The client ID and the restricted key are safe to publish; never send the client secret.

The first time someone clicks "Pick from Google Drive", Google asks them to sign in and allow read-only Drive access. The picker opens in House Partner Team > Intake Lead Folders (`driveStartFolderId` in config.js).
