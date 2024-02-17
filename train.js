// B Task

// function kattaMisol(str) {
//   const misolKatta = str.match(/\d/g);
//   return misolKatta ? misolKatta.length : 0;
// }

// console.log(kattaMisol("ad2a54y79wet0sfgb9"));

/*D-TASK: 

Shunday class tuzing tuzing nomi Shop, va uni constructoriga 3 hil mahsulot pass bolsin, hamda classning 3ta methodi bolsin, biri qoldiq, biri sotish va biri qabul. Har bir method ishga tushgan vaqt ham log qilinsin.
MASALAN: const shop = new Shop(4, 5, 2); shop.qoldiq() return hozir 20:40da 4ta non, 5ta lagmon va 2ta cola mavjud! shop.sotish('non', 3) & shop.qabul('cola', 4) & shop.qoldiq() return hozir 20:50da 1ta non, 5ta lagmon va 6ta cola mavjud!

@MITASK
*/

// class Shop {
//   constructor(non, lagmon, cola) {
//     this.non = non;
//     this.lagmon = lagmon;
//     this.cola = cola;
//   }

//   qoldiq() {
//     const now = new Date();
//     const hour = now.getHours();
//     const minute = now.getMinutes();
//     return `hozir ${hour}:${minute}da ${this.nonlar}ta non, ${this.lagmonlar}ta lag'mon va ${this.cola}ta cola mavjud!`;
//   }

//   sotish(mahsulot, miqdor) {
//     this[mahsulot + "lar"] -= miqdor;
//     const now = new Date();
//     const hour = now.getHours();
//     const minute = now.getMinutes();
//     return `hozir ${hour}:${minute}da ${miqdor}ta ${mahsulot} sotildi!`;
//   }

//   qabul(mahsulot, miqdor) {
//     this[mahsulot + "lar"] += miqdor;
//     const now = new Date();
//     const hour = now.getHours();
//     const minute = now.getMinutes();
//     return `hozir ${hour}:${minute}da ${miqdor}ta ${mahsulot} qabul qilindi!`;
//   }
// }

// const shop = new Shop(4, 5, 2);
// console.log(shop.qoldiq());
// console.log(shop.sotish("non", 3));
// console.log(shop.qabul("cola", 4));
// console.log(shop.qoldiq());

/*D-TASK: 

Shunday function tuzing, u 2ta string parametr ega bolsin, hamda agar har ikkala string bir hil harflardan iborat bolsa true aks holda false qaytarsin
MASALAN checkContent("mitgroup", "gmtiprou") return qiladi true*/

// const list = ["kmitgroup", "gmtiprou"];

// const rusult = list.includes("kmitgroup", "gmtiprou");
// console.log("result:", rusult);

//*D-TASK:
function soliution(harf, harf2) {
  const a = harf.split("").sort().join("");
  const b = harf2.split("").sort().join("");

  return a == b;
}

const natija = soliution("mitgroup", "gmtiprou");
console.log(natija);
