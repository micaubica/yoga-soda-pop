# Yoga Soda Pop — Cloudflare Pages

This folder is a Cloudflare-ready static export of the Yoga Soda Pop website.

## Recommended: deploy through GitHub

1. Create a new empty GitHub repository.
2. Upload every file and folder from this package to the repository root.
3. In Cloudflare, open **Workers & Pages → Create application → Pages → Import an existing Git repository**.
4. Select the GitHub repository.
5. Use these build settings:
   - Production branch: `main`
   - Framework preset: `Next.js (Static HTML Export)`
   - Build command: `npm run build`
   - Build output directory: `out`
   - Root directory: leave blank
6. Select **Save and Deploy**.

## Local test

Requirements: Node.js 22 or newer.

```bash
npm ci
npm run build
```

The deployable site will be generated in the `out` folder.

## Direct Upload alternative

Run the local test commands above, then upload the generated `out` folder to a Cloudflare Pages Direct Upload project. GitHub deployment is recommended because it enables automatic updates.

## Domain

First verify the `pages.dev` address works. Then open the Pages project and select **Custom domains → Set up a domain**. Add the root domain and `www` version. If the domain is registered with GoDaddy, use the two Cloudflare nameservers shown in Cloudflare under the domain's Overview page.

## Contact and social links

- Email: yogasodapop@gmail.com
- YouTube: youtube.com/@yogasodapop
- YouTube Beats: youtube.com/@yogasodapopbeats
- Instagram: instagram.com/yogasodapop
- Instagram Beats: instagram.com/yogasodapopbeats
