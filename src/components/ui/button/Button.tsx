import styles from "./styles.module.css";
import classNames from "classnames";
import { type ReactNode, type MouseEventHandler, type MouseEvent } from "react";
import Link from "next/link";
import { useFeedbackModal } from "@/src/providers/FeedbackModalProvider";

type CommonProps = {
  children: ReactNode;
  className?: string;
  size?: "small" | "big";
  color?: "accent" | "light" | "gradient";
  isDisabled?: boolean;
};

type LinkProps = CommonProps & {
  tag: "a";
  src: string;
  type?: never;
  isModalOpener?: never;
  onButtonClick?: never;
};

type ButtonProps = CommonProps & {
  tag: "button";
  type?: "button" | "submit";
  src?: never;
  isModalOpener?: boolean;
  onButtonClick?: MouseEventHandler<HTMLButtonElement>;
};

type Props = LinkProps | ButtonProps;

const Button = (props: Props) => {
  const { children, tag, className, size, color, type = "button", isDisabled, src, isModalOpener, onButtonClick } = props;
  const { setModalOpen } = useFeedbackModal();

  const classes = classNames(styles.root, size && styles[size], color && styles[color], isDisabled && styles.disabled, className);

  const onClick = (evt: MouseEvent<HTMLButtonElement>) => {
    if (onButtonClick) {
      onButtonClick(evt);
    }

    if (isModalOpener) {
      setModalOpen(true);
    }
  };

  switch (tag) {
    case "a":
      return (
        <Link href={src} className={classes}>
          {children}
        </Link>
      );
    case "button":
      return (
        <button disabled={isDisabled} className={classes} type={type} onClick={onClick}>
          {children}
        </button>
      );
    default:
      break;
  }
};

export default Button;
