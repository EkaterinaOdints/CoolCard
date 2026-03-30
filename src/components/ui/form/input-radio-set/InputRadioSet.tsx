import styles from "./styles.module.css";
import { type RadioItem } from "./types";
import { type FieldError, type UseFormRegisterReturn } from "react-hook-form";

interface Props {
  registration: UseFormRegisterReturn;
  array: RadioItem[];
  error?: FieldError;
  disabled?: boolean;
}

export default function InputRadioSet(props: Props) {
  const { array, error, disabled, registration } = props;

  const radioList = array.map(({ id, title }) => {
    return (
      <label className={styles.label} key={id}>
        <input className={styles.input} type="radio" value={id} disabled={disabled} {...registration} />
        <span className={styles.mark}></span>
        <span className={styles.text}>{title}</span>
      </label>
    );
  });

  return (
    <>
      <div className={styles.root}>{radioList}</div>
      {error && <span className={styles.errorText}>{error.message}</span>}
    </>
  );
}
