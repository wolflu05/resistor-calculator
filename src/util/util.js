export function round(x, dp) {
  return (
    Math.round(x * parseInt("1" + "0".repeat(dp))) /
    parseInt("1" + "0".repeat(dp))
  );
}

export function toHumanReadable(weight, dp, units) {
  let u = Math.ceil(weight.toString().split(".")[0].length / 3) - 1;
  if (u > units.length - 1) u = units.length - 1;
  const n = weight / parseInt(`1${"0".repeat(u * 3)}`);
  return `${dp === -1 ? n : round(n, dp)}${units[u]}`;
}

export function humanReadableToNumber(string, units) {
  const match = string.match(new RegExp(`([0-9|.]+)(${units.join("|")})`));
  if (match?.length !== 3) return null;

  return (
    parseFloat(match[1]) *
    parseInt(`1${"0".repeat((units.indexOf(match[2]) + 0) * 3)}`)
  );
}

export function invertObject(object) {
  return Object.entries(object).reduce((newObject, [key, value]) => {
    newObject[value] = key;
    return newObject;
  }, {});
}

export function fillString(string, fill, length, mode = 1) {
  while (string.length <= length) {
    if (mode === -1) string = fill + string;
    if (mode === 1) string += fill;
  }
  return string;
}

export function roundToPowerOf10(n) {
  const exponent = Math.ceil(Math.log10(n));
  const ceiled = 10 ** exponent;
  return n / ceiled > 0.5 ? ceiled : 10 ** (exponent - 1);
}
