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

3. **Configure for repository deployment** (if not using username.github.io):
   - Edit `next.config.js`
   - Uncomment and update these lines:
     ```javascript
     basePath: '/YOUR_REPO_NAME',
     assetPrefix: '/YOUR_REPO_NAME',
     ```

4. **Push changes** - The GitHub Action will automatically build and deploy!

### Access Your Site

- **User/Organization site**: `https://YOUR_USERNAME.github.io/`
- **Repository site**: `https://YOUR_USERNAME.github.io/YOUR_REPO/`

## Technology Stack

- **Next.js 15** - React framework
- **Spline** - 3D design and runtime
- **TypeScript** - Type safety
- **CSS3** - Modern styling with glassmorphism

