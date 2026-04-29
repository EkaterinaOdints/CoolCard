import type { ReactNode } from "react";
import styles from "./styles.module.css";
import classNames from "classnames";

interface Props {
  tag: "h1" | "h2" | "h3" | "h4";
  size?: "big" | "small";
  children: ReactNode;
  className?: string;
}

export default function Title(props: Props) {
  const { tag, size, children, className } = props;

  const Tag = tag;

  return <Tag className={classNames(styles.root, size && styles[size], className)}>{children}</Tag>;
}
