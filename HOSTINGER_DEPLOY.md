Hostinger Git Deployment (recommended)
====================================

This repository is prepared to deploy to Hostinger using the Git deployment feature. The workflow builds the project and publishes the production output into the `build` branch; Hostinger can pull `build` and deploy the static files to your site root (`public_html`).

What I added to the repo
- `public/.htaccess` — copied into `dist/` during build. Adds SPA fallback routing and reasonable upload limits.
- CI workflow restored to publish `dist/` to the `build` branch on push to `main`.

Steps to configure Hostinger (no SSH required)
1. Log into Hostinger and go to Hosting → Manage for the target site.
2. In the Control Panel, find Git or Git Deployment (often under Advanced).
3. Add / verify the repository:
   - Repository URL: `https://github.com/Beastburner/lazycook.git`
   - Branch: `build`
4. Click Redeploy / Pull / Deploy (button text varies). Hostinger will pull the `build` branch and copy files into the site folder (usually `public_html`).
5. Confirm that `index.html` and `assets/` are present in the site root via File Manager.

If you get a "divergent branches" error on Hostinger
- Use the Control Panel's Redeploy option (it will re-clone or deploy cleanly).
- Or: use the File Manager to upload `dist/` contents manually (build locally with `npm run build` and upload the files inside `dist/` to `public_html`).

Notes and troubleshooting
- Clear browser cache or open an incognito window after deployment.
- If routing shows 404s on refresh, ensure the `.htaccess` is present in the site root.
- If large binary files cause push problems, consider moving video assets to an external host (Cloudflare R2, S3, Vimeo) or use Git LFS for repository storage.

Want me to do it for you?
- I can run the build and push a fresh `build` update now, then walk you through the Hostinger Redeploy step and confirm the site is live. Reply "do it" and I will trigger the build & publish and then check `build` branch contents.
