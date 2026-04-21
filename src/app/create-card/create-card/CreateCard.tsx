"use client";

import styles from "./styles.module.css";
import { type FormValues } from "./types";

import { useState } from "react";
import { useForm, type SubmitHandler, type UseFormRegister } from "react-hook-form";

import Container from "@/src/components/layout/container/Container";
import Accordion from "@/src/components/ui/accordion/Accordion";
import ColorsRadioSet from "@/src/components/shared/colors-radio-set/ColorsRadioSet";
import DesignVariants from "@/src/components/shared/design-variants/DesignVariants";
import Button from "@/src/components/ui/button/Button";
import InputRadioSet from "@/src/components/ui/form/input-radio-set/InputRadioSet";
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
            array={[
              { id: "yes", title: "Да" },
              { id: "no", title: "Нет" },
            ]}
            registration={register("nfc", { required: "Обязательное поле" })}
            error={errors.nfc}
          />
        </fieldset>
        <fieldset className={styles.fieldset}>
          <legend className={styles.fieldsetName}>Цвет</legend>
          <ColorsRadioSet register={register} />
        </fieldset>
        <fieldset className={styles.fieldset}>
          <legend className={styles.fieldsetName}>Дизайн</legend>
          <DesignVariants control={control} register={register} unregister={unregister} setValue={setValue} onSubmitAvailabilityChange={setIsDesignSubmitAllowed} />
        </fieldset>
      </div>
    );
  };

  return (
    <section className={styles.root}>
      <Container>
        <div className={styles.wrapper}>
          <div className={styles.header}>
            <Button tag="button" variant="nav" color="light" aria-label="Назад" isBackButton></Button>
            <Title tag="h1">Создание карты</Title>
          </div>
          <div className={styles.body}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className={styles.settings}>
                <Title tag="h2">Настройки</Title>
                <Accordion title="Дизайн" content={DesignContent(register)} />
              </div>
              <div className={styles.result}></div>
              <div className={styles.payment}>
                <Button tag="button" variant="big" color="accent" type="submit" disabled={!isDesignSubmitAllowed || !isValid}>
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
