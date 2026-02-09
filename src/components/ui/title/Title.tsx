import type { ReactNode } from "react";
import styles from "./styles.module.css";
import classNames from "classnames";

interface Props {
  tag: "h1" | "h2" | "h3" | "h4";
  style?: "big" | "small";
  children: ReactNode;
  className?: string;
}

export default function Title(props: Props) {
  const { tag, style, children, className } = props;

  const Tag = tag;

  return <Tag className={classNames(styles.root, className, style && styles[style])}>{children}</Tag>;
}
