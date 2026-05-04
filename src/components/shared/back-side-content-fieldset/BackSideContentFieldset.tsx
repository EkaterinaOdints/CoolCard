import { type FormValues } from "@/src/app/create-card/create-card/types";

import { Controller, type Control, type FieldErrors } from "react-hook-form";

import Fieldset from "@/src/components/ui/form/fieldset/Fieldset";
import InputText from "@/src/components/ui/form/input-text/InputText";
import CustomRange from "@/src/components/ui/form/custom-range/CustomRange";
import CustomSelect from "@/src/components/ui/form/custom-select/CustomSelect";

import { fonts } from "@/src/data/data";

interface Props {
  control: Control<FormValues>;
  errors: FieldErrors<FormValues>;
}

export default function BackSideContentFieldset(props: Props) {
  const { control, errors } = props;

  const formatCardNumber = (value: string) => {
    return value.replace(/(.{4})/g, "$1 ").trim();
  };

  const formatCardPeriod = (value: string) => {
    return value.replace(/(\d{2})(\d{0,2})/, (_, m, y) => {
      return y ? `${m}/${y}` : m;
    });
  };

  return (
    <>
      <Fieldset legend="Информация">
        <Controller
          name="cardNumber"
          control={control}
          rules={{
            required: "Обязательное поле",
            minLength: {
              value: 16,
              message: "Номер карты должен состоять из 16 цифр",
            },
          }}
          render={({ field }) => (
            <InputText
              title="Номер карты"
              type="text"
              name={field.name}
              value={formatCardNumber(field.value)}
              onChange={(value) => {
                field.onChange(value.replace(/\D/g, "").slice(0, 16));
              }}
              onBlur={field.onBlur}
              inputRef={field.ref}
              error={errors.cardNumber}
              inputProps={{
                placeholder: "Введите номер карты",
                maxLength: 19,
                autoComplete: "on",
              }}
            />
          )}
        />
        <Controller
          name="cardPeriod"
          control={control}
          rules={{
            required: "Обязательное поле",
            minLength: {
              value: 4,
              message: "Срок действия карты должен состоять из 4 цифр",
            },
          }}
          render={({ field }) => (
            <InputText
              title="Срок действия карты"
              type="text"
              name={field.name}
              value={formatCardPeriod(field.value)}
              onChange={(value) => {
                field.onChange(value.replace(/\D/g, "").slice(0, 4));
              }}
              onBlur={field.onBlur}
              inputRef={field.ref}
              error={errors.cardPeriod}
              inputProps={{
                placeholder: "Введите срок действия карты",
                maxLength: 5,
                autoComplete: "on",
              }}
            />
          )}
        />
      </Fieldset>
      <Fieldset legend="Текст">
        <Controller
          name="backSideText"
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
          name="backSideTextSize"
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
          name="backSideTextFont"
          control={control}
          render={({ field }) => (
            <CustomSelect
              label="Шрифт"
              id="back-text-font-select"
              defaultText="Выберите шрифт"
              value={field.value}
              options={fonts}
              onChange={field.onChange}
            />
          )}
        />
      </Fieldset>
    </>
  );
}
