import styles from "./styles.module.css";
import { type RadioItem } from "./types";

interface Props<T extends string> {
  array: readonly RadioItem<T>[];
  name: string;
  disabledItems?: T[];
  checkedItem?: T;
  onChange?: (value: T) => void;
}

export default function InputRadioSetUi<T extends string>(props: Props<T>) {
  const { array, name, disabledItems, checkedItem, onChange } = props;

  const radioList = array.map(({ id, title }) => {
    return (
      <label className={styles.label} key={id}>
        <input className={styles.input} name={name} type="radio" value={id} checked={checkedItem === id} disabled={disabledItems?.some((item) => item === id)} onChange={() => onChange?.(id)} />
        <span className={styles.mark}></span>
        <span className={styles.text}>{title}</span>
      </label>
    );
  });

  return <div className={styles.root}>{radioList}</div>;
}
