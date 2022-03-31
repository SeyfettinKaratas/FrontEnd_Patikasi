let userName=prompt("Lütfen Kullanıcı Adı Giriniz");

let item=document.querySelector("#myName");
item.innerHTML=userName


var date=new Date();
var hour=date.getHours();
var minute=date.getMinutes();
var second=date.getSeconds();
var day=date.getUTCDay();

let days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"]

let clock = document.querySelector('#myClock')

hour = (hour < 10) ? "0" + hour : hour
minute = (minute < 10) ? "0" + minute : minute
second = (second < 10) ? "0" + second : second

clock.innerHTML = `${hour}:${minute}:${second} ${days[day]}`