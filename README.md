# Lagon — WebAR Restaurant Menu

Responsive restaurant menu prototype built with React, Vite, Tailwind CSS and Google model-viewer.

## Run locally

Install Node.js, then run in this folder:

```sh
npm install
npm run dev
```

## Production build

```sh
npm run build
```

Deploy the resulting `dist` folder to a static website host. Uploading this source repository to GitHub alone does not deploy the website.

## Included

- 58 dishes with prototype prices between MUR 500 and MUR 700
- 82 optimized food photos and 12 supplied GLB models
- Six languages, light/dark themes, filters, photo drawers and cart
- Waiter-facing order summary; orders are not sent to a backend

Native AR needs a compatible mobile device and HTTPS. Physical model scale and native AR should be verified on the target phones.

## Upload to GitHub

Upload the contents of this folder, including `src` and `public`. Keep their folder structure intact. Do not upload the ZIP itself as your application source.

If uploading through GitHub's website, upload root files first, then `src`, then `public`. All assets are inside `public/assets`.

Menu data is in `src/data.js` and `src/extra-data.js`. This is demonstration content, not a live restaurant ordering service.
