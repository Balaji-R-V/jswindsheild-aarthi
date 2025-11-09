# Deployment Guide - JS Windshield Website to Vercel via GitHub

## Step 1: Push to GitHub

### 1.1 Create a GitHub Repository

1. Go to [GitHub.com](https://github.com) and sign in
2. Click the "+" icon in the top right → "New repository"
3. Repository name: `js-windshield-website` (or your preferred name)
4. Description: "JS Windshield - Professional Windshield Repair & Replacement Website"
5. Choose **Public** or **Private**
6. **DO NOT** initialize with README, .gitignore, or license (we already have files)
7. Click "Create repository"

### 1.2 Push Your Code to GitHub

After creating the repository, GitHub will show you commands. Use these:

```bash
# Add the remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/js-windshield-website.git

# Rename branch to main (if needed)
git branch -M main

# Push to GitHub
git push -u origin main
```

**OR if you prefer SSH:**

```bash
git remote add origin git@github.com:YOUR_USERNAME/js-windshield-website.git
git branch -M main
git push -u origin main
```

## Step 2: Deploy to Vercel

### 2.1 Sign Up/Login to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click "Sign Up" or "Log In"
3. Choose "Continue with GitHub" (recommended for easy integration)

### 2.2 Import Your GitHub Repository

1. After logging in, click "Add New..." → "Project"
2. You'll see a list of your GitHub repositories
3. Find `js-windshield-website` and click "Import"

### 2.3 Configure Project Settings

1. **Project Name**: `js-windshield-website` (or your choice)
2. **Framework Preset**: Select "Other" or leave default
3. **Root Directory**: Leave as `./` (default)
4. **Build Command**: Leave empty (static site)
5. **Output Directory**: Leave empty (static site)
6. **Install Command**: Leave empty (no dependencies)

### 2.4 Deploy

1. Click "Deploy"
2. Wait for deployment to complete (usually 1-2 minutes)
3. Your site will be live at: `https://js-windshield-website.vercel.app`

### 2.5 Private Link Options

#### Option A: Password Protection (Already Enabled)
- The website has password protection built-in
- Default password: `jswindshield2024`
- To change password: Edit `auth.js` and change `SITE_PASSWORD` variable
- To disable: Remove `<script src="auth.js" defer></script>` from `index.html`

#### Option B: Vercel Preview Deployments (Private by Default)
1. Create a new branch (not main/master):
   ```bash
   git checkout -b preview
   git push -u origin preview
   ```
2. Vercel will create a preview deployment
3. Preview URLs are **private** - only people with the link can access
4. Preview URLs look like: `https://js-windshield-website-git-preview-username.vercel.app`
5. These URLs are NOT publicly listed or searchable

#### Option C: Vercel Password Protection (Pro Feature)
1. Go to Project Settings → Security
2. Enable "Password Protection"
3. Set a password (requires Vercel Pro plan)

### 2.6 Custom Domain (Optional)

1. Go to your project settings
2. Click "Domains"
3. Add your custom domain (e.g., `jswindshield.com`)
4. Follow DNS configuration instructions

## Step 3: Automatic Deployments

Vercel automatically deploys:
- Every push to `main` branch → Production
- Every pull request → Preview deployment

## Troubleshooting

### If deployment fails:
1. Check Vercel build logs for errors
2. Ensure all files are committed to git
3. Verify `vercel.json` is correct
4. Check that `index.html` is in the root directory

### If images don't load:
1. Ensure image paths are relative (e.g., `images/logo.png`)
2. Check that all images are committed to git
3. Verify file names match exactly (case-sensitive)

## File Structure

Your project structure should be:
```
js-windshield-website/
├── index.html
├── styles.css
├── script.js
├── vercel.json
├── .gitignore
├── images/
│   ├── JS WINDSHIELDS LOGO (2).png
│   ├── cars/
│   └── insurance/
└── README.md
```

## Support

- Vercel Docs: https://vercel.com/docs
- GitHub Docs: https://docs.github.com
- Vercel Support: support@vercel.com

