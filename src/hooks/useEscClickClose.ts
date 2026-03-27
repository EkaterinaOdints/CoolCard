"use client";

import { useEffect } from "react";

interface Props {
  enabled?: boolean;
  isOpen?: boolean;
  onClose: () => void;
}

export function useEscClickClose(props: Props) {
  const { enabled = true, isOpen, onClose } = props;

  useEffect(() => {
    if (!enabled) return;
    if (!isOpen) return;

    function onEscapeClick(evt: KeyboardEvent) {
      if (evt.key === "Escape" && enabled) {
        onClose();
      }
    }

    document.addEventListener("keydown", onEscapeClick);

    return () => {
      document.removeEventListener("keydown", onEscapeClick);
    };
  }, [enabled, isOpen, onClose]);
}
