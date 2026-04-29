import styles from "./styles.module.css";

import type { FormValues } from "@/src/app/create-card/create-card/types";

import InputRadioSet from "@/src/components/ui/form/input-radio-set/InputRadioSet";
import ColorsRadioSet from "@/src/components/shared/colors-radio-set/ColorsRadioSet";
import DesignVariants from "@/src/components/shared/design-variants/DesignVariants";
import Fieldset from "@/src/components/ui/form/fieldset/Fieldset";

import {
  type FieldErrors,
  type UseFormRegister,
  type UseFormUnregister,
  type UseFormSetValue,
  type Control,
} from "react-hook-form";

interface Props {
  control: Control<FormValues>;
  errors: FieldErrors<FormValues>;
  register: UseFormRegister<FormValues>;
  unregister: UseFormUnregister<FormValues>;
  setValue: UseFormSetValue<FormValues>;
  setIsDesignSubmitAllowed: React.Dispatch<React.SetStateAction<boolean>>;
  setResultMessage: React.Dispatch<React.SetStateAction<string | null>>;
}

export default function DesignContentFieldset(props: Props) {
  const {
    setIsDesignSubmitAllowed,
    setResultMessage,
    errors,
    control,
    setValue,
    unregister,
    register,
  } = props;

  return (
    <div className={styles.root}>
      <Fieldset legend="NFC">
        <InputRadioSet
          items={[
            { id: "yes", title: "Да" },
            { id: "no", title: "Нет" },
          ]}
          registration={register("nfc", {
            required: "Обязательное поле",
          })}
          error={errors.nfc}
        />
      </Fieldset>
      <Fieldset legend="Цвет">
        <ColorsRadioSet register={register} />
      </Fieldset>
      <Fieldset legend="Дизайн">
        <DesignVariants
          control={control}
          register={register}
          unregister={unregister}
          setValue={setValue}
          errors={errors}
          onSubmitAvailabilityChange={setIsDesignSubmitAllowed}
          setResultMessage={setResultMessage}
        />
      </Fieldset>
    </div>
  );
}
