import styles from "./styles.module.css";
import classNames from "classnames";
import { type InputHTMLAttributes } from "react";
import { type FieldError } from "react-hook-form";

interface Props {
  text: string;
  className?: string;
  error?: FieldError;
  checked?: boolean;
  onChange: (checked: boolean) => void;
  name?: string;
  onBlur?: () => void;
  inputRef?: React.Ref<HTMLInputElement>;
  inputProps?: Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "checked" | "className" | "name" | "type" | "value" | "onChange" | "onBlur" | "ref"
  >;
}

export default function InputCheckbox(props: Props) {
  const { text, error, className, checked, onChange, name, onBlur, inputRef, inputProps } = props;

  return (
    <div className={styles.root}>
      <label className={styles.label}>
        <input
          {...inputProps}
          type="checkbox"
          className={classNames(styles.input, className, error && styles.error)}
          name={name}
          checked={checked}
          ref={inputRef}
          onBlur={onBlur}
          onChange={(evt) => {
            onChange(evt.target.checked);
          }}
        ></input>
        <span className={styles.mark}></span>
        <span className={styles.text}>{text}</span>
      </label>
      {error && <span className={styles.errorText}>{error.message}</span>}
    </div>
  );
}
