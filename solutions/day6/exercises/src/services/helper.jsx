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

export function hexColorGenerator(cardCount, colorArray) {
    const str = "0123456789abcdef";
    for (let i = 0; i < cardCount; i++) {
      let color = "#";
      for (let j = 0; j < 6; j++) {
        let index = Math.floor(Math.random() * str.length);
        color += str[index];
      }

      colorArray.push(color);
    }

    return colorArray;
  };

