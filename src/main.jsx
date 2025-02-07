import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AuthProvider } from "./context/FirebaseAuthProvider.tsx";
import Notify from "./components/ui/alert.tsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <Notify />
      <App />
    </AuthProvider>
  </StrictMode>
);
