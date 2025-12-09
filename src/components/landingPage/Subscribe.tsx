"use client";

import React, { useState, useEffect } from "react";
import { signInWithPopup, onAuthStateChanged } from "firebase/auth";
import { auth, googleProvider } from "@/lib/firebaseConfig";
import toast from "react-hot-toast";

const Subscribe = () => {
  const [subscribed, setSubscribed] = useState(false);
  const [userInfo, setUserInfo] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSigningIn, setIsSigningIn] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserInfo({
          uid: user.uid,
          displayName: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
        });
        setSubscribed(true);
      } else {
        setUserInfo(null);
        setSubscribed(false);
      }
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleGoogleLogin = async () => {
    setIsSigningIn(true);
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      toast.success(`Welcome, ${user.displayName || "User"}! 🎉 We'll connect you soon.`, {
        duration: 4000,
      });
    } catch (error) {
      console.error("Google login error:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSigningIn(false);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="w-6 h-6 border-2 border-gray-500 border-t-white rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="min-h-[50vh]  bg-black flex items-center justify-center p-6">
      <div className="w-full max-w-sm text-center">
        {subscribed ? (
  <div className="space-y-6">
    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
      <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
    </div>

    <div className="space-y-2">
      <h1 className="text-2xl font-normal text-white">You're all set!</h1>
      <p className="text-white/60">We'll connect you soon.</p>
    </div>

    {userInfo && (
      <div className="bg-white/5 border border-white/10 rounded-lg p-4 flex items-center gap-3">
        {/* ✅ User Profile Picture */}
      
  
  <div className="w-14 h-14 bg-gray-700 rounded-full flex items-center justify-center text-white font-medium">
    {userInfo.displayName?.charAt(0) || userInfo.email?.charAt(0) || "U"}
  </div>


        {/* ✅ User Info */}
        <div className="text-left">
          <p className="font-medium text-white text-lg">{userInfo.displayName || "User"}</p>
          <p className="text-sm text-white/60">{userInfo.email}</p>
        </div>
      </div>
    )}
  </div>
) : (
          <div className="space-y-8">
            <div className="space-y-3">
              <h1 className="text-3xl font-normal text-white">Subscribe</h1>
              <p className="text-white/60 text-lg">connect us by one click</p>
            </div>

            <button
              onClick={handleGoogleLogin}
              disabled={isSigningIn}
              className="w-full h-12 bg-blue-600 text-white rounded-lg font-medium flex items-center justify-center gap-3 hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSigningIn ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  <span>Connecting...</span>
                </>
              ) : (
                <>Subscribe Us</>
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Subscribe;
