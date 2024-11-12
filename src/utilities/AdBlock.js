// src/utilities/AdBlocker.js
import { useEffect, useState } from "react";

export const useAdBlockDetection = () => {
  const [isAdBlockerActive, setIsAdBlockerActive] = useState(false);

  useEffect(() => {
    const adTester = document.createElement("div");
    adTester.className = "ad-banner";  // Class often blocked by AdBlockers
    adTester.style.position = "absolute";
    adTester.style.height = "1px";
    adTester.style.width = "1px";
    adTester.style.top = "-1000px";  // Keep it off-screen
    document.body.appendChild(adTester);

    // Check if the element is blocked
    setTimeout(() => {
      if (adTester.offsetParent === null) {
        setIsAdBlockerActive(true);
      }
      document.body.removeChild(adTester);
    }, 100);

  }, []);

  return isAdBlockerActive;
};
