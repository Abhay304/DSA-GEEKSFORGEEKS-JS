// VVI Question
// asked in microsoft
// https://www.youtube.com/watch?v=eUiLzMPRamM

function LuckyNumber(n) {
  if (n < val) return true;
  if (n % val == 0) return false;
  n = n - Math.floor(n / val);
  val++;
  return LuckyNumber(n);
}
let val = 2;
console.log(LuckyNumber(5));
val = 2;
console.log(LuckyNumber(19));
val = 2;
console.log(LuckyNumber(85));
// we are setting value of val as it is global variable
