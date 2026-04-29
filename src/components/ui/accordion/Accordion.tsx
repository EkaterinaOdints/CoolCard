"use client";

import styles from "./styles.module.css";
import classNames from "classnames";
import type { ReactNode } from "react";
import { useState, useRef, useEffect } from "react";

interface Props {
  title: string;
  content: ReactNode;
  className?: string;
  type?: "text" | "form";
  isActive?: boolean;
  onToggle?: () => void;
}

export default function Accordion(props: Props) {
  const { title, content, className, type, isActive, onToggle } = props;

  const [innerIsActive, setInnerIsActive] = useState(false);
  const [contentHeight, setContentHeight] = useState(0);
  const [isOverflowVisible, setOverflowVisible] = useState(false);

  const innerContentRef = useRef<HTMLDivElement | null>(null);

  const isControlled = isActive !== undefined;
  const currentIsActive = isControlled ? isActive : innerIsActive;
  const height = currentIsActive ? `${contentHeight}px` : "0px";
  const shouldShowOverflow = currentIsActive && isOverflowVisible;

  const onClick = () => {
    setOverflowVisible(false);

    if (isControlled) {
      onToggle?.();
    } else {
      setInnerIsActive((prev) => !prev);
    }
  };

  useEffect(() => {
    const innerEl = innerContentRef.current;

    if (!innerEl || !currentIsActive) return;

    setContentHeight(innerEl.scrollHeight);

    const observer = new ResizeObserver(() => setContentHeight(innerEl.scrollHeight));
    observer.observe(innerEl);

    return () => observer.disconnect();
  }, [currentIsActive]);

  return (
    <div
      className={classNames(
        styles.root,
        className,
        currentIsActive && styles.isActive,
        type && styles[type],
      )}
    >
      <button className={styles.button} type="button" onClick={onClick}>
        <span className={styles.buttonText}>{title}</span>
        <span className={styles.buttonIcon}></span>
      </button>
      <div
        className={classNames(
          styles.contentWrapper,
          shouldShowOverflow && styles.isOverflowVisible,
        )}
        style={{ maxHeight: height }}
        onTransitionStart={(evt) => {
          if (evt.target !== evt.currentTarget) return;
          if (evt.propertyName === "max-height") setOverflowVisible(false);
        }}
        onTransitionEnd={(evt) => {
          if (evt.target !== evt.currentTarget) return;
          if (evt.propertyName === "max-height") setOverflowVisible(currentIsActive);
        }}
      >
        <div className={styles.content} ref={innerContentRef}>
          {content}
        </div>
      </div>
    </div>
  );
}
