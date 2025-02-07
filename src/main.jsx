import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Notify from "./components/alert.tsx";
import { AuthProvider } from "./context/FirebaseAuthProvider.tsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <Notify />
      <App />
    </AuthProvider>
  </StrictMode>
);
