# Yokeko Current — Setup Instructions

## What's in this folder

| File | Purpose |
|------|---------|
| `index.html` | The app itself |
| `manifest.json` | Makes it installable as a PWA |
| `sw.js` | Service worker (offline shell) |
| `icon-192.png` | Home screen icon |
| `icon-512.png` | Splash screen icon |

---

## Hosting on GitHub Pages (free, takes ~5 minutes)

1. Go to **github.com** and sign in (or create a free account).
2. Click **+** → **New repository**. Name it `yokeko-current`. Set it to **Public**. Click **Create repository**.
3. Click **uploading an existing file**, drag all 5 files in, click **Commit changes**.
4. Go to **Settings** → **Pages** → Source: **Deploy from a branch** → Branch: **main** → folder: **/ (root)** → **Save**.
5. After ~60 seconds, your app lives at:  
   `https://YOUR-USERNAME.github.io/yokeko-current/`

---

## Adding to your Android home screen

1. Open Chrome on your Android phone.
2. Navigate to your GitHub Pages URL above.
3. Tap the **three-dot menu** (⋮) in the top right.
4. Tap **"Add to Home screen"**.
5. Name it **Yokeko** → tap **Add**.

The app icon now lives on your home screen. One tap → current speed, no browser chrome.

---

## How the speed is calculated

The app calls NOAA's current predictions API for station **PUG1629** (Yokeko Point, Deception Pass, 7 ft depth) — a NOAA subordinate current station calibrated from actual 2016 measurements at your location.

The API returns the times and speeds of max flood, max ebb, and slack events. The app then interpolates between the two events bracketing right now using a cosine curve (the standard tidal interpolation method) to give you a smooth, realistic current speed at this exact moment.

The app auto-refreshes every 5 minutes while open.

---

## Data notes

- Source: NOAA CO-OPS, station PUG1629, Yokeko Point
- Depth: 7 feet
- Units: knots
- Green = flood (east into Cornet Bay / Skagit Bay)  
- Orange = ebb (west toward the narrows)
- These are **predicted** currents — wind and weather can cause real-world variation
