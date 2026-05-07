import { type Path } from "react-hook-form";

import { type FormValues } from "@/src/app/create-card/create-card/types";
import { type CreateCardFormValues } from "@/src/hooks/useCreateCardFormValues";

export function useCreateCardPaidOptions(formValues: CreateCardFormValues) {
  const {
    nfc,
    colorValue,
    designValue,
    designIndividualFrontSide,
    designIndividualBackSide,
    urgent,
    frontSideTextValue,
    backSideTextValue,
  } = formValues;

  return [
    nfc === "yes" ? "nfc" : null,
    colorValue !== "none" && colorValue !== undefined ? "color" : null,
    designValue !== "none" && designValue !== undefined ? "design" : null,
    designIndividualFrontSide?.length ? "frontSidePicture" : null,
    designIndividualBackSide?.length ? "backSidePicture" : null,
    urgent ? "urgent" : null,
    frontSideTextValue ? "frontSideText" : null,
    backSideTextValue ? "backSideText" : null,
  ].filter((item): item is Path<FormValues> => item !== null);
}
