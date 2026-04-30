// versi JS
const message = "Hello";

//versi TS
const message2: string = "Hello";

// ========STRING BUILT IN METHOD==========
// adalah sebuah fungsi yang uda disediakan javascript tinggal pake 
const name: string = "BuBdi";
const name2: string = "Ucok";

console.log(name.toLowerCase());
console.log(name.toUpperCase());
console.log(name.replace("B", "P"));
console.log(name.replaceAll("B", "P"));

console.log(name.concat(name2));

console.log(name.concat(" ").concat(name2));
console.log(name.concat(" ").concat(name2));
console.log(name.slice(0,3)); 
console.log(name.slice(1));
console.log(name.slice(1, 4));
console.log(name.split(""));
console.log(name.split(" "));

//=======TEMPLATE LITERALS / TEMPLATE STRING =================
const welcome: string = "Welcome";
const name3: string = "Joko";

console.log(welcome + " " + name3);
console.log (`${welcome}, ${name3}`);
// sama dengan pakai concat tinggal pilih aja ( untuk menggabungkan )

//=======NUMBER BUILT IN METHOD =================
const angka: string ="4000";
console.log(Number(angka));
console.log(parseInt(angka));
// sama aja antara number sama parseInt

//=======String CONVERSION =================
const angka2: number = 5000;
console.log(String(angka2));
console.log(angka2.toString());

//=======BOOLEAN CONVERSION =================
console.log(Boolean(1));
console.log(Boolean(0));
console.log(Boolean(-1));
console.log(Boolean("Budi"));
console.log(Boolean(""));
// yang penting string ny ada isiny mau isi apapun pasti jawabannya true...sperti no 51 ga ada isiny baru false

//=======DATE=================
const now = new Date();
console.log(now);
console.log(now.getFullYear());
console.log(now.getMonth() + 1);
console.log(now.getDate());

//======= BASIC OPERATOR =================
/*
+ -> pertambahan
- -> pengurangan
* -> perkalian
/ -> pembagian
% -> modulo ( sisa bagi)
** -> pangkat
*/

console.log(1 + 1);
console.log(2 - 1);
console.log(9 % 2);
// modulo untuk mencari ganjil genap
console.log(100 % 2);
console.log(3 ** 2);

//========= MODIFY IN PLACE ==========
let n: number = 4;
n = n + 4
console.log(n);
// cara singkat
n += 4;


// n = n + 4

//========= INCREMENT & DECREMENT ==========
let counter: number = 1;
counter++; // increment
counter--; // decrement

console.log(counter);

//========= COMPARISON OPERATOR ==========
/*
==
===
<
>
<=
>=
hasilnya adalah boolean
*/

// console.log(2 == "2");
// console.log(2 === "2")
// kl === lebih strik atau teliti, kenapa bisa false karena tipe datany beda, yg 1 number, yg 1 string
// akan selalu kepake comparison operator 
console.log(2 < 5);
console.log(2 > 5);

//========MATH=======
// Math ceil -> membulatkan angka ke atas, kalau koma pakainy titik
// Math Floor -> membulatkan angka ke bawah
// Math round -> membulatkan angka ke bilangan bulat terdekat
// Math max -> mengembalikan angka terbesar dari sekumpulan angka
// Math min -> mengembalikan angka terkecil dari sekumpulan angka
// Math abs -> menghilangkan tanda negatif
// Math random -> menghasilkan angka acak antara 0 dan 1

console.log(4.2);
console.log(Math.ceil(4.2));
console.log(Math.floor(5.3));
console.log(Math.round(4.7));
console.log(Math.round(4.3));
console.log(Math.max(1, 10, 24, 1000));
console.log(Math.min(20, 30, 100, 50));
console.log(Math.abs(-30));
console.log(Math.random());

