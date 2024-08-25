// VVI Question
// asked in microsoft
// https://www.youtube.com/watch?v=eUiLzMPRamM
let val = 2;
function LuckyNumber(n) {
  if (n < val) return true;
  if (n % val == 0) return false;
  n = n - Math.floor(n / val);
  val++;
  return LuckyNumber(n);
}

console.log(LuckyNumber(3));
val = 2;
console.log(LuckyNumber(19));
val = 2;
console.log(LuckyNumber(85));
// we are setting value of val as it is global variable
