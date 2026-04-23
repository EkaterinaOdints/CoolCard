import styles from "./styles.module.css";
import classNames from "classnames";
import { type MouseEventHandler } from "react";

interface Props {
  className?: string;
  onButtonClick: MouseEventHandler<HTMLButtonElement>;
  isMenuOpenned: boolean;
  ariaLabel?: string;
  ariaExpanded?: boolean;
}

export default function MenuButton(props: Props) {
  const { className, onButtonClick, isMenuOpenned, ariaLabel, ariaExpanded } = props;

  return (
    <button
      type="button"
      className={classNames(styles.root, className, { [styles.isMenuOpenned]: isMenuOpenned })}
      aria-label={ariaLabel}
      aria-expanded={ariaExpanded}
      onClick={onButtonClick}
    >
      <span className={styles.icon} aria-hidden="true"></span>
    </button>
  );
}
