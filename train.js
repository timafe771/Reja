/*F-TASK: 

Shunday findDoublers function tuzing, unga faqat bitta string argument pass bolib, agar stringda bir hil harf qatnashgan bolsa true, qatnashmasa false qaytarishi kerak.
MASALAN: getReverse("hello") return true return qiladi
*/
function findDoublers(inputString) {
  const seen = {};
  inputString = inputString.toLowerCase();
  for (let char of inputString) {
    if (seen[char]) {
      return true;
    }
    seen[char] = true;
  }
  return false;
}
console.log(findDoublers("hello"));
