import styles from "./styles.module.css";
import classNames from "classnames";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string | undefined;
}

export default function Container(props: Props) {
  const { children, className } = props;

  return <div className={classNames(styles.root, className)}>{children}</div>;
}
