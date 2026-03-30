import styles from "./styles.module.css";
import classNames from "classnames";
import { type FieldError, type UseFormRegisterReturn } from "react-hook-form";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  registration: UseFormRegisterReturn;
  error?: FieldError;
}

export default function InputText(props: Props) {
  const { error, registration, className, ...inputProps } = props;

  return (
    <label className={styles.root}>
      <input className={classNames(styles.input, error && styles.error, className)} {...registration} {...inputProps} />
      {error && <span className={styles.errorText}>{error.message}</span>}
    </label>
  );
}
