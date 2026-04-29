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
import DesignContentFieldset from "@/src/components/shared/design-content-fieldset/DesignContentFieldset";
import FrontSideContentFieldset from "@/src/components/shared/front-side-content-fieldset/FrontSideContentFieldset";

import { colors, pictures, fonts } from "@/src/data/data";
import { loadFontFace } from "@/src/utils/fonts";

type ActiveAccordion = "design" | "frontSide" | null;

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
      text: "",
      textSize: 20,
      textFont: undefined,
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

  const textValue = useWatch({
    control,
    name: "text",
  });

  const textSize = useWatch({
    control,
    name: "textSize",
  });

  const textFont = useWatch({
    control,
    name: "textFont",
  });

  const selectedPicture = pictures.find((picture) => picture.name === designValue);
  const selectedColor = colors.find((color) => color.name === colorValue);
  const selectedNameFont = fonts.find((font) => font.id === nameFont);
  const selectedTextFont = fonts.find((font) => font.id === textFont);

  useEffect(() => {
    [selectedNameFont, selectedTextFont].forEach((font) => {
      if (font?.src) loadFontFace(font.title, `/fonts/${font.src}`);
    });
  }, [selectedNameFont, selectedTextFont]);

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
                    <DesignContentFieldset
                      register={register}
                      unregister={unregister}
                      setValue={setValue}
                      control={control}
                      errors={errors}
                      setIsDesignSubmitAllowed={setIsDesignSubmitAllowed}
                      setResultMessage={setResultMessage}
                    />
                  }
                />
                <Accordion
                  type="form"
                  title="Лицевая сторона"
                  isActive={activeAccordion === "frontSide"}
                  onToggle={() =>
                    setActiveAccordion((current) => (current === "frontSide" ? null : "frontSide"))
                  }
                  content={<FrontSideContentFieldset control={control} errors={errors} />}
                />
              </div>
              <div className={styles.result}>
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
                  {
                    <div
                      className={styles.resultTextWrapper}
                      style={{ fontSize: textSize + "px", fontFamily: selectedTextFont?.title }}
                    >
                      <span className={styles.resultText}>{textValue}</span>
                    </div>
                  }
                </div>
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
