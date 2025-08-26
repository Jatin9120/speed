# Job Application Outreach Service

A React application that helps job seekers by sending personalized emails to recruiters. Built with React, Firebase, Framer Motion, and Tailwind CSS.

## Features

- ✨ Modern, animated UI with Framer Motion
- 📱 Responsive design with Tailwind CSS
- 🔥 Firebase integration for data storage and file uploads
- 📄 PDF resume upload functionality
- 📊 Real-time form validation
- 🎯 Order tracking system

## Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager
- Firebase project setup

## Installation

1. **Clone or download this project**
   ```bash
   cd job-apply-outreach
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up Firebase**
   - Go to [Firebase Console](https://console.firebase.google.com/)
   - Create a new project or use existing one
   - Enable Firestore Database
   - Enable Storage
   - Get your project configuration

4. **Configure Firebase**
   - Open `src/App.js`
   - Replace the `firebaseConfig` object with your actual Firebase project configuration:
   ```javascript
   const firebaseConfig = {
     apiKey: "your-actual-api-key",
     authDomain: "your-project.firebaseapp.com",
     projectId: "your-project-id",
     storageBucket: "your-project.appspot.com",
     messagingSenderId: "your-messaging-sender-id",
     appId: "your-app-id"
   };
   ```

5. **Set up Firestore Security Rules**
   - In Firebase Console, go to Firestore Database > Rules
   - Update rules to allow read/write access (for development):
   ```javascript
   rules_version = '2';
   service cloud.firestore {
     match /databases/{database}/documents {
       match /{document=**} {
         allow read, write: if true;
       }
     }
   }
   ```

6. **Set up Storage Security Rules**
   - In Firebase Console, go to Storage > Rules
   - Update rules to allow file uploads (for development):
   ```javascript
   rules_version = '2';
   service firebase.storage {
     match /b/{bucket}/o {
       match /{allPaths=**} {
         allow read, write: if true;
       }
     }
   }
   ```

## Running the Application

1. **Start the development server**
   ```bash
   npm start
   ```

2. **Open your browser**
   - Navigate to `http://localhost:3000`
   - The application should now be running!

## Building for Production

1. **Create a production build**
   ```bash
   npm run build
   ```

2. **Deploy the build folder**
   - The `build` folder contains your production-ready application
   - Deploy to your preferred hosting service (Netlify, Vercel, Firebase Hosting, etc.)

## Project Structure

```
src/
├── App.js          # Main application component
├── index.js        # Application entry point
└── index.css       # Global styles and Tailwind imports

public/
└── index.html      # HTML template

Configuration files:
├── package.json    # Dependencies and scripts
├── tailwind.config.js  # Tailwind CSS configuration
└── postcss.config.js   # PostCSS configuration
```

## Dependencies

- **React 18** - UI library
- **Framer Motion** - Animation library
- **React Intersection Observer** - Scroll animations
- **Firebase** - Backend services (Firestore, Storage)
- **Tailwind CSS** - Utility-first CSS framework

## Customization

### Styling
- Modify `tailwind.config.js` to customize colors, fonts, and spacing
- Update `src/index.css` for global styles
- Component-specific styles are in the JSX using Tailwind classes

### Firebase
- Update security rules for production use
- Configure authentication if needed
- Set up proper indexes for Firestore queries

### Content
- Modify text content in the components
- Update pricing and offer details
- Customize form fields as needed

## Troubleshooting

### Common Issues

1. **Firebase configuration errors**
   - Ensure all Firebase config values are correct
   - Check that Firestore and Storage are enabled
   - Verify security rules allow read/write access

2. **Build errors**
   - Clear `node_modules` and reinstall: `rm -rf node_modules && npm install`
   - Check Node.js version compatibility

3. **Styling issues**
   - Ensure Tailwind CSS is properly configured
   - Check that PostCSS is working correctly

### Getting Help

- Check the browser console for error messages
- Verify Firebase project configuration
- Ensure all dependencies are installed correctly

## Security Notes

⚠️ **Important**: The current Firebase security rules allow unrestricted access for development purposes. Before deploying to production:

1. Implement proper authentication
2. Set up restrictive security rules
3. Enable Firebase App Check
4. Configure proper CORS policies

## License

This project is for educational and commercial use. Please ensure compliance with Firebase terms of service and applicable laws.

## Support

For technical support or questions about the application, please refer to the Firebase documentation or React documentation. 