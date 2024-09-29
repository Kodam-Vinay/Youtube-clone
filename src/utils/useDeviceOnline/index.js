import { useEffect } from "react";
import { useState } from "react";

const useDeviceOnline = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(navigator.onLine);
    };
    const handleOffline = () => {
      setIsOnline(navigator.onLine);
    };
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);
  }, []);
  return isOnline;
};

export default useDeviceOnline;
