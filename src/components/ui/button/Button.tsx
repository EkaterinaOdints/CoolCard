"use client";

import styles from "./styles.module.css";
import classNames from "classnames";
import { type MouseEvent } from "react";
import Link from "next/link";
import { useFeedbackModal } from "@/src/providers/FeedbackModalProvider";
import { useRouter } from "next/navigation";

import { type LinkProps, type ButtonProps } from "./types";

type Props = LinkProps | ButtonProps;

const Button = (props: Props) => {
  const { setModalOpen } = useFeedbackModal();
  const router = useRouter();

  const classes = classNames(
    styles.root,
    props.variant && styles[props.variant],
    props.color && styles[props.color],
    props.className,
  );

  if (props.tag === "a") {
    if (props.isDisabled) {
      return (
        <span className={classNames(classes, styles.disabled)} aria-disabled="true">
          {props.children}
        </span>
      );
    } else {
      return (
        <Link href={props.src} className={classes}>
          {props.children}
        </Link>
      );
    }
  }

  if (props.tag === "button") {
    const {
      children,
      type = "button",
      isModalOpener,
      isBackButton,
      ref,
      onClick,
      ...buttonProps
    } = props;

    const handleClick = (evt: MouseEvent<HTMLButtonElement>) => {
      onClick?.(evt);

      if (!evt.defaultPrevented && isModalOpener) {
        setModalOpen(true);
      }

      if (!evt.defaultPrevented && isBackButton) {
        if (window.history.length > 1) {
          router.back();
        } else {
          router.push("/");
        }
      }
    };

    return (
      <button {...buttonProps} className={classes} type={type} ref={ref} onClick={handleClick}>
        {children}
      </button>
    );
  }
};

export default Button;
