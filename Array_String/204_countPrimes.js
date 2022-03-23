/**
 * @param {number} n
 * @return {number}
 */

// const countPrimes = (n) => {
//     if (n <= 2) return 0;

//     let count = 1;

//     for (let i = 3; i < n; i+=2) {
//         if (isPrime(i)) {
//             count++;
//         }
//     }

//     return count;
// };

// const isPrime = (num) => {

//     // start from 3 if num % i is 0 then not prime
//     // increase by 2 because all even number not prime
//     for (let i = 3; i <= Math.sqrt(num); i+=2) {
//         if (num % i === 0) return false;
//     }
//     return true;
// }

const countPrimes = (n) => {
    // array of num as true of Prime
    const isPrime = new Array(n).fill(true);

    // 0 and 1 not prime so false
    isPrime[0] = isPrime[1] = false;

    // go thru the isPrime we would start from 2
    // as 2 * 2 is 4 (first of non prime)
    for (let i = 2; i * i < n; i++) {
        // as 4 += i as 6
        // 4 6 8 less than 10 and non prime
        for (let j = i * i; j < n; j += i) {
            isPrime[j] = false;
        }
    }
    // return the length of true prime number
    return isPrime.filter((num) => num === true).length

    // return isPrime.map((ele, i) => ele ? i : 0).reduce((a, b) => a + b) for prime number total

}