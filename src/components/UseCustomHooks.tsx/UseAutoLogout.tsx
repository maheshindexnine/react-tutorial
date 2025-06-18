import React, { useEffect, useRef } from "react";

const useAutoLogout = (logout: () => void, timeout: number) => {
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const resetTimer = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      logout();
    }, timeout);
  };

  useEffect(() => {
    const handleNavigation = () => {
      resetTimer();
    };

    window.addEventListener("mousemove", handleNavigation);
    window.addEventListener("keydown", handleNavigation);

    return () => {
      window.removeEventListener("mousemove", handleNavigation);
      window.removeEventListener("keydown", handleNavigation);
    };
  }, []);
};

export default useAutoLogout;
