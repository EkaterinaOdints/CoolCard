"use client";

import { useEffect } from "react";

interface Props {
  enabled?: boolean;
  isOpen?: boolean;
  onClose: () => void;
}

export function useBodyClickClose(props: Props) {
  const { enabled = true, isOpen, onClose } = props;

  useEffect(() => {
    if (!enabled) return;
    if (!isOpen) return;

    function onBodyClick(evt: MouseEvent) {
      if (evt.target === document.body && enabled) {
        onClose();
      }
    }

    document.addEventListener("click", onBodyClick);

    return () => {
      document.removeEventListener("click", onBodyClick);
    };
  }, [enabled, isOpen, onClose]);
}
