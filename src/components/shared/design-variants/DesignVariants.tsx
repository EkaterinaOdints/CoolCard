"use client";

import styles from "./styles.module.css";
import { type DesignVariant, type FileFieldKeys, type FileInputs } from "./types";

import Image from "next/image";
import { useEffect, useMemo, useState, type RefObject } from "react";
import classNames from "classnames";
import { useWatch, type Control, type UseFormRegister, type UseFormSetValue, type UseFormUnregister } from "react-hook-form";

import { type FormValues } from "@/src/app/create-card/create-card/types";
import { designCategories, pictures, type DesignCategory } from "@/src/data/data";

import CustomFileInput from "../../ui/form/custom-file-input/CustomFileInput";
import CustomSelect from "../../ui/form/custom-select/CustomSelect";
import InputCheckbox from "../../ui/form/input-checkbox/InputCheckbox";
import InputRadioSetUi from "../../ui/form/input-radio-set/InputRadioSetUi";

interface Props {
  control: Control<FormValues>;
  register: UseFormRegister<FormValues>;
  unregister: UseFormUnregister<FormValues>;
  setValue: UseFormSetValue<FormValues>;
  onSubmitAvailabilityChange?: (value: boolean) => void;
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
  const { control, register, unregister, setValue, onSubmitAvailabilityChange } = props;

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
    }

    if (id === "individual") {
      unregister("design");
      setDesignCategory("all");
    }
  };

  const clearFileField = (ref: RefObject<HTMLInputElement>) => {
    const fieldName = ref.current?.name as FileFieldKeys | undefined;
    if (!fieldName) return;

    setValue(fieldName, undefined, {
      shouldDirty: true,
      shouldValidate: true,
    });
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
      <InputRadioSetUi array={designVariants} name="designOptions" checkedItem={designOption} onChange={onOptionChange} />
      {designOption === "templates" && (
        <div className={styles.content}>
          <label className={styles.label} htmlFor="category-design-select">
            Категория
          </label>
          <CustomSelect id="category-design-select" className={styles.select} defaultText="Выберите категорию" options={designCategories} onChange={setDesignCategory} />
          <div className={styles.templatesImages}>
            <label className={classNames(styles.templatesImageWrapper, styles.templatesImageWrapperNone)}>
              <input className={styles.templatesInput} type="radio" value="none" {...register("design", { required: "Обязательное поле" })}></input>
            </label>
            {filteredDesigns.map(({ name, src, alt }) => {
              return (
                <label className={styles.templatesImageWrapper} key={name}>
                  <input className={styles.templatesInput} type="radio" value={name} {...register("design", { required: "Обязательное поле" })}></input>
                  <Image className={styles.templatesImage} src={src} alt={alt} width={97} height={67}></Image>
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
              return <CustomFileInput key={id} text={text} title={title} accept="image/*" clearFileField={clearFileField} registration={register(id)} />;
            })}
          </div>
          <p className={styles.content}>Время разработки дизайна 1-2 рабочих дня. Если вы хотите получить заказ быстрее, поставьте галочку в поле «Срочно». Стоимость + 1 000 ₽</p>
          <InputCheckbox text="Срочно" registration={register("urgent")} />
        </>
      )}
    </div>
  );
}
