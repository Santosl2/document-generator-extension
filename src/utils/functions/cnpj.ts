function generateCNPJ(): string {
  const numbers = Array.from({ length: 12 }, () =>
    Math.floor(Math.random() * 10)
  );

  const digit1 = calculateCNPJDigit(numbers);
  numbers.push(digit1);

  const digit2 = calculateCNPJDigit(numbers);
  numbers.push(digit2);

  return numbers.join("");
}

function calculateCNPJDigit(numbers: number[]): number {
  const multipliers = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i] * (multipliers[i] || multipliers[i - 12]);
  }

  const remainder = sum % 11;
  return remainder < 2 ? 0 : 11 - remainder;
}
export { generateCNPJ };
