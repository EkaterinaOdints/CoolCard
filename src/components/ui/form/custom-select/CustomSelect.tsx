import styles from "./styles.module.css";
import type Option from "./types";

import { useRef, useState } from "react";
import { type FieldError } from "react-hook-form";
import classNames from "classnames";

import { useEscClickClose } from "@/src/hooks/useEscClickClose";
import { useOutsideClickClose } from "@/src/hooks/useOutsideClickClose";

interface Props<T extends string, U extends string> {
  label?: string;
  id?: string;
  className?: string;
  defaultText: string;
  value?: T;
  options: Option<T, U>[];
  onChange: (value: T) => void;
  disabled?: boolean;
  error?: FieldError;
}

export default function CustomSelect<T extends string, U extends string>(props: Props<T, U>) {
  const { label, id, className, defaultText, value, options, onChange, disabled, error } = props;

  const [isOpen, setIsOpen] = useState(false);
  const [selectedId, setSelectedId] = useState<T | null>(null);

  const selectRef = useRef<HTMLDivElement | null>(null);
  const selectedOptionId = value ?? selectedId;
  const selectedItem = options.find((item) => item.id === selectedOptionId) ?? null;

  const onItemClick = (item: Option<T, U>) => {
    setSelectedId(item.id);
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
    <div className={classNames(styles.root, error && styles.error)}>
      {label && (
        <label className={styles.label} htmlFor={id}>
          {label}
        </label>
      )}
      <div
        className={classNames(styles.wrapper, className, disabled && styles.disabled)}
        ref={selectRef}
      >
        <button
          id={id}
          className={classNames(styles.button, isOpen && styles.isActive)}
          aria-expanded={isOpen}
          type="button"
          disabled={disabled}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span>{selectedItem !== null ? selectedItem.title : defaultText}</span>
        </button>
        {isOpen && (
          <ul className={styles.list}>
            {options.map((item) => {
              if (item?.id === selectedOptionId) return;

              return (
                <li className={styles.item} key={item.id}>
                  <button
                    className={styles.itemButton}
                    type="button"
                    onClick={() => onItemClick(item)}
                  >
                    {item.title}
                  </button>
                </li>
              );
            })}
          </ul>
        )}
      </div>
      {error && <span className={styles.errorText}>{error.message}</span>}
    </div>
  );
}
