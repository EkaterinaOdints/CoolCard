"use client";

import { createContext, useContext } from "react";
import { useWindowWidth } from "../hooks/useWindowWidth";

const WindowWidthContext = createContext<number | null>(null);

interface Props {
  children: React.ReactNode;
}

export function WindowWidthProvider(props: Props) {
  const { children } = props;

  const width = useWindowWidth();

  return <WindowWidthContext.Provider value={width}>{children}</WindowWidthContext.Provider>;
}

export function useWindowWidthValue() {
  return useContext(WindowWidthContext);
}
