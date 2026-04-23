import styles from "./styles.module.css";
import { type FormValues } from "./types";
import { type FeedbackStatus } from "@/src/components/ui/feedback-modal/types";
import Button from "@/src/components/ui/button/Button";
import InputRadioSet from "@/src/components/ui/form/input-radio-set/InputRadioSet";
import InputText from "@/src/components/ui/form/input-text/InputText";
import {
  Controller,
  type Control,
  type UseFormRegister,
  type UseFormHandleSubmit,
  type SubmitHandler,
  type FieldErrors,
} from "react-hook-form";

const feedbackMethods = [
  {
    id: "whatsApp",
    title: "WhatsApp",
  },
  {
    id: "telegram",
    title: "Telegram",
  },
  {
    id: "call",
    title: "Звонок",
  },
];

interface Props {
  status: FeedbackStatus;
  isValid: boolean;
  register: UseFormRegister<FormValues>;
  control: Control<FormValues>;
  handleSubmit: UseFormHandleSubmit<FormValues>;
  onSubmit: SubmitHandler<FormValues>;
  errors: FieldErrors<FormValues>;
}

export default function FeedbackForm(props: Props) {
  const { status, isValid, register, control, handleSubmit, onSubmit, errors } = props;

  return (
    <form className={styles.root} onSubmit={handleSubmit(onSubmit)}>
      <fieldset className={styles.fieldset}>
        <InputRadioSet
          items={feedbackMethods}
          registration={register("feedbackMethod", { required: "Обязательное поле" })}
          error={errors.feedbackMethod}
          disabled={status === "sending"}
        ></InputRadioSet>
      </fieldset>
      <fieldset className={styles.fieldset}>
        <Controller
          name="phone"
          control={control}
          rules={{
            required: "Обязательное поле",
            validate: {
              onlyDigits: (value) => /^\d+$/.test(value) || "Допускаются только цифры",
              correctLength: (value) => value.length === 11 || "Номер должен состоять из 11 цифр",
            },
          }}
          render={({ field }) => (
            <InputText
              type="tel"
              name={field.name}
              value={field.value}
              onChange={field.onChange}
              onBlur={field.onBlur}
              inputRef={field.ref}
              error={errors.phone}
              inputProps={{
                placeholder: "Введите телефон",
                maxLength: 11,
                disabled: status === "sending",
              }}
            />
          )}
        />
      </fieldset>
      <Button
        className={styles.button}
        tag="button"
        type="submit"
        variant="small"
        color="accent"
        disabled={!isValid || status === "sending"}
      >
        {status === "sending" ? `Отправка` : `Отправить`}
      </Button>
      <p className={styles.agreement}>
        Нажимая кнопку «Отправить» вы соглашаетесь с{" "}
        <a className={styles.agreementLink} href="#" target="_blank" rel="noopener noreferrer">
          пользовательским соглашением
        </a>{" "}
        и{" "}
        <a className={styles.agreementLink} href="#" target="_blank" rel="noopener noreferrer">
          политикой конфиденциальности
        </a>
      </p>
    </form>
  );
}
