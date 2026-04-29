"use client";

import styles from "./styles.module.css";
import { type DesignVariant, type FileInputs } from "./types";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import classNames from "classnames";
import {
  useWatch,
  Controller,
  type Control,
  type UseFormRegister,
  type UseFormSetValue,
  type UseFormUnregister,
} from "react-hook-form";
import type { FieldErrors } from "react-hook-form";

import { type FormValues } from "@/src/app/create-card/create-card/types";
import { designCategories, pictures, type DesignCategory } from "@/src/data/data";

import CustomFileInput from "../../ui/form/custom-file-input/CustomFileInput";
import CustomSelect from "../../ui/form/custom-select/CustomSelect";
import InputCheckbox from "../../ui/form/input-checkbox/InputCheckbox";
import InputRadioSetUi from "../../ui/form/input-radio-set/InputRadioSetUi";

interface Props {
  control: Control<FormValues>;
  errors: FieldErrors<FormValues>;
  register: UseFormRegister<FormValues>;
  unregister: UseFormUnregister<FormValues>;
  setValue: UseFormSetValue<FormValues>;
  onSubmitAvailabilityChange?: (value: boolean) => void;
  setResultMessage: React.Dispatch<React.SetStateAction<string | null>>;
}

export const designVariants = [
  { id: "templates", title: "Шаблоны" },
  { id: "individual", title: "Свой дизайн" },
] as const;

export const fileInputs = [
  {
    id: "frontSidePicture",
    title: "Лицевая сторона",
    text: "Загрузить изображение",
  },
  {
    id: "backSidePicture",
    title: "Обратная сторона",
    text: "Загрузить изображение",
  },
] as const satisfies FileInputs;

export default function DesignVariants(props: Props) {
  const {
    control,
    errors,
    register,
    unregister,
    setValue,
    onSubmitAvailabilityChange,
    setResultMessage,
  } = props;

  const [designOption, setDesignOption] = useState<DesignVariant>("templates");
  const [designCategory, setDesignCategory] = useState<DesignCategory>("all");
  const [frontSidePicture, backSidePicture] = useWatch({
    control,
    name: ["frontSidePicture", "backSidePicture"],
  });
  const hasUploadedFile = Boolean(frontSidePicture?.length || backSidePicture?.length);
  const canSubmit = designOption === "templates" || hasUploadedFile;

  const onOptionChange = (id: DesignVariant) => {
    setDesignOption(id);

    if (id === "templates") {
      fileInputs.forEach(({ id: fieldId }) => {
        unregister(fieldId);
      });
      setResultMessage(null);
    }

    if (id === "individual") {
      unregister("design");
      setDesignCategory("all");
    }
  };

  useEffect(() => {
    onSubmitAvailabilityChange?.(canSubmit);
  }, [canSubmit, onSubmitAvailabilityChange]);

  const filteredDesigns = useMemo(() => {
    if (designCategory === "all") return pictures;
    return pictures.filter(({ category }) => category === designCategory);
  }, [designCategory]);

  return (
    <div className={styles.root}>
      <InputRadioSetUi
        items={designVariants}
        name="designOptions"
        checkedItem={designOption}
        onChange={onOptionChange}
      />
      {designOption === "templates" && (
        <div className={styles.content}>
          <CustomSelect
            id="category-design-select"
            label="Категория"
            className={styles.select}
            defaultText="Выберите категорию"
            options={designCategories}
            onChange={setDesignCategory}
          />
          <div className={styles.templatesImages}>
            <label
              className={classNames(styles.templatesImageWrapper, styles.templatesImageWrapperNone)}
            >
              <input
                className={styles.templatesInput}
                aria-label="Без шаблона"
                type="radio"
                value="none"
                {...register("design", {
                  required: "Обязательное поле",
                })}
              ></input>
            </label>
            {filteredDesigns.map(({ name, src, alt }) => {
              return (
                <label className={styles.templatesImageWrapper} key={name}>
                  <input
                    className={styles.templatesInput}
                    type="radio"
                    value={name}
                    {...register("design", {
                      required: "Обязательное поле",
                    })}
                  ></input>
                  <Image
                    className={styles.templatesImage}
                    src={src}
                    alt={alt}
                    width={97}
                    height={67}
                  ></Image>
                </label>
              );
            })}
          </div>
        </div>
      )}
      {designOption === "individual" && (
        <>
          <div className={styles.fileInputWrapper}>
            {fileInputs.map(({ id, title, text }) => {
              return (
                <CustomFileInput
                  key={id}
                  text={text}
                  title={title}
                  accept="image/*"
                  registration={register(id)}
                  onClear={() => {
                    setValue(id, undefined, {
                      shouldDirty: true,
                      shouldValidate: true,
                    });
                  }}
                  onFocus={() => setResultMessage("Разработка дизайна 1-2 рабочих дня")}
                  onBlur={() => setResultMessage(null)}
                />
              );
            })}
          </div>
          <p className={styles.content}>
            Время разработки дизайна 1-2 рабочих дня. Если вы хотите получить заказ быстрее,
            поставьте галочку в поле «Срочно». Стоимость + 1 000 ₽
          </p>
          <Controller
            name="urgent"
            control={control}
            render={({ field }) => (
              <InputCheckbox
                text="Срочно"
                name={field.name}
                checked={field.value}
                onChange={field.onChange}
                onBlur={field.onBlur}
                inputRef={field.ref}
                error={errors.urgent}
              />
            )}
          />
        </>
      )}
    </div>
  );
}
