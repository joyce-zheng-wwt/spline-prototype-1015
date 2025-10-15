# GreenTally - Your Ultimate Golf Companion

A beautiful 3D interactive website for GreenTally golf app, built with Next.js and Spline.

## Features

- 🎮 Interactive 3D Spline scene
- 📜 Scroll-controlled camera rotation
- 🎨 Modern glassmorphic UI design
- 📱 Fully responsive

## Local Development

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deploy to GitHub Pages

### Setup

1. **Create a GitHub repository** and push your code:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**:
   - Go to your repository on GitHub
   - Navigate to **Settings** → **Pages**
   - Under "Build and deployment":
     - Source: Select **GitHub Actions**

3. **Configure for repository deployment**:
   - The `next.config.js` is already configured with:
     ```javascript
     basePath: '/greentally',
     assetPrefix: '/greentally',
     trailingSlash: true,
     ```
   - If deploying to a different repository name, update these values accordingly

4. **Create GitHub Actions workflow file**:
   - Create a file at `.github/workflows/deploy.yml` with the following content:
   ```yaml
   name: Deploy to GitHub Pages

   on:
     push:
       branches: [main]

   jobs:
     build-and-deploy:
       runs-on: ubuntu-latest
       steps:
         - name: Checkout
           uses: actions/checkout@v3

         - name: Setup Node.js
           uses: actions/setup-node@v3
           with:
             node-version: 18

         - name: Install dependencies
           run: npm ci

         - name: Build
           run: npm run build

         - name: Deploy
           uses: JamesIves/github-pages-deploy-action@v4
           with:
             folder: out
             branch: gh-pages
   ```

5. **Push changes** - The GitHub Action will automatically build and deploy!

### Access Your Site

- **User/Organization site**: `https://YOUR_USERNAME.github.io/`
- **Repository site**: `https://YOUR_USERNAME.github.io/YOUR_REPO/`

## Technology Stack

- **Next.js 15** - React framework
- **Spline** - 3D design and runtime
- **TypeScript** - Type safety
- **CSS3** - Modern styling with glassmorphism

## Troubleshooting

### Spline Assets Not Loading

If you encounter issues with Spline assets not loading (e.g., "Data read, but end of buffer not reached" error):

1. **Check path configuration**:
   - Ensure `basePath` and `assetPrefix` in `next.config.js` match your deployment URL path
   - Verify that the Spline component uses these paths correctly:
     ```jsx
     <Spline
       scene={`${basePath}/scene.splinecode`}
       wasmPath={`${basePath}/`}
       onLoad={onLoad}
     />
     ```

2. **Browser console errors**:
   - Check for CORS issues or 404 errors in the browser console
   - Verify that all required files (scene.splinecode, draco_decoder.wasm, etc.) are accessible

3. **Client-side rendering**:
   - Ensure Spline only renders in browser context with:
     ```jsx
     {typeof window !== 'undefined' && (
       <Spline ... />
     )}
     ```

### CSS Not Loading

1. **Check network tab** in browser developer tools to see if CSS files are being loaded
2. **Verify paths** - CSS should be loaded from the correct path with basePath included
3. **Add meta viewport tag** in layout.tsx to ensure proper mobile rendering

