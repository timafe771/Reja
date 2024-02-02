// Module package CORE

//let number = 0;
//setInterval(function () {
//console.log("hisob", number);
//number++;
//}, 0);
/*
const fs = require("fs");
const { networkInterfaces } = require("os");
const data = fs.readFileSync("./input.txt", "utf8");
console.log(data);

console.log("******************");

fs.writeFileSync("./input.txt", `${data} \n\t\t by Timafe`);
const new_data = fs.readFileSync("./input.txt", "utf8");
console.log(new_data);
*/
// Module package EXTERNAL
/*
const moment = require("moment");

setInterval(() => {
  const time = moment().format();
  console.log(`hozirgi vaxt: ${time}`);
}, 5000);
*/
/*
const inquirer = require("inquirer");
inquirer
  .prompt([{ type: "input", name: "raqam", message: "raqamni kiriting? " }])
  .then((answer) => {
    console.log("man kiritgan raqam qiymati: ", answer.raqam);
  })
  .catch((err) => console.log(err));
*/
/*
const validator = require("validator");
//const test = validator.isEmail("foo@bar.com");
const test = validator.isIp("100");
console.log("test:", test);
*/
/*
const { v4: uuidv4 } = require("uuid");
const random = uuidv4();
console.log("random:", random);

const chalk = require("chalk");
const log = console.log;

log(chalk.blue("Hello") + random + chalk.red(" ! "));
log(chalk.yellow(`Hello my friend ${random}`));
*/
// Module package FILE
/*
const calculate = require("./hisob.js");

const natija = calculate.kopaytirish(80, 20);
console.log("Natija", natija);
console.log("************");

const natija2 = calculate.qoshish(70, 20);
console.log("Natija", natija2);

const natija3 = calculate.ayirish(80, 20);
console.log("Natija", natija3);
*/

//console.log(require("module").wrapper);

const Account = require("./account");
Account.tellMeAboutClass();
Account.tellMeTime();

console.log("***********");

const myAccount = new Account("Timur", 200000, 351514512246);
myAccount.giveMeDetails();

//myAccount.makeDeposit(1000000);

//myAccount.withdrawMoney(400000);
//myAccount.makeDeposit(200000);
