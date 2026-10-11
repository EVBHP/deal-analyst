# Deal Analyst (local copy)
Faithful mirror of https://lovely-kashata-3657c1.netlify.app/ (single-file React 18 + in-browser Babel app).
Logo: House Partners logo from gohousepartners.com (assets/logo.png original 3000x2102; logo-web.png header; logo-plate.png for dark PDF headers; favicon.png). Embedded base64 LOGO_* constants regenerated from it.
CDN libraries (React, ReactDOM, Babel, pdf.js, JSZip, jsPDF) localized under vendor/.
Still external: Google Fonts (cosmetic), Calendly/Zillow/Redfin/Google links (user-clicked only).
Backend not duplicated: POST /.netlify/functions/api-proxy (relative path) used for
HouseCanary property data fetch and Airtable deal sync. Locally it fails gracefully; data stays in localStorage ('tphp-deal-eval').
Run: python3 -m http.server 8765  then open http://localhost:8765/
Google Drive picker: see SETUP-GOOGLE-DRIVE.md; values go in config.js.
