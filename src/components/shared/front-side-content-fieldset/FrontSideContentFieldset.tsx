import styles from "./styles.module.css";

import { type FormValues } from "@/src/app/create-card/create-card/types";

import { Controller, type Control, type FieldErrors } from "react-hook-form";

import InputText from "@/src/components/ui/form/input-text/InputText";
import CustomRange from "@/src/components/ui/form/custom-range/CustomRange";
import CustomSelect from "@/src/components/ui/form/custom-select/CustomSelect";
import Fieldset from "@/src/components/ui/form/fieldset/Fieldset";

import { fonts } from "@/src/data/data";

interface Props {
  control: Control<FormValues>;
  errors: FieldErrors<FormValues>;
}

export default function FrontSideContentFieldset(props: Props) {
  const { control, errors } = props;

  return (
    <div className={styles.root}>
      <Fieldset legend="Имя">
        <Controller
          name="name"
          control={control}
          rules={{
            required: "Обязательное поле",
          }}
          render={({ field }) => (
            <InputText
              type="text"
              name={field.name}
              value={field.value}
              onChange={field.onChange}
              onBlur={field.onBlur}
              inputRef={field.ref}
              error={errors.name}
              inputProps={{ placeholder: "Введите имя", maxLength: 50 }}
            />
          )}
        />
        <Controller
          name="nameSize"
          control={control}
          render={({ field }) => (
            <CustomRange
              title="Размер"
              value={field.value}
              onChange={field.onChange}
              name={field.name}
              onBlur={field.onBlur}
              inputRef={field.ref}
              inputProps={{ min: 12, max: 30, step: 2 }}
            />
          )}
        />
        <Controller
          name="nameFont"
          control={control}
          rules={{
            required: "Обязательное поле",
          }}
          render={({ field }) => (
            <CustomSelect
              label="Шрифт"
              id="name-font-select"
              defaultText="Выберите шрифт"
              value={field.value}
              options={fonts}
              onChange={field.onChange}
              error={errors.nameFont}
            />
          )}
        />
      </Fieldset>
      <Fieldset legend="Текст">
        <Controller
          name="text"
          control={control}
          render={({ field }) => (
            <InputText
              type="text"
              name={field.name}
              value={field.value}
              onChange={field.onChange}
              onBlur={field.onBlur}
              inputRef={field.ref}
              inputProps={{ placeholder: "Введите текст", maxLength: 50 }}
            />
          )}
        />
        <Controller
          name="textSize"
          control={control}
          render={({ field }) => (
            <CustomRange
              title="Размер"
              value={field.value}
              onChange={field.onChange}
              name={field.name}
              onBlur={field.onBlur}
              inputRef={field.ref}
              inputProps={{ min: 12, max: 30, step: 2 }}
            />
          )}
        />
        <Controller
          name="textFont"
          control={control}
          render={({ field }) => (
            <CustomSelect
              label="Шрифт"
              id="text-font-select"
              defaultText="Выберите шрифт"
              value={field.value}
              options={fonts}
              onChange={field.onChange}
            />
          )}
        />
      </Fieldset>
    </div>
  );
}
