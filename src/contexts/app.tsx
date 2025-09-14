"use client";

import { useTheme } from "next-themes";
import { ReactNode, createContext, useContext, useEffect } from "react";

export interface ContextValue {}

const AppContext = createContext({} as ContextValue);

export const useAppContext = () => useContext(AppContext);

export const AppContextProvider = ({ children }: { children: ReactNode }) => {
  const { theme, setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    // 只在客户端且主题未设置时设置默认主题
    if (typeof window !== "undefined" && !theme) {
      setTheme("dark");
    }
  }, [theme, setTheme]);

  return <AppContext.Provider value={{}}>{children}</AppContext.Provider>;
};
