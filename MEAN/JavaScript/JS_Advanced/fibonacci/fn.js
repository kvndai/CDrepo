function fib(num) {
  let fibonacci01 = 0, fibonacci02 = 1, temp;
  function nacci() {
      while (num >= 0) {
          temp = fibonacci01;
          fibonacci01 = fibonacci01 + fibonacci02;
          fibonacci02 = temp;
          num --;
      }
      console.log(fibonacci02)
  }
  return nacci
}
var fibCounter = fib();
fibCounter(3);
