"use client";

import styles from "./styles.module.css";
import { type FormValues } from "./types";

import { useState } from "react";
import { Controller, useForm, type SubmitHandler, type UseFormRegister } from "react-hook-form";

import Container from "@/src/components/layout/container/Container";
import Accordion from "@/src/components/ui/accordion/Accordion";
import ColorsRadioSet from "@/src/components/shared/colors-radio-set/ColorsRadioSet";
import DesignVariants from "@/src/components/shared/design-variants/DesignVariants";
import Button from "@/src/components/ui/button/Button";
import InputRadioSet from "@/src/components/ui/form/input-radio-set/InputRadioSet";
import InputText from "@/src/components/ui/form/input-text/InputText";
import CustomRange from "@/src/components/ui/form/custom-range/CustomRange";
import Title from "@/src/components/ui/title/Title";

export default function CreateCard() {
  const [isDesignSubmitAllowed, setIsDesignSubmitAllowed] = useState(true);

  const {
    control,
    register,
    unregister,
    setValue,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormValues>({
    mode: "onChange",
    defaultValues: {
      nfc: "yes",
      color: "none",
      design: "none",
      urgent: false,
      name: "",
      nameSize: 12,
      frontSidePicture: undefined,
      backSidePicture: undefined,
    },
    shouldUnregister: true,
  });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    console.log(data);
  };

  const DesignContent = (register: UseFormRegister<FormValues>) => {
    return (
      <div className={styles.fieldsetWrapper}>
        <fieldset className={styles.fieldset}>
          <legend className={styles.fieldsetName}>NFC</legend>
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
        </fieldset>
        <fieldset className={styles.fieldset}>
          <legend className={styles.fieldsetName}>Цвет</legend>
          <ColorsRadioSet register={register} />
        </fieldset>
        <fieldset className={styles.fieldset}>
          <legend className={styles.fieldsetName}>Дизайн</legend>
          <DesignVariants
            control={control}
            register={register}
            unregister={unregister}
            setValue={setValue}
            errors={errors}
            onSubmitAvailabilityChange={setIsDesignSubmitAllowed}
          />
        </fieldset>
      </div>
    );
  };

  const FrontSideContent = () => {
    return (
      <div className={styles.fieldsetWrapper}>
        <fieldset className={styles.fieldset}>
          <legend className={styles.fieldsetName}>Имя</legend>
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
                inputProps={{ placeholder: "Введите имя" }}
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
        </fieldset>
      </div>
    );
  };

  return (
    <section className={styles.root}>
      <Container>
        <div className={styles.wrapper}>
          <div className={styles.header}>
            <Button
              tag="button"
              variant="nav"
              color="light"
              aria-label="Назад"
              isBackButton
            ></Button>
            <Title tag="h1">Создание карты</Title>
          </div>
          <div className={styles.body}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className={styles.settings}>
                <Title tag="h2">Настройки</Title>
                <Accordion title="Дизайн" content={DesignContent(register)} />
                <Accordion title="Лицевая сторона" content={FrontSideContent()} />
              </div>
              <div className={styles.result}></div>
              <div className={styles.payment}>
                <Button
                  tag="button"
                  variant="big"
                  color="accent"
                  type="submit"
                  disabled={!isDesignSubmitAllowed || !isValid}
                >
                  В корзину
                </Button>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}
