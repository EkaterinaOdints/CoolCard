"use client";

import { useEffect } from "react";

interface Props {
  enabled?: boolean;
  isOpen?: boolean;
  onClose: () => void;
}

export function useEscAndBodyClickClose(props: Props) {
  const { enabled = true, isOpen, onClose } = props;

  useEffect(() => {
    if (!enabled) return;
    if (!isOpen) return;

    function onEscapeClick(evt: KeyboardEvent) {
      if (evt.key === "Escape" && enabled) {
        onClose();
      }
    }

    function onBodyClick(evt: MouseEvent) {
      if (evt.target === document.body && enabled) {
        onClose();
      }
    }

    document.addEventListener("click", onBodyClick);
    document.addEventListener("keydown", onEscapeClick);

    return () => {
      document.removeEventListener("keydown", onEscapeClick);
      document.removeEventListener("click", onBodyClick);
    };
  }, [enabled, isOpen, onClose]);
}
