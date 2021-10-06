// Vendors
import { initializeApp } from 'firebase/app';
import { getAnalytics, logEvent } from 'firebase/analytics';
import { getPerformance } from 'firebase/performance';

// Firebase configs
const firebaseConfig = {
  apiKey: `${process.env.NEXT_PUBLIC_FIREBASE_API_KEY}`,
  authDomain: `${process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN}`,
  databaseURL: `${process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL}`,
  projectId: `${process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID}`,
  storageBucket: `${process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET}`,
  messagingSenderId: `${process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID}`,
  appId: `${process.env.NEXT_PUBLIC_FIREBASE_APP_ID}`,
  measurementId: `${process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID}`,
};

// Initialize Firebase
const InitializeFirebase = () => {
  if (typeof window !== 'undefined') {
    const app = initializeApp(firebaseConfig);
    getAnalytics(app);
    getPerformance(app);
  }
};

// Log events
export const logEventFirebase = (logEventName) =>
  logEvent(getAnalytics(initializeApp(firebaseConfig)), logEventName);

export default InitializeFirebase;
