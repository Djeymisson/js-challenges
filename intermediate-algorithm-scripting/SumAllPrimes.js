/* 

Sum All Primes
A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. For example, 2 is a prime number because it is only divisible by 1 and 2. In contrast, 4 is not prime since it is divisible by 1, 2 and 4.

Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.

Test cases: 
    sumPrimes(10) should return a number.

    sumPrimes(10) should return 17.

    sumPrimes(977) should return 73156.
    
*/

function sumPrimes(num) {
    let primes = [];

    for (let i = num; i > 1; i--) {
        if (isPrime(i)) primes.push(i);
    }

    return primes.reduce((p, c) => p + c, 0);
}

function isPrime(element) {
    let start = 2;
    while (start < element) if (element % start++ < 1) return false;
    return true;
}

sumPrimes(10);

