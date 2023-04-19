function sumPrimes(num) {
    let sum = 0;
    for (let i = 2; i <= num; i++) {
      let isPrime = true;
      for (let j = 2; j <= Math.sqrt(i); j++) {
        if (i % j === 0) {
          isPrime = false;
          break;
        }
      }
      if (isPrime) {
        sum += i;
      }
    }
    return sum;
  }
  
  sumPrimes(10); // Returns 17