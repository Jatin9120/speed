# 🚀 Deployment Guide for Vercel

## 🔐 Environment Variables Setup

Your Firebase credentials are now stored securely in environment variables. Here's how to deploy to Vercel:

### **Step 1: Push to GitHub**
```bash
git add .
git commit -m "Ready for deployment with secure environment variables"
git push origin main
```

### **Step 2: Deploy to Vercel**
1. Go to [vercel.com](https://vercel.com)
2. Connect your GitHub repository
3. Import your project

### **Step 3: Add Environment Variables in Vercel**
In your Vercel project dashboard, go to **Settings** → **Environment Variables** and add:

| Variable Name | Value |
|---------------|-------|
| `REACT_APP_FIREBASE_API_KEY` | `AIzaSyBPDLT4xWx_kmRgEUJl7SNKxaWkc5qJkMc` |
| `REACT_APP_FIREBASE_AUTH_DOMAIN` | `job-apply-data-c01d2.firebaseapp.com` |
| `REACT_APP_FIREBASE_PROJECT_ID` | `job-apply-data-c01d2` |
| `REACT_APP_FIREBASE_STORAGE_BUCKET` | `job-apply-data-c01d2.firebasestorage.app` |
| `REACT_APP_FIREBASE_MESSAGING_SENDER_ID` | `335382081119` |
| `REACT_APP_FIREBASE_APP_ID` | `1:335382081119:web:18485be998393baaaef5ea` |
| `REACT_APP_FIREBASE_MEASUREMENT_ID` | `G-YHP1KQWCKX` |

### **Step 4: Deploy**
- Click **Deploy**
- Vercel will build and deploy your app
- Your app will be live at `https://your-project.vercel.app`

## 🛡️ Security Benefits

✅ **Firebase credentials are hidden** from your code  
✅ **Environment variables are encrypted** in Vercel  
✅ **No sensitive data** in your GitHub repository  
✅ **Easy to update** credentials without code changes  

## 🔍 Local Development

The `.env` file works locally. For production, Vercel uses the environment variables you set in their dashboard.

## 📝 Important Notes

- **Never commit** the `.env` file to GitHub
- **Always use** environment variables in production
- **Keep your Firebase credentials** secure
- **Update Vercel** if you change Firebase settings

## 🎯 Your App Features

- ✅ Job search outreach service
- ✅ Referral program (₹50 per referral)
- ✅ Google Drive resume links
- ✅ Firebase backend integration
- ✅ Modern responsive UI
- ✅ Secure deployment ready

**Your app is now ready for secure deployment to Vercel!** 🚀 