const userData = JSON.parse(localStorage.getItem('cart'));
console.log(userData);
window.onload = (event) => {
    let sum = 0;
    Object.keys(userData).forEach((key) => {
        sum += parseFloat(userData[key].price);
    })
    let total = {
        price: sum
    };
    localStorage.setItem('total', JSON.stringify(total));
    console.log(total);
    if (sum < 5) {
        let total = {
            price: 0
        };
        localStorage.setItem('total', JSON.stringify(total));
    }
};
let cartSection = document.getElementById("Cart-Section");
var total = JSON.parse(localStorage.getItem('total'));
var sum = parseFloat((total.price));

    Object.keys(userData).forEach((key) => {

        let products = document.createElement('div');
        // console.log(a);
        const img = document.createElement('img');
        img.src = userData[key].image;
        img.style.width = "32vh";
        img.style.height = "32vh";
        img.style.margin = "auto auto";
        const p = document.createElement('p');
        p.innerHTML = userData[key].title;
        // p.style.height="10vh";
        const p2 = document.createElement('p');
        // p2.innerHTML=userData[key].desc;
        // p2.style.height="15vh";
        // p2.style.fontSize="11px";
        const button = document.createElement('div');
        button.style.border="1px solid black";
        const add = document.createElement('button');
        const minus = document.createElement('button');
        const p3 = document.createElement('p');
        add.style.padding = "3% 3%";
        add.innerHTML = "+";
        p3.style.padding = "4% 3%";
        p
        p3.innerHTML = "1";
        minus.style.padding = "3.5% 3.5%";
        minus.onclick = function () { minusfunc() };
        minus.innerHTML = "-";
        function minusfunc() {
            var a = p3.innerHTML;
            if (a === '1') {
                products.remove();
                localStorage.removeItem(userData[key]);
            } else {
                p3.innerHTML = parseInt(a) - 1;
            }
            calc2();


            

        }
        add.onclick = function () { addfunc() };
        function addfunc() {
            var a = p3.innerHTML;
            p3.innerHTML = parseInt(a) + 1;
            calc();
        }
        calc();
        button.style.width = "6vh";
        button.style.height = "52%";
        button.appendChild(minus);
        button.appendChild(p3);
        button.appendChild(add);
        button.style.display = "flex";
        button.style.flexDirection = "row";

        const price = document.createElement('p');
        price.innerHTML = "Price->$" + userData[key].price;
        products.appendChild(img);
        products.appendChild(p);
        products.appendChild(button);

        products.appendChild(price);
        cartSection.appendChild(products);
        var e=document.getElementById("check-out")
        
        function calc() {
            var total = JSON.parse(localStorage.getItem('total'));
            var sum = parseFloat((total.price));
            var a = parseFloat(userData[key].price);
            var b = parseFloat(p3.innerHTML);
            sum = sum + a;
            total.price = sum;
            localStorage.setItem('total', JSON.stringify(total));
        }
        function calc2() {
            var total = JSON.parse(localStorage.getItem('total'));
            var sum = parseFloat((total.price));
            var a = parseFloat(userData[key].price);
            var b = parseFloat(p3.innerHTML);
            sum = sum - a;
            total.price = sum;
            localStorage.setItem('total', JSON.stringify(total));
        }
        calc();
    })



