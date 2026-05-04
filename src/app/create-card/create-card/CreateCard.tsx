"use client";

import styles from "./styles.module.css";
import { type FormValues } from "./types";

import { useEffect, useState } from "react";
import { useForm, useWatch, type SubmitHandler } from "react-hook-form";

import Container from "@/src/components/layout/container/Container";
import Accordion from "@/src/components/ui/accordion/Accordion";

import Button from "@/src/components/ui/button/Button";

import Title from "@/src/components/ui/title/Title";
import Card from "@/src/components/ui/card/Card";
import CardBack from "@/src/components/ui/card-back/CardBack";
import DesignContentFieldset from "@/src/components/shared/design-content-fieldset/DesignContentFieldset";
import FrontSideContentFieldset from "@/src/components/shared/front-side-content-fieldset/FrontSideContentFieldset";
import BackSideContentFieldset from "@/src/components/shared/back-side-content-fieldset/BackSideContentFieldset";

import { colors, pictures, fonts } from "@/src/data/data";
import { loadFontFace } from "@/src/utils/fonts";

type ActiveAccordion = "design" | "frontSide" | "backSide" | null;

export default function CreateCard() {
  const [isDesignSubmitAllowed, setIsDesignSubmitAllowed] = useState(true);
  const [resultMessage, setResultMessage] = useState<string | null>(null);
  const [activeAccordion, setActiveAccordion] = useState<ActiveAccordion>(null);

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

  const colorValue = useWatch({
    control,
    name: "color",
  });

  const designValue = useWatch({
    control,
    name: "design",
  });

  const nameValue = useWatch({
    control,
    name: "name",
  });

  const nameSize = useWatch({
    control,
    name: "nameSize",
  });

  const nameFont = useWatch({
    control,
    name: "nameFont",
  });

  const frontSideTextValue = useWatch({
    control,
    name: "frontSideText",
  });

  const frontSideTextSize = useWatch({
    control,
    name: "frontSideTextSize",
  });

  const frontSideTextFont = useWatch({
    control,
    name: "frontSideTextFont",
  });

  const cardNumber = useWatch({
    control,
    name: "cardNumber",
  });

  const cardPeriod = useWatch({
    control,
    name: "cardPeriod",
  });

  const backSideTextValue = useWatch({
    control,
    name: "backSideText",
  });

  const backSideTextSize = useWatch({
    control,
    name: "backSideTextSize",
  });

  const backSideTextFont = useWatch({
    control,
    name: "backSideTextFont",
  });

  const selectedPicture = pictures.find((picture) => picture.name === designValue);
  const selectedColor = colors.find((color) => color.name === colorValue);
  const selectedNameFont = fonts.find((font) => font.id === nameFont);
  const selectedFrontSideTextFont = fonts.find((font) => font.id === frontSideTextFont);
  const selectedBackSideTextFont = fonts.find((font) => font.id === backSideTextFont);

  useEffect(() => {
    [selectedNameFont, selectedFrontSideTextFont, selectedBackSideTextFont].forEach((font) => {
      if (font?.src) loadFontFace(font.title, `/fonts/${font.src}`);
    });
  }, [selectedNameFont, selectedFrontSideTextFont, selectedBackSideTextFont]);

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
                {(activeAccordion === "design" ||
                  activeAccordion === "frontSide" ||
                  activeAccordion === null) && (
                  <div className={styles.resultWrapper}>
                    <Card
                      imgSrc={selectedPicture?.src}
                      imgAlt={selectedPicture?.alt}
                      imgWidth={506}
                      imgHeight={319}
                      size="big"
                      style={selectedColor?.style || "transparent"}
                    />
                    {resultMessage !== null && (
                      <div className={styles.resultMessage}>
                        <div className={styles.resultMessageIcon}>
                          <svg width="40" height="40" aria-hidden="true">
                            <use href="/sprite.svg#services"></use>
                          </svg>
                        </div>
                        <span className={styles.resultMessageText}>{resultMessage}</span>
                      </div>
                    )}
                    {nameValue.length > 0 && (
                      <div
                        className={styles.resultNameWrapper}
                        style={{ fontSize: nameSize + "px", fontFamily: selectedNameFont?.title }}
                      >
                        <span className={styles.resultName}>{nameValue}</span>
                      </div>
                    )}
                    {frontSideTextValue.length > 0 && (
                      <div
                        className={styles.resultFrontSideTextWrapper}
                        style={{
                          fontSize: frontSideTextSize + "px",
                          fontFamily: selectedFrontSideTextFont?.title,
                        }}
                      >
                        <span className={styles.resultText}>{frontSideTextValue}</span>
                      </div>
                    )}
                  </div>
                )}
                {activeAccordion === "backSide" && (
                  <div className={styles.resultWrapper}>
                    <CardBack
                      style={selectedColor?.style || "transparent"}
                      cardNumber={cardNumber}
                      cardPeriod={cardPeriod}
                    />
                    {backSideTextValue.length > 0 && (
                      <div
                        className={styles.resultBackSideTextWrapper}
                        style={{
                          fontSize: backSideTextSize + "px",
                          fontFamily: selectedBackSideTextFont?.title,
                        }}
                      >
                        <span className={styles.resultText}>{backSideTextValue}</span>
                      </div>
                    )}
                  </div>
                )}
              </div>
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
