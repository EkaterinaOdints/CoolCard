import { useWatch, type Control } from "react-hook-form";
import { type FormValues } from "@/src/app/create-card/create-card/types";

export function useCreateCardFormValues(control: Control<FormValues>) {
  const nfc = useWatch({
    control,
    name: "nfc",
  });

  const colorValue = useWatch({
    control,
    name: "color",
  });

  const designValue = useWatch({
    control,
    name: "design",
  });

  const designIndividualFrontSide = useWatch({
    control,
    name: "frontSidePicture",
  });

  const designIndividualBackSide = useWatch({
    control,
    name: "backSidePicture",
  });

  const urgent = useWatch({
    control,
    name: "urgent",
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

  return {
    nfc,
    colorValue,
    designValue,
    designIndividualFrontSide,
    designIndividualBackSide,
    urgent,
    nameValue,
    nameSize,
    nameFont,
    frontSideTextValue,
    frontSideTextSize,
    frontSideTextFont,
    cardNumber,
    cardPeriod,
    backSideTextValue,
    backSideTextSize,
    backSideTextFont,
  };
}

export type CreateCardFormValues = ReturnType<typeof useCreateCardFormValues>;
