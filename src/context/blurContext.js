import { createContext, useContext, useState } from "react";

const BlurContext = createContext();

export const BlurProvider = ({ children }) => {
  const [blurOpen, setBlurOpen] = useState(false);
  const values = {
    blurOpen,
    setBlurOpen,
  };
  return (
    <BlurContext.Provider value={values}>{children}</BlurContext.Provider>
  );
};

export const useBlurContext = () => useContext(BlurContext);
