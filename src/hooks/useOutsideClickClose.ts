"use client";

import { useEffect } from "react";
import { type RefObject } from "react";

interface Props {
  enabled?: boolean;
  isOpen?: boolean;
  elRef?: RefObject<HTMLElement | null>;
  onClose: () => void;
}

export function useOutsideClickClose(props: Props) {
  const { enabled = true, elRef, isOpen, onClose } = props;

  useEffect(() => {
    if (!enabled) return;
    if (!isOpen) return;
    if (!elRef) return;

    function onOutsideClick(evt: MouseEvent) {
      if (!elRef?.current?.contains(evt.target as Node)) {
        onClose();
      }
    }

    document.addEventListener("mousedown", onOutsideClick);

    return () => {
      document.removeEventListener("mousedown", onOutsideClick);
    };
  }, [enabled, elRef, isOpen, onClose]);
}
