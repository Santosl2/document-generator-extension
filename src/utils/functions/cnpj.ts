function generateCNPJ(): string {
  const digits = Array.from({ length: 8 }, () => randomize(9));
  const [n1, n2, n3, n4, n5, n6, n7, n8] = digits;

  // Calculate first verification digit
  let sum =
    2 + 6 * n8 + 7 * n7 + 8 * n6 + 9 * n5 + 2 * n4 + 3 * n3 + 4 * n2 + 5 * n1;

  let firstDigit = 11 - mod(sum, 11);
  firstDigit = firstDigit >= 10 ? 0 : firstDigit;

  // Calculate second verification digit
  sum =
    2 * firstDigit +
    3 +
    7 * n8 +
    8 * n7 +
    9 * n6 +
    2 * n5 +
    3 * n4 +
    4 * n3 +
    5 * n2 +
    6 * n1;

  let secondDigit = 11 - mod(sum, 11);
  secondDigit = secondDigit >= 10 ? 0 : secondDigit;

  // Format CNPJ string
  return `${n1}${n2}${n3}${n4}${n5}${n6}${n7}${n8}0001${firstDigit}${secondDigit}`;
}

function randomize(max: number): number {
  return Math.round(Math.random() * max);
}

function mod(dividend: number, divisor: number): number {
  return Math.round(dividend - Math.floor(dividend / divisor) * divisor);
}

export { generateCNPJ };
