"use strict";
console.log("main.js file was loaded");

const mainArr = [2, 12.5, 33, -7.2, 28, 49, -17, 19.9, 42, -14.45, -10, 20];
console.log("mainArr ===", mainArr);
//grazinti nauja masyva pakelti masyvo narius kvadratu

let kvadratu = mainArr.map((sk) => {
  let skPakeltasKv = sk * sk;
  skPakeltasKv = Math.pow(sk, 2);
  skPakeltasKv = sk ** 2;
  // console.log("skPakeltasKv ===", skPakeltasKv);
  return skPakeltasKv;
});
kvadratu = mainArr.map((sk) => Math.pow(sk, 2));
console.log("kvadratu ===", kvadratu);

// Atrinkti tiktai lyginių skaičių masyvą
const lyginiai = mainArr.filter((sk) => sk % 2 === 0);
console.log("lyginiai ===", lyginiai);
let sk = 21;
console.log(sk % 2 === 0);

// Visas neigiamas vertes masyve padaryti teigiamomis
let onlyPositivesArr = mainArr.map((sk) => {
  //kiekviena reiksme kaip sk
  //tikrinti ar skaicius yra maziau uz 0
  // if (sk < 0) {
  //   let kint = sk * -1;
  //   return kint;
  // }
  // return sk;
  // sk < 0 ? return sk * -1 : return sk
  return sk < 0 ? sk * -1 : sk;
  // jei taip tai * -1
  //grazinti reiksme kad griztu i onlyPositivesArr
});
onlyPositivesArr = mainArr.map((sk) => (sk < 0 ? sk * -1 : sk));
//visiems is eiles pritaikome taisykle Math.abs
onlyPositivesArr = mainArr.map((sk) => Math.abs(sk));
console.log("onlyPositivesArr ===", onlyPositivesArr);

// Atrinkti kas penktą elementą
//panaudoti filtra
//viduje tikrinam ar indexas yra 5 kartotinis(inx % 5 === 0)
//jei yra tai atrenkam
//jei ne praleidziam

const atrinktiKasPenkta = mainArr.filter((sk, index) => index % 5 === 0);

console.log(atrinktiKasPenkta);
