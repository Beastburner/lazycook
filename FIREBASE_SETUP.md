# Firebase Setup Guide

## Step 1: Create Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Add project"
3. Name it "LazyCook"
4. Follow the setup wizard

## Step 2: Enable Google Authentication

1. In Firebase Console, go to **Authentication**
2. Click "Get started"
3. Click on "Google" provider
4. Toggle **Enable**
5. Add your support email
6. Click **Save**

## Step 3: Register Web App

1. In Project Overview, click the **Web icon** (</>)
2. Register app with nickname "LazyCook Web"
3. Copy the Firebase configuration object
4. Create `.env.local` file in the project root
5. Add your Firebase credentials:

```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=lazycook.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=lazycook
VITE_FIREBASE_STORAGE_BUCKET=lazycook.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

## Step 4: Configure Authorized Domains

1. In Firebase Console → Authentication → Settings
2. Click on "Authorized domains"
3. Add:
   - `localhost` (already added)
   - `lazycook.vercel.app`

## Step 5: Update OAuth Consent Screen

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Select the Firebase project
3. Go to APIs & Services → OAuth consent screen
4. Update:
   - App name: **LazyCook**
   - Upload your logo
   - Click **Publish App**

## Step 6: Deploy to Vercel

1. Add environment variables in Vercel:
   - Go to Project Settings → Environment Variables
   - Add all `VITE_FIREBASE_*` variables
2. Redeploy

## Benefits of Firebase vs Supabase

✅ Direct Google OAuth (shows "LazyCook" not domain)  
✅ No third-party authentication provider  
✅ Better branding in consent screen  
✅ Simpler setup  
✅ Free tier is generous  

## Troubleshooting

- If you get "auth/configuration-not-found", check your `.env.local` file
- Clear browser cache after changing OAuth settings
- Make sure to publish the OAuth consent screen for production
