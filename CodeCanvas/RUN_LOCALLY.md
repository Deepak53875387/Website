# 🚀 Run Your Modernized Website Locally

## Quick Start Guide

### Step 1: Clone the Repository
```bash
git clone https://github.com/Deepak53875387/Website.git
cd Website/CodeCanvas
```

### Step 2: Install Node.js
Make sure you have Node.js installed (v18+)
Download from: https://nodejs.org/

Check if installed:
```bash
node --version
npm --version
```

### Step 3: Install Dependencies
```bash
npm install
```

### Step 4: Start the Server
```bash
npm run dev
```

### Step 5: Open Your Browser
Go to: **http://localhost:5000**

---

## That's it! 🎉

Your modernized website will be running locally on your computer.

You'll see all the improvements:
- Modern typography and spacing
- Smooth animations
- Enhanced project cards
- Better navigation
- Dark/light mode toggle

---

## Troubleshooting

**Port already in use?**
```bash
# Kill the process on port 5000
# On Mac/Linux:
lsof -ti:5000 | xargs kill -9

# On Windows:
netstat -ano | findstr :5000
taskkill /PID <PID_NUMBER> /F
```

**Dependencies not installing?**
```bash
# Clear cache and try again
rm -rf node_modules package-lock.json
npm install
```
