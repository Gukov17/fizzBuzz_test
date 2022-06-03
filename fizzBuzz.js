const fizzBuzz = (begin, end) => {
   if (begin > end) {
      return false;
   }
   for (i = begin; i <= end; i += 1) {
      if (i % 5 === 0 && i % 3 === 0) {
         console.log('FizzBuzz');
      } else if (i % 5 === 0) {
         console.log('Buzz');
      } else if (i % 3 === 0) {
         console.log('Fizz');
      }
      else {
         console.log(i);
      }
   }
};

fizzBuzz(20, 10);