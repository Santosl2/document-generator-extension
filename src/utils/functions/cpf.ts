function generateCPF(): string {
  const numbers = Array.from({ length: 9 }, () =>
    Math.floor(Math.random() * 10)
  );

  const digit1 = calculateDigit(numbers);
  numbers.push(digit1);

  const digit2 = calculateDigit(numbers);
  numbers.push(digit2);

  return numbers.join("");
}

function calculateDigit(numbers: number[]): number {
  const sum = numbers.reduce((acc, curr, index) => {
    return acc + curr * (numbers.length + 1 - index);
  }, 0);

  const remainder = sum % 11;
  return remainder < 2 ? 0 : 11 - remainder;
}
export { generateCPF };
