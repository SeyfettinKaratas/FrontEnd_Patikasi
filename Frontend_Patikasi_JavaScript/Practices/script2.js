// let title=document.getElementsByTagName('h2')
// console.log(title)

let title=document.getElementById('title')
title.innerHTML="değişen bilgi"
console.log(title.innerHTML)

let link=document.querySelector("ul#list>li>a")
link.innerHTML="değiştirilen bilgi"

let fullName=prompt("lütfen adınızı giriniz", )

let greeting=document.querySelector("#greeting")
greeting.innerHTML=`${greeting.innerHTML} <small style="coloor:red"2555555555555555555555555555555553>${fullName}</small>`
