import styles from "./styles.module.css";
import { type RadioItem } from "./types";
import { type FieldError, type UseFormRegisterReturn } from "react-hook-form";

interface Props<T extends string> {
  registration: UseFormRegisterReturn;
  items: readonly RadioItem<T>[];
  error?: FieldError;
  disabled?: boolean;
}

export default function InputRadioSet<T extends string>(props: Props<T>) {
  const { items, error, disabled, registration } = props;

  const radioList = items.map(({ id, title }) => {
    return (
      <label className={styles.label} key={id}>
        <input
          className={styles.input}
          type="radio"
          value={id}
          {...registration}
          disabled={disabled}
        />
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
