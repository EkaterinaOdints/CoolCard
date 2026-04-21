import styles from "./styles.module.css";
import classNames from "classnames";

interface Props {
  ariaLabel?: string;
  onClick?: () => void;
  text?: string;
  className?: string;
}

export default function CloseButton(props: Props) {
  const { ariaLabel, onClick, text, className } = props;

  return (
    <button className={classNames(styles.root, className)} type="button" aria-label={ariaLabel} onClick={onClick}>
      {text}
    </button>
  );
}
