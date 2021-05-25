export function numberFormat(string) {
  if (string.length === 5) {
    var fiveDigits = [string.slice(0, 3), ",", string.slice(3)].join("");
    return fiveDigits;
  }
  if (string.length === 4) {
    var fourDigits = [string.slice(0, 2), ",", string.slice(2)].join("");
    return fourDigits;
  }
}
