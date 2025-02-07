import React, { createContext, useContext, useEffect, useState } from "react";
import {
  auth,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "../Firebase/Firebase";
import { createUserWithEmailAndPassword, User } from "firebase/auth";

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  message: {
    variant: "error" | "success";
    message: string;
  } | null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const [message, setMessage] = useState<{
    variant: "error" | "success";
    message: string;
  } | null>(null);

  useEffect(() => {
    let messageTimer: NodeJS.Timeout;
    if (message != null) {
      messageTimer = setTimeout(() => setMessage(null), 4000);
    }
    return () => {
      if (messageTimer) clearTimeout(messageTimer);
    };
  }, [message]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe(); // Cleanup on unmount
  }, []);

  const handleFirebaseAuthError = (error: any) => {
    switch (error.code) {
      case "auth/email-already-in-use":
        return "Email is already in use. Try logging in.";
      case "auth/weak-password":
        return "Password is too weak. Use a stronger password.";
      case "auth/invalid-email":
        return "Invalid email format.";
      case "auth/invalid-credential":
        return "Invalid credential.";
      default:
        return "Something went wrong. Please try again.";
    }
  };

  const login = async (email: string, password: string) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setMessage({ variant: "success", message: "Login successful" });
    } catch (error) {
      setMessage({ variant: "error", message: handleFirebaseAuthError(error) });
    }
  };

  const signup = async (email: string, password: string) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setMessage({ variant: "success", message: "Signup successful" });
    } catch (error) {
      setMessage({ variant: "error", message: handleFirebaseAuthError(error) });
    }
  };

  const logout = async () => {
    await signOut(auth);
  };

  return (
    <AuthContext.Provider
      value={{ user, loading, login, signup, logout, message }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
