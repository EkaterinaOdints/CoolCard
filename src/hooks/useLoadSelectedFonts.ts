import { useEffect } from "react";

import { type Font } from "@/src/data/data";
import { loadFontFace } from "@/src/utils/fonts";

export function useLoadSelectedFonts(fonts: Array<Font | undefined>) {
  const [nameFont, frontSideTextFont, backSideTextFont] = fonts;

  useEffect(() => {
    [nameFont, frontSideTextFont, backSideTextFont].forEach((font) => {
      if (font?.src) loadFontFace(font.title, `/fonts/${font.src}`);
    });
  }, [nameFont, frontSideTextFont, backSideTextFont]);
}
