"use client";

import { useEffect } from "react";
import { createContext, useContext, useState } from "react";

interface Props {
  children: React.ReactNode;
}

interface ContextData {
  isModalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const FeedbackModalContext = createContext<ContextData>({
  isModalOpen: false,
  setModalOpen: () => {},
});

export function FeedbackModalProvider(props: Props) {
  const { children } = props;
  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (isModalOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";

      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isModalOpen]);

  return <FeedbackModalContext value={{ isModalOpen, setModalOpen }}>{children}</FeedbackModalContext>;
}

export function useFeedbackModal() {
  return useContext(FeedbackModalContext);
}
