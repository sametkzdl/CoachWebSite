import { createContext, useContext, useState } from "react";

const BlurContext = createContext();

export const BlurProvider = ({ children }) => {
  const [bluropen, setBlurOpen] = useState(false);
  const values = {
    bluropen,
    setBlurOpen,
  };
  return (
    <BlurContext.Provider value={values}>{children}</BlurContext.Provider>
  );
};

export const useBlurContext = () => useContext(BlurContext);
