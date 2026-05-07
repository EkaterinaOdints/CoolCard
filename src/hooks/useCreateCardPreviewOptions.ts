import { colors, fonts, pictures } from "@/src/data/data";
import { type CreateCardFormValues } from "@/src/hooks/useCreateCardFormValues";

export function useCreateCardPreviewOptions(formValues: CreateCardFormValues) {
  const { colorValue, designValue, nameFont, frontSideTextFont, backSideTextFont } = formValues;

  const selectedPicture = pictures.find((picture) => picture.name === designValue);
  const selectedColor = colors.find((color) => color.name === colorValue);
  const selectedNameFont = fonts.find((font) => font.id === nameFont);
  const selectedFrontSideTextFont = fonts.find((font) => font.id === frontSideTextFont);
  const selectedBackSideTextFont = fonts.find((font) => font.id === backSideTextFont);

  return {
    selectedPicture,
    selectedColor,
    selectedNameFont,
    selectedFrontSideTextFont,
    selectedBackSideTextFont,
  };
}

export type CreateCardPreviewOptions = ReturnType<typeof useCreateCardPreviewOptions>;
