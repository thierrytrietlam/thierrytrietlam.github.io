// Natural pixel dimensions of every raster logo, so each <img> can declare
// width and height (no layout shift, no guessing). CSS still controls the
// rendered size. Measured from the files in public/img/logos/.
export const logoDims: Record<string, { w: number; h: number }> = {
  "/img/logos/colonies.jpg": { w: 200, h: 78 },
  "/img/logos/connecty-ai.jpg": { w: 833, h: 200 },
  "/img/logos/kering.jpg": { w: 591, h: 200 },
  "/img/logos/accenture.jpg": { w: 356, h: 200 },
  "/img/logos/jaguar-land-rover.jpg": { w: 225, h: 200 },
  "/img/logos/veepee.jpg": { w: 469, h: 136 },
  "/img/logos/dassault-systemes.jpg": { w: 654, h: 200 },
  "/img/logos/isae-ensma.jpg": { w: 313, h: 200 },
  "/img/logos/hcmut.jpg": { w: 198, h: 200 },
};

export function logoSize(path?: string): { w: number; h: number } | undefined {
  return path ? logoDims[path] : undefined;
}
