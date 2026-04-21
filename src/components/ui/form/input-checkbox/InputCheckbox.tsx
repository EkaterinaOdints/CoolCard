import styles from "./styles.module.css";
import { type InputHTMLAttributes } from "react";
import { type UseFormRegisterReturn } from "react-hook-form";

interface Props {
  text: string;
  inputProps?: InputHTMLAttributes<HTMLInputElement>;
  registration?: UseFormRegisterReturn;
}

export default function InputCheckbox(props: Props) {
  const { text, inputProps, registration } = props;

  return (
    <label className={styles.root}>
      <input className={styles.input} type="checkbox" {...inputProps} {...registration}></input>
      <span className={styles.mark}></span>
      <span className={styles.text}>{text}</span>
    </label>
  );
}
