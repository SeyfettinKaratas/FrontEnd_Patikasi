// let ve const ile değişken tanımlama

// var ile değişken tanımlama
var serverName="kodluyoruz.org"
console.log(serverName)

//let ile değişkeni boş tanımlamak
let serverNamee;
console.log(serverNamee)

//let ile değişkene bilgi atamak
serverNamee="https://kodluyoruz.com"
console.log(serverNamee)

//let ile değişkene bilgi atayarak tanımlamak
let password="1234";
console.log(password)

//değişken ataması yapmadan önce kullanmaya çalışmak
//console.log(fullName) *****Hatalı Kullanım*******
let fullName="Seyfettin Karataş"
console.log(fullName)

//let ile tanımlanan değişken bilgisini değişmek
fullName="lorem ipsum dolor sit."
console.log(fullName)

//let ile tanımlanan eğişkene ekleme yapmak
fullName+" yeni yazı ekledim."
console.log(fullName)// bilgi eklenmedi çünkü yeniden set edilmedi

console.log(fullName+" test bilgisi ekle ve göster")

fullName=fullName+" yeni bilgi"
console.log(fullName)
fullName+=" eklendi"
console.log(fullName)

//const ile değişkeni boş atamaya çalışmak
//const serverPassword; //değişken taımlandı ama içi boş

//const ile değişken tanımlamak
const SERVER_PASSWORD="osisisıd1234df"
console.log(SERVER_PASSWORD)

//string ifadeyi int e atama
let stringNumber="11"
let newNumber=Number(stringNumber)//number constructer

//isInteger( ) yöntemi, sayıların tam sayı olup olmadığını belirler.
Number.isInteger(123) //true
Number.isInteger(-123) //true
Number.isInteger(0.5) //false
//isFinite () yöntemi, bir değerin sonlu bir sayı olup olmadığını belirler.
Number.isFinite(0) //true
Number.isFinite('123') //false
Number.isFinite('Hello') //false
Number.isFinite(-Infinity) //false
Number.isFinite(0 / 0) //false
// Number.isNaN () yöntemi, bir değerin NaN (Not-A-Number) olup olmadığını belirler.

Number.isNaN(123) //false
Number.isNaN(0) //false
Number.isNaN('123') //false
Number.isNaN('Hello') //false
Number.isNaN('') //false
Number.isNaN(true) //false
Number.isNaN(undefined) //false
Number.isNaN('NaN') //false
Number.isNaN(NaN) //true

console.log(typeof 42);
// beklenen output: "number"

console.log(typeof 'kodluyoruz');
//beklenen output: "string"

console.log(typeof true);
// beklenen output: "boolean"

console.log(typeof Variable);
// beklenen output: "undefined"

String(123) // “123” explicit
123 + '' // “123”    implicit

String(123) // “123”
String(-12.3) // “-12.3”
String(null) // “null”
String(undefined) // “undefined”
String(true) // “true”
String(false) // “false”

String(Symbol('my symbol')) // 'Symbol(my symbol)'
'' + Symbol('my symbol') // TypeError is thrown

Boolean({}) // true
Boolean([]) // true
Boolean(Symbol()) // true
!!Symbol() // true
Boolean(function() {}) // true

Boolean('') // false
Boolean(0) // false 
Boolean(-0) // false
Boolean(NaN) // false
Boolean(null) // false
Boolean(undefined) // false
Boolean(false) // false

// veya “||” operatörü ilk bulduğu true değeri döner
var a= 2 || s || 4 || 5; // 2
// eğer true dönecek değer bulamazsa en son buluğu false değeri döndürür
var b=0 || ”” || false || -0 || 0 // 0
var c= 0 ||  “”  ||  “ 123 ” || 4 ; // ”123” dolu string true dönecektir
// ve ”&&” operatörü ilk bulduğu false değeri döner.
var d=2 && 3 && 0 && 5 && 7; // 0
// eğer false dönecek değer bulamazsa en son buluğu true değeri döndürür
var e= 2 && 3 && 5 && 7 // 7

let ad= `Aycan`;
let soyad= `Yerdelen`;

//Eski kullanım
console.log("Benim adım "+ad+" "+ soyad);

//Yeni kullanım
console.log(`Benim adım ${ad} ${soyad}`);

//Değişkenlerimizi tanımlayalım
const ad =`Aycan`
const soyad =`Yerdelen`
const gozRengi =`Kahverengi`
const yas =21
const kisi = "<p>"+ad+"</p>"+
              "<p>"+soyad+"</p>"+
              "<p>"+gozRengi+"</p>"+
              "<p>"+yas+"</p>"

document.body.innerHTML = kisi;
const kisi = `
<p>${ad}</>
<p>${soyad}</>
<p>${gozRengi}</>
<p>${yas}</>
`;

document.body.innerHTML = kisi;