import {
  toHumanReadable,
  invertObject,
  fillString,
  roundToPowerOf10,
} from "./util";
import { resistanceUnits, resistorColors } from "./constants";

export function resistanceToRings(resistance, ringsAmount = 5) {
  const rings = fillString(
    resistance
      .toString()
      .replace(".", "")
      .slice(0, ringsAmount - 2),
    "0",
    ringsAmount - 3,
    1
  )
    .split("")
    .map((r) => parseInt(r));

  return [...rings, roundToPowerOf10(resistance / parseInt(rings.join("")))];
}

export function resistanceToRingColors(resistance, tolerance, ringsAmount = 5) {
  const rings = resistanceToRings(resistance, ringsAmount);
  const colors = rings.map((c) => colorRingColors[c]);

  return [
    ...colors.slice(0, colors.length - 1),
    multiplierRingColors[rings[rings.length - 1]],
    toleranceRingsColors[tolerance],
  ];
}

export function resistanceToRingColorsHex(
  resistance,
  tolerance,
  ringsAmount = 5
) {
  const colors = resistanceToRingColors(resistance, tolerance, ringsAmount);
  return colors.map((color) => resistorColors[color]);
}

export function ringsToResistance(rings) {
  return [
    parseInt(rings.slice(0, rings.length - 2).join("")) *
      rings[rings.length - 2],
    parseInt(rings[rings.length - 1]),
  ];
}

export function colorRingsToResistance(rings) {
  const numRings = rings.map((ring) => colorRingColorsI[ring]);

  return ringsToResistance([
    ...numRings.slice(0, numRings.length - 2),
    multiplierRingColorsI[rings[rings.length - 2]],
    toleranceRingsColorsI[rings[rings.length - 1]],
  ]);
}

export function resistanceToHumanReadable(resistance, digits = 3) {
  return toHumanReadable(resistance, digits, resistanceUnits);
}

export const colorRingColors = {
  0: "black",
  1: "brown",
  2: "red",
  3: "orange",
  4: "yellow",
  5: "green",
  6: "blue",
  7: "purple",
  8: "gray",
  9: "white",
};

export const colorRingColorsI = invertObject(colorRingColors);

export const multiplierRingColors = {
  1: "black",
  10: "brown",
  100: "red",
  1000: "orange",
  10000: "yellow",
  100000: "green",
  1000000: "blue",
  0.1: "gold",
  0.01: "silver",
};

export const multiplierRingColorsI = invertObject(multiplierRingColors);

export const toleranceRingsColors = {
  1: "brown",
  2: "red",
  5: "gold",
  10: "silver",
};

export const toleranceRingsColorsI = invertObject(toleranceRingsColors);
