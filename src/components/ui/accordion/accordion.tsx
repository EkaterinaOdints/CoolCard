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
}

export default function Accordion(props: Props) {
  const { title, content, className, type } = props;

  const [isActive, setActive] = useState(false);
  const [contentHeight, setContentHeight] = useState("0px");

  const contentRef = useRef<HTMLDivElement | null>(null);

  const onClick = () => {
    const el = contentRef.current;

    if (!el) return;

    if (isActive) {
      setContentHeight(`${0}px`);
    } else {
      setContentHeight(`${el.scrollHeight}px`);
    }

    setActive((prev) => !prev);
  };

  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;

    if (isActive) {
      setContentHeight(`${el.scrollHeight}px`);
    } else {
      setContentHeight("0px");
    }
  }, [isActive, content]);

  return (
    <div
      className={classNames(
        styles.root,
        className,
        isActive && styles.isActive,
        type && styles[type],
      )}
    >
      <button className={styles.button} type="button" onClick={onClick}>
        <span className={styles.buttonText}>{title}</span>
        <span className={styles.buttonIcon}></span>
      </button>
      <div className={styles.content} ref={contentRef} style={{ maxHeight: contentHeight }}>
        {content}
      </div>
    </div>
  );
}
