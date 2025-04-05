function generateRG(): string {
  const numbers = Array.from({ length: 8 }, () =>
    Math.floor(Math.random() * 10)
  );

  const digit = calculateRGDigit(numbers);
  numbers.push(digit as number);

  return numbers.join("");
}

function calculateRGDigit(numbers: number[]): number | string {
  const sum = numbers.reduce((acc, curr, index) => {
    return acc + curr * (9 - index);
  }, 0);

  const remainder = sum % 11;
  return remainder === 10 ? "X" : remainder;
}
export { generateRG };
