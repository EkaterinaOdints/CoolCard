import styles from "./styles.module.css";
import type Option from "./types";

import { useRef, useState } from "react";
import classNames from "classnames";

import { useEscClickClose } from "@/src/hooks/useEscClickClose";
import { useOutsideClickClose } from "@/src/hooks/useOutsideClickClose";

interface Props<T extends string, U extends string> {
  id?: string;
  className?: string;
  defaultText: string;
  options: Option<T, U>[];
  onChange: React.Dispatch<React.SetStateAction<T>>;
  disabled?: boolean;
}

export default function CustomSelect<T extends string, U extends string>(props: Props<T, U>) {
  const { id, className, defaultText, options, onChange, disabled } = props;

  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<Option<T, U> | null>(null);

  const selectRef = useRef<HTMLDivElement | null>(null);

  const onItemClick = (item: Option<T, U>) => {
    setSelectedItem(item);
    setIsOpen(false);
    onChange(item.id);
  };

  useEscClickClose({
    isOpen: isOpen,
    onClose: () => setIsOpen(false),
  });

  useOutsideClickClose({
    isOpen: isOpen,
    elRef: selectRef,
    onClose: () => setIsOpen(false),
  });

  return (
    <div className={classNames(styles.root, className, disabled && styles.disabled)} ref={selectRef}>
      <button id={id} className={classNames(styles.button, isOpen && styles.isActive)} aria-haspopup="listbox" aria-expanded={isOpen} type="button" onClick={() => setIsOpen((prev) => !prev)}>
        <span>{selectedItem !== null ? selectedItem.title : defaultText}</span>
      </button>
      {isOpen && (
        <ul className={styles.list} role="listbox">
          {options.map((item) => {
            if (item?.id === selectedItem?.id) return;

            return (
              <li className={styles.item} key={item.id}>
                <button className={styles.itemButton} onClick={() => onItemClick(item)}>
                  {item.title}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
