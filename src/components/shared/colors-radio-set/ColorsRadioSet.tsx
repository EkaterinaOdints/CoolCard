import styles from "./styles.module.css";
import classNames from "classnames";
import { colors } from "@/src/data/data";
import { type UseFormRegister } from "react-hook-form";
import { type FormValues } from "@/src/app/create-card/create-card/types";

interface Props {
  register: UseFormRegister<FormValues>;
}

export default function ColorsRadioSet(props: Props) {
  const { register } = props;

  return (
    <div className={styles.root}>
      <label className={classNames(styles.label, styles.labelNone)}>
        <input className={styles.input} type="radio" aria-label="Без цвета" value="none" {...register("color", { required: "Обязательное поле" })} />
      </label>
      {colors.map(({ name, style }) => {
        return (
          <label className={styles.label} style={{ background: style }} key={name}>
            <input className={styles.input} type="radio" aria-label={name} value={name} {...register("color", { required: "Обязательное поле" })} />
          </label>
        );
      })}
    </div>
  );
}
