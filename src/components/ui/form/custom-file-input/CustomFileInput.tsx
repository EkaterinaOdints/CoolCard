import styles from "./styles.module.css";

import Image from "next/image";
import { useEffect, useRef } from "react";
import classNames from "classnames";
import { type UseFormRegisterReturn } from "react-hook-form";

import CloseButton from "@/src/components/ui/close-button/CloseButton";
import useFilePreview from "@/src/hooks/useFilePreview";

interface Props {
  title?: string;
  text?: string;
  accept?: string;
  onClear?: () => void;
  onFocus?: () => void;
  onBlur?: () => void;
  registration: UseFormRegisterReturn;
}

export default function CustomFileInput(props: Props) {
  const { title, text, accept, onClear, onFocus, onBlur, registration } = props;

  const { file, updateFilePreview, previewUrl } = useFilePreview();

  const inputRef = useRef<HTMLInputElement | null>(null);

  const changeFile = (target: HTMLInputElement) => {
    const nextFile = target.files?.[0];
    if (!nextFile) return;

    updateFilePreview(nextFile);
  };

  const removeFile = () => {
    updateFilePreview(null);

    if (inputRef.current) inputRef.current.value = "";

    onClear?.();
  };

  useEffect(() => {
    return () => {
      updateFilePreview(null);
    };
  }, [updateFilePreview]);

  return (
    <div className={classNames(styles.root, file && styles.isFileUploaded)}>
      <label
        className={styles.label}
        tabIndex={0}
        onFocus={() => onFocus?.()}
        onBlur={() => onBlur?.()}
      >
        <span className={styles.wrapper}>
          <input
            className={styles.input}
            type="file"
            accept={accept}
            {...registration}
            onChange={(evt) => {
              registration.onChange(evt);
              changeFile(evt.target);
            }}
            ref={(el) => {
              registration.ref(el);
              inputRef.current = el;
            }}
          />
          {previewUrl && (
            <Image
              className={styles.image}
              src={previewUrl}
              alt="Загруженное фото"
              width={128}
              height={79}
              unoptimized
            />
          )}
          <span className={styles.text}>{file?.name || text}</span>
        </span>
        <span className={styles.title}>{title}</span>
      </label>
      {file && (
        <CloseButton
          className={styles.closeButton}
          ariaLabel="Удалить файл"
          onClick={() => removeFile()}
        ></CloseButton>
      )}
    </div>
  );
}
