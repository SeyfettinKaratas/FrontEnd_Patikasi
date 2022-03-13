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