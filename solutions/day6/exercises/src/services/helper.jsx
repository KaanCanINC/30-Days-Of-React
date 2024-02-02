export function isEven(num) {
  if (num === 2) {
    return false;
  } else if (num % 2 === 0) {
    return true;
  }
  return false;
}

export function isPrime(num) {
  if (num <= 1) {
    return false;
  } else if (num === 2) {
    return true;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
