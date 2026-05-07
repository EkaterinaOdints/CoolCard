import { type ReactNode } from "react";

type CommonProps = {
  children?: ReactNode;
  className?: string;
  variant?: "small" | "big" | "nav";
  color?: "accent" | "light" | "gradient";
};

type LinkProps = CommonProps & {
  tag: "a";
  src: string;
  type?: never;
  isDisabled?: boolean;
  isModalOpener?: never;
  isBackButton?: never;
};

type ButtonProps = CommonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    tag: "button";
    type?: "button" | "submit";
    src?: never;
    isModalOpener?: boolean;
    isBackButton?: boolean;
    ref?: React.Ref<HTMLButtonElement>;
  };

export { type LinkProps, type ButtonProps };
