"use client";

import styles from "./styles.module.css";
import classNames from "classnames";
import type { ReactNode } from "react";
import { useState, useRef } from "react";

interface Props {
  title: string;
  content: ReactNode;
}

export default function Accordion(props: Props) {
  const { title, content } = props;

  const [isActive, setActive] = useState(false);
  const [contentHeight, setContentHeight] = useState("0px");

  const contentRef = useRef<HTMLDivElement | null>(null);

  const onClick = () => {
    setActive((prev) => {
      const actualValue = !prev;
      const el = contentRef.current;

      if (el) {
        const scrollHeight = el.scrollHeight;
        setContentHeight(`${actualValue ? scrollHeight : 0}px`);
      }

      return actualValue;
    });
  };

  return (
    <div className={classNames(styles.root, isActive && styles.isActive)}>
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
