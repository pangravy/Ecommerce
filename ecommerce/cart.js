let a=document.getElementById("random");
// if (!a)
// console.warn(a.innerText)
let total = JSON.parse(localStorage.getItem('total'));
let content=document.createElement('div');

console.log(typeof(total.price.toString()));
content.innerText=`Your Total Cart Value is $${total.price.toString()}`;
console.log(content.innerHTML)
a.style.color = 'red';
a.appendChild(content);
