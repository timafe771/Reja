// console.log("Jack Ma maslahatlari");
// const list = [
//   "Yaxshi talaba boling", // 0-20
//   "togri boshliq tanlang va ko'proq xato qiling", // 20-30
//   "uzingizni ishlaringizni boshlang", //30-40
//   "siz kuchli bolgan narsalarni qiling", // 40-50
//   "yoshlarga investitsiya qiling", //50-60
//   "orqaga chekinmang", // 60-70~~~*/
// ];
// 21 - dars
/*
function maslahatlarBering(a, callback) {
  if (typeof a !== "number") callback("Insert a number", null);
  else if (a <= 20) callback(null, list[0]);
  else if (a > 20 && a <= 30) callback(null, list[1]);
  else if (a > 30 && a <= 40) callback(null, list[2]);
  else if (a > 40 && a <= 50) callback(null, list[3]);
  else if (a > 50 && a <= 60) callback(null, list[4]);
  else {
    setInterval(function () {
      callback(null, list[5]);
    }, 5000);
  }
}

console.log("passed here 0");
maslahatlarBering(65, (err, data) => {
  if (err) console.log("ERROR:", err);
  else {
    console.log("javob:", data);
  }
});
console.log("passed here 1");
*/

// 22 - dars
// CALLBACK function
// function maslahatlarBering(a, callback) {
//   if (typeof a !== "number") callback("Insert a number", null);
//   else if (a <= 20) callback(null, list[0]);
//   else if (a > 20 && a <= 30) callback(null, list[1]);
//   else if (a > 30 && a <= 40) callback(null, list[2]);
//   else if (a > 40 && a <= 50) callback(null, list[3]);
//   else if (a > 50 && a <= 60) callback(null, list[4]);
//   else {
//     setInterval(function () {
//       callback(null, list[5]);
//     }, 1000);
//   }
// }

// console.log("passed here 0");
// maslahatlarBering(65, (err, data) => {
//   if (err) console.log("ERROR:", err);
//   else {
//     console.log("javob:", data);
//   }
// });
// console.log("passed here 1");

// ASYNC function
// async function maslahatlarBering(a) {
//   if (typeof a !== "number") throw new Error("insert a number");
//   else if (a <= 20) return list[0];
//   else if (a > 20 && a <= 30) return list[1];
//   else if (a > 30 && a <= 40) return list[2];
//   else if (a > 40 && a <= 50) return list[3];
//   else if (a > 50 && a <= 60) return list[4];
//   else {
//     return new Promise((resolve, reject) => {
//       setInterval(() => {
//         resolve(list[5]);
//       }, 1000);
//     });
//   }
// }
// maslahatlarBering(31, (err, data) => {
//   if (err) console.log("ERROR:", err);
//   console.log("javob:", data);
// });
// console.log("passed here 1");

// call viathen/ catch
/*
console.log("passed here 0");
maslahatlarBering(65)
  .then((data) => {
    console.log("javob", data);
  })
  .catch((err) => {
    console.log("ERROR:", err);
  });
console.log("passed here 1");*/

// call async / await
// async function run() {
//   let javob = await maslahatlarBering(65);
//   console.log(javob);
//   javob = await maslahatlarBering(70);
//   console.log(javob);
//   javob = await maslahatlarBering(41);
//   console.log(javob);
// }
// run();

// let countLetter = 0;
// setInterval(function () {
//   count++;
//   console.log(count);
// });

// A task
// function countLetter(letter, loop) {
//   let count = 0;
//   for (let i = 0; i < loop.length; i++) {
//     if (loop[i] === letter) {
//       count++;
//     }
//   }
//   return count;
// }

// let result = countLetter("e", "engineer");
// console.log(result);

// B Task

function kattaMisol(str) {
  const misolKatta = str.match(/\d/g);
  return misolKatta ? misolKatta.length : 0;
}

console.log(kattaMisol("ad2a54y79wet0sfgb9"));
