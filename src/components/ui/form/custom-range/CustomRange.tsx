import styles from "./styles.module.css";
import classNames from "classnames";

import { type InputHTMLAttributes } from "react";

interface Props {
  className?: string;
  title?: string;
  value: number;
  onChange: (value: number) => void;
  name?: string;
  onBlur?: () => void;
  inputRef?: React.Ref<HTMLInputElement>;
  inputProps?: Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "className" | "name" | "type" | "value" | "onChange" | "onBlur" | "ref"
  >;
}

export default function CustomRange(props: Props) {
  const { className, title, value, onChange, name, onBlur, inputRef, inputProps } = props;

  const min = Number(inputProps?.min ?? 0);
  const max = Number(inputProps?.max ?? 100);
  const range = max - min;
  const progress = range > 0 ? ((value - min) / range) * 100 : 0;

  let transform = "translate(-50%, -50%)";

  if (value === min) transform = "translate(0, -50%)";
  if (value === max) transform = "translate(-100%, -50%)";

  return (
    <label className={classNames(styles.root, className)}>
      {title && <span className={styles.title}>{title}</span>}
      <div className={styles.inputWrapper}>
        <span className={styles.inputTrack}></span>
        <span className={styles.inputProgress} style={{ width: `${progress}%` }}></span>
        <span
          className={styles.inputControl}
          style={{
            left: `${progress}%`,
            transform: `${transform}`,
          }}
        ></span>
        <input
          {...inputProps}
          className={styles.input}
          type="range"
          name={name}
          value={value}
          ref={inputRef}
          onBlur={onBlur}
          onChange={(evt) => {
            onChange(Number(evt.target.value));
          }}
        ></input>
      </div>
    </label>
  );
}
