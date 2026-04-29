import styles from "./styles.module.css";
import classNames from "classnames";

interface Props {
  className?: string;
  legend?: string;
  children: React.ReactNode;
}

export default function Fieldset(props: Props) {
  const { className, legend, children } = props;

  return (
    <fieldset className={classNames(className, styles.root)}>
      <legend className={styles.legend}>{legend}</legend>
      {children}
    </fieldset>
  );
}
