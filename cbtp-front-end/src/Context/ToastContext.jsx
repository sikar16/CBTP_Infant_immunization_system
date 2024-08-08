import { useState, useEffect, createContext, useContext } from "react";
// create ToastContext
const ToastContext = createContext();

// prepare ToastProvider
export const ToastProvider = ({ children }) => {
  const [toastData, setToastData] = useState({
    message: null,
    success: null,
  });

  const showToast = (message, success) => {
    setToastData({ message, success });
  };

  const hideToast = () => {
    setToastData({ message: null, success: null });
  };
  const value = {
    toastData,
    setToastData,
    showToast,
    hideToast,
  };
  return (
    <ToastContext.Provider value={value}>{children}</ToastContext.Provider>
  );
};

// use ToastContext
export const useToast = () => {
  return useContext(ToastContext);
};
