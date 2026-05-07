"use client";

import styles from "./styles.module.css";
import { type FormValues } from "./types";

import { useEffect, useState } from "react";
import { useForm, type SubmitHandler, type Path } from "react-hook-form";

import Container from "@/src/components/layout/container/Container";
import Accordion from "@/src/components/ui/accordion/Accordion";

import Button from "@/src/components/ui/button/Button";

import Title from "@/src/components/ui/title/Title";
import DesignContentFieldset from "@/src/components/shared/design-content-fieldset/DesignContentFieldset";
import FrontSideContentFieldset from "@/src/components/shared/front-side-content-fieldset/FrontSideContentFieldset";
import BackSideContentFieldset from "@/src/components/shared/back-side-content-fieldset/BackSideContentFieldset";
import ResultPreview from "@/src/components/shared/result-preview/ResultPreview";
import Billing from "@/src/components/shared/billing/Billing";

import { useCreateCardFormValues } from "@/src/hooks/useCreateCardFormValues";
import { useCreateCardPaidOptions } from "@/src/hooks/useCreateCardPaidOptions";
import { useCreateCardPreviewOptions } from "@/src/hooks/useCreateCardPreviewOptions";
import { useLoadSelectedFonts } from "@/src/hooks/useLoadSelectedFonts";

type ActiveAccordion = "design" | "frontSide" | "backSide" | null;

export default function CreateCard() {
  const [isDesignSubmitAllowed, setIsDesignSubmitAllowed] = useState(true);
  const [resultMessage, setResultMessage] = useState<string | null>(null);
  const [activeAccordion, setActiveAccordion] = useState<ActiveAccordion>(null);

  const {
    control,
    register,
    unregister,
    resetField,
    setValue,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormValues>({
    mode: "onChange",
    defaultValues: {
      nfc: "no",
      color: "none",
      design: "none",
      frontSidePicture: undefined,
      backSidePicture: undefined,
      urgent: false,
      name: "",
      nameSize: 20,
      nameFont: undefined,
      frontSideText: "",
      frontSideTextSize: 20,
      frontSideTextFont: undefined,
      cardNumber: "",
      cardPeriod: "",
      backSideText: "",
      backSideTextSize: 20,
      backSideTextFont: undefined,
    },
    shouldUnregister: true,
  });

  const formValues = useCreateCardFormValues(control);
  const previewOptions = useCreateCardPreviewOptions(formValues);
  const selectedPayingOptions = useCreateCardPaidOptions(formValues);

  useLoadSelectedFonts([
    previewOptions.selectedNameFont,
    previewOptions.selectedFrontSideTextFont,
    previewOptions.selectedBackSideTextFont,
  ]);

  useEffect(() => {
    setValue("nfc", "yes", {
      shouldDirty: false,
      shouldTouch: false,
      shouldValidate: true,
    });
  }, [setValue]);

  const removeOptionFromSelectedPaying = (option: Path<FormValues>) => {
    resetField(option);
  };

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    console.log(data);
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
            <Title className={styles.title} tag="h1" size="small">
              Создание карты
            </Title>
          </div>
          <div className={styles.body}>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
              <div className={styles.settings}>
                <Title className={styles.settingsTitle} tag="h2">
                  Настройки
                </Title>
                <Accordion
                  type="form"
                  title="Дизайн"
                  isActive={activeAccordion === "design"}
                  onToggle={() =>
                    setActiveAccordion((current) => (current === "design" ? null : "design"))
                  }
                  content={
                    <div className={styles.accordionContent}>
                      <DesignContentFieldset
                        register={register}
                        unregister={unregister}
                        setValue={setValue}
                        control={control}
                        errors={errors}
                        setIsDesignSubmitAllowed={setIsDesignSubmitAllowed}
                        setResultMessage={setResultMessage}
                      />
                    </div>
                  }
                />
                <Accordion
                  type="form"
                  title="Лицевая сторона"
                  isActive={activeAccordion === "frontSide"}
                  onToggle={() =>
                    setActiveAccordion((current) => (current === "frontSide" ? null : "frontSide"))
                  }
                  content={
                    <div className={styles.accordionContent}>
                      <FrontSideContentFieldset control={control} errors={errors} />
                    </div>
                  }
                />
                <Accordion
                  type="form"
                  title="Обратная сторона"
                  isActive={activeAccordion === "backSide"}
                  onToggle={() =>
                    setActiveAccordion((current) => (current === "backSide" ? null : "backSide"))
                  }
                  content={
                    <div className={styles.accordionContent}>
                      <BackSideContentFieldset control={control} errors={errors} />
                    </div>
                  }
                />
              </div>
              <div className={styles.result}>
                <Title className="visually-hidden" tag="h2">
                  Результат
                </Title>
                <ResultPreview
                  currentTheme={activeAccordion}
                  resultMessage={resultMessage}
                  formValues={formValues}
                  previewOptions={previewOptions}
                />
              </div>
              <div className={styles.buying}>
                <Billing
                  selectedPayingOptions={selectedPayingOptions}
                  removeOptionFromSelectedPaying={removeOptionFromSelectedPaying}
                />
                <Button
                  className={styles.submitButton}
                  tag="button"
                  variant="small"
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
