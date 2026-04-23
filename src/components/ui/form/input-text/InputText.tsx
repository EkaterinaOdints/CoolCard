import styles from "./styles.module.css";
import classNames from "classnames";
import { type FieldError } from "react-hook-form";
import { type InputHTMLAttributes } from "react";

interface Props {
  className?: string;
  type: string;
  error?: FieldError;
  value: string;
  onChange: (value: string) => void;
  name?: string;
  onBlur?: () => void;
  inputRef?: React.Ref<HTMLInputElement>;
  inputProps?: Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "className" | "name" | "type" | "value" | "onChange" | "onBlur" | "ref"
  >;
}

export default function InputText(props: Props) {
  const { error, className, type, value, onChange, name, onBlur, inputRef, inputProps } = props;

  return (
    <label className={classNames(styles.root, className)}>
      <input
        {...inputProps}
        className={classNames(styles.input, error && styles.error, className)}
        type={type}
        name={name}
        value={value}
        ref={inputRef}
        onBlur={onBlur}
        onChange={(evt) => {
          onChange(evt.target.value);
        }}
      />
      {error && <span className={styles.errorText}>{error.message}</span>}
    </label>
  );
}
