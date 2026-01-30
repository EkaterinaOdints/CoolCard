import styles from "./styles.module.css";
import classNames from "classnames";
import { type ReactNode, type MouseEventHandler } from "react";
import Link from "next/link";

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
  onButtonClick?: never;
};

type ButtonProps = CommonProps & {
  tag: "button";
  src?: never;
  onButtonClick?: MouseEventHandler<HTMLButtonElement>;
};

type Props = LinkProps | ButtonProps;

const Button = (props: Props) => {
  const { children, tag, className, size, color, isDisabled, src, onButtonClick } = props;

  const classes = classNames(styles.root, size && styles[size], color && styles[color], isDisabled && styles.disabled, className);

  switch (tag) {
    case "a":
      return (
        <Link href={src} className={classes}>
          {children}
        </Link>
      );
    case "button":
      return (
        <button disabled={isDisabled} className={classes} type="button" onClick={onButtonClick}>
          {children}
        </button>
      );
    default:
      break;
  }
};

export default Button;
