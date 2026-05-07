import styles from "./styles.module.css";

import Card from "@/src/components/ui/card/Card";
import CardBack from "@/src/components/ui/card-back/CardBack";

import { type CreateCardFormValues } from "@/src/hooks/useCreateCardFormValues";
import { type CreateCardPreviewOptions } from "@/src/hooks/useCreateCardPreviewOptions";

interface Props {
  currentTheme?: string | null;
  resultMessage?: string | null;
  formValues: CreateCardFormValues;
  previewOptions: CreateCardPreviewOptions;
}

export default function ResultPreview(props: Props) {
  const { currentTheme, resultMessage, formValues, previewOptions } = props;

  const {
    nameValue,
    nameSize,
    frontSideTextValue,
    frontSideTextSize,
    cardNumber,
    cardPeriod,
    backSideTextValue,
    backSideTextSize,
  } = formValues;

  const {
    selectedPicture,
    selectedColor,
    selectedNameFont,
    selectedFrontSideTextFont,
    selectedBackSideTextFont,
  } = previewOptions;

  return (
    <>
      {(currentTheme === "design" || currentTheme === "frontSide" || currentTheme === null) && (
        <div className={styles.root}>
          <Card
            imgSrc={selectedPicture?.src}
            imgAlt={selectedPicture?.alt}
            imgWidth={506}
            imgHeight={319}
            size="big"
            style={selectedColor?.style || "transparent"}
          />
          {resultMessage !== null && (
            <div className={styles.message}>
              <div className={styles.messageIcon}>
                <svg width="40" height="40" aria-hidden="true">
                  <use href="/sprite.svg#services"></use>
                </svg>
              </div>
              <span className={styles.messageText}>{resultMessage}</span>
            </div>
          )}
          {nameValue.length > 0 && (
            <div
              className={styles.nameWrapper}
              style={{ fontSize: nameSize + "px", fontFamily: selectedNameFont?.title }}
            >
              <span className={styles.name}>{nameValue}</span>
            </div>
          )}
          {frontSideTextValue.length > 0 && (
            <div
              className={styles.frontSideTextWrapper}
              style={{
                fontSize: frontSideTextSize + "px",
                fontFamily: selectedFrontSideTextFont?.title,
              }}
            >
              <span className={styles.text}>{frontSideTextValue}</span>
            </div>
          )}
        </div>
      )}
      {currentTheme === "backSide" && (
        <div className={styles.root}>
          <CardBack
            style={selectedColor?.style || "transparent"}
            cardNumber={cardNumber}
            cardPeriod={cardPeriod}
          />
          {backSideTextValue.length > 0 && (
            <div
              className={styles.backSideTextWrapper}
              style={{
                fontSize: backSideTextSize + "px",
                fontFamily: selectedBackSideTextFont?.title,
              }}
            >
              <span className={styles.text}>{backSideTextValue}</span>
            </div>
          )}
        </div>
      )}
    </>
  );
}
