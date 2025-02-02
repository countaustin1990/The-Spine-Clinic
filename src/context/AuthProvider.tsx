import React, { useContext, createContext, useState, useEffect } from "react";
import axios, { AxiosResponse } from "axios";

export type AuthContextType = {
  user: {
    email: string;
    name: string;
    role: "ADMIN" | "USER";
    access_token: string;
    id: number;
  } | null;
  login: (formData: any) => void;
  signup: (formData: any) => void;
  logout: () => void;
  loading: boolean;
  message: {
    variant: "error" | "success";
    message: string;
  } | null;
};

export const AuthContext = createContext<AuthContextType | null>(null);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const loggedInUser = localStorage.getItem("site");
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<{
    email: string;
    name: string;
    role: "ADMIN" | "USER";
    access_token: string;
    id: number;
  } | null>(loggedInUser ? JSON.parse(loggedInUser ?? "") : null);

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

  const login = async (formData: any) => {
    setLoading(true);
    const url = import.meta.env.VITE_APP_BASE_URL + "/auth/login";
    try {
      const res = await axios.post(url, {
        ...formData,
      });
      setUser(res.data);
      localStorage.setItem("site", JSON.stringify(res.data));
      setMessage({ variant: "success", message: "login successfully" });
    } catch (e: any) {
      if (e.response.data) {
        setMessage({
          variant: "error",
          message: e.response.data.error,
        });
      } else {
        setMessage({
          variant: "error",
          message: "Something went wrong!",
        });
      }
    }
    setLoading(false);
  };

  const signup = async (formData: any) => {
    setLoading(true);
    const url = import.meta.env.VITE_APP_BASE_URL + "/auth/register";
    try {
      const res = await axios.post(url, {
        ...formData,
      });
      setUser(res.data);
      localStorage.setItem("site", JSON.stringify(res.data));
      setMessage({ variant: "success", message: "signup successfully" });
    } catch (e: any) {
      if (e.response.data) {
        setMessage({
          variant: "error",
          message: e.response.data.error,
        });
      } else {
        setMessage({
          variant: "error",
          message: "Something went wrong!",
        });
      }
    }
    setLoading(false);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("site");
  };

  return (
    <AuthContext.Provider
      value={{ user, login, logout, signup, message, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => useContext(AuthContext) as AuthContextType;
