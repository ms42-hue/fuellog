# FuelLog — GitHub Pages Deployment Guide

Your personal AI nutrition & weight tracker, installable as a home screen app on iPhone.

---

## Step 1: Get an Anthropic API Key

FuelLog uses Claude AI to estimate calories. You need a free API key.

1. Go to https://console.anthropic.com
2. Sign up or log in
3. Click **API Keys** → **Create Key**
4. Copy the key (starts with `sk-ant-...`)

You'll paste this into the app on first launch — it's saved locally on your device and never shared.

---

## Step 2: Create a GitHub Repository

1. Go to https://github.com and sign in (or create a free account)
2. Click the **+** button → **New repository**
3. Name it: `fuellog`
4. Set it to **Public** ✓
5. Click **Create repository**

---

## Step 3: Upload the Files

1. On your new empty repository page, click **uploading an existing file**
2. Drag ALL files from this folder into the upload area:
   - `index.html`
   - `manifest.json`
   - `sw.js`
   - `icon-192.png`
   - `icon-512.png`
3. Scroll down, click **Commit changes**

---

## Step 4: Enable GitHub Pages

1. In your repository, click **Settings** (top menu)
2. In the left sidebar, click **Pages**
3. Under **Source**, select **Deploy from a branch**
4. Set Branch to **main** and folder to **/ (root)**
5. Click **Save**

GitHub will show: *"Your site is live at https://YOUR-USERNAME.github.io/fuellog"*

⏱ It takes about 1–2 minutes to go live.

---

## Step 5: Install to iPhone Home Screen

1. Open **Safari** on your iPhone (must be Safari, not Chrome)
2. Go to: `https://YOUR-USERNAME.github.io/fuellog`
3. Tap the **Share** button (box with arrow pointing up)
4. Scroll down and tap **Add to Home Screen**
5. Tap **Add**

FuelLog will appear on your home screen like a native app — full screen, no browser bar, with its own icon.

---

## Step 6: Enter Your API Key

1. Open FuelLog from your home screen
2. Tap the **⚙ API** button in the top right
3. Paste your Anthropic API key
4. Tap **Save & Continue**

Your key is stored locally on your device only.

---

## Setting Up Apple Health Auto-Sync

Once the app is installed:

1. Open FuelLog → tap the **⚖️ Weight** tab
2. Tap **SETUP** under "Apple Health Auto-Sync"
3. Follow the 5-step iOS Shortcuts instructions shown in the app
4. Your Runstar-R5 weight will sync automatically every morning at 7am

---

## Updating the App

If you ever get an updated `index.html` from Claude:
1. Go to your GitHub repository
2. Click on `index.html`
3. Click the pencil ✏️ edit icon
4. Replace the contents, click **Commit changes**

The app on your phone will update automatically within a few minutes.

---

## Your App URL

```
https://YOUR-USERNAME.github.io/fuellog
```

Replace `YOUR-USERNAME` with your actual GitHub username.
