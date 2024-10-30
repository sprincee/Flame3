"use client";

import { FC, ReactNode, useMemo } from "react";
import {
  AnalyticsProvider,
  AuthProvider,
  FirebaseAppProvider,
  FirestoreProvider,
  useFirebaseApp,
} from "reactfire";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { isBrowser } from "@/lib/utils";
import { getAnalytics } from "firebase/analytics";
import { FirebaseOptions } from "firebase/app";
import App from "next/app";

const config: FirebaseOptions = {
  apiKey: "AIzaSyBqaL1bJoHxJ6YimBo38SuvWG35_d8tplc",
  authDomain: "flame3-ba171.firebaseapp.com",
  projectId: "flame3-ba171",
  storageBucket: "flame3-ba171.appspot.com",
  messagingSenderId: "410583285704",
  appId: "1:410583285704:web:e53e3c8bbdf71a9f3c0afd",
  measurementId: "G-PET1D3LKL5",
};

const FirebaseProviderSDKs: FC<{ children: ReactNode }> = ({ children }) => {
  const app = useFirebaseApp();
  // we have to use getters to pass to providers, children should use hooks
  const auth = useMemo(() => getAuth(app), [app]);
  const firestore = useMemo(() => getFirestore(app), [app]);
  const analytics = useMemo(() => isBrowser() && getAnalytics(app), [app]);

  if (!auth) {
    console.error('Auth failed to initialize');
    return null;
  }



  return (
        <AuthProvider sdk={auth}>
          <FirestoreProvider sdk={firestore}>
            {analytics ? (
              <AnalyticsProvider sdk={analytics}>{children}</AnalyticsProvider>
            ) : (
              children
            )}
          </FirestoreProvider>
        </AuthProvider>
  );
};

export const MyFirebaseProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  return (
    <>
      <FirebaseAppProvider firebaseConfig={config}>
        <FirebaseProviderSDKs>{children}</FirebaseProviderSDKs>
      </FirebaseAppProvider>
    </>
  );
};
