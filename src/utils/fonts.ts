"use client";

const loadedAdditionalFonts = new Set<string>();

async function loadFontFace(fontFamily: string, src: string) {
  if (loadedAdditionalFonts.has(fontFamily)) return;

  const fontFace = new FontFace(fontFamily, `url(${src})`);
  await fontFace.load();

  document.fonts.add(fontFace);
  loadedAdditionalFonts.add(fontFamily);
}

export { loadedAdditionalFonts, loadFontFace };
