// let a=fetch('https://fakestoreapi.com/products')
//             .then(res=>res.json())
//             .then(json=>console.log(json))

//             console.log(a);


const api_url = 'https://fakestoreapi.com/products';
let specialisty = document.getElementById('specialisty-menu');
window.onload = (event) => {
  let cart={};
  localStorage.setItem('cart',JSON.stringify(cart));
};
async function getUser() {
//   Making an API call (request)
//   and getting the response back
  const response = await fetch(api_url);

  // Parsing it to JSON format[]
  const data = await response.json();
  console.log(data);

  let name = data.map((a) => a.title);
  console.log(name);
  console.log(name.title);
  for (let i = 0; i < data.length; i++) {
    let a=JSON.stringify(data[i]);
    console.log(data[i].title);
    let products=document.createElement('div');
    console.log(a);
    const img=document.createElement('img');
    img.src=data[i].image;
    img.style.width="32vh";
    img.style.height="32vh";
    img.style.margin="auto auto";
    const p=document.createElement('p');
    p.innerHTML=data[i].title;
    p.style.height="10vh";
    const p2=document.createElement('p');
    p2.innerHTML=data[i].description;
    p2.style.height="15vh";
    p2.style.fontSize="11px";
    const rating=document.createElement('p');
    rating.innerHTML=data[i].rating.rate;
    const price=document.createElement('p');
    price.innerHTML=data[i].price;


    const button=document.createElement('button');
    button.addEventListener("click",()=>{
        cart=JSON.parse(localStorage.getItem('cart'));
        cart[i]={
          "id":data[i].id,
          "image":data[i].image,
          "desc":data[i].description,
          "price":data[i].price,
          "title":data[i].title,
          "category":data[i].category
        
        };
       
        localStorage.setItem('cart',JSON.stringify(cart));
        
    });
    button.innerHTML="Add To Cart";
    
    
    
    products.style.width="80vh";
    products.style.height="80vh";
    products.style.margin="1vh 1vh";
    products.style.alignContent="center";
    products.style.alignItems="center";
    products.style.border="1px solid black";
    products.appendChild(img);
    products.appendChild(p);
    products.appendChild(p2);
    products.appendChild(rating);
    products.appendChild(price);
    products.appendChild(button);
    
    
    
    
    
    
    
    
    specialisty.appendChild(products);
    let para=document.createElement('p');
    let para2=document.createElement('p');
    
    
  }
  
}

getUser();
{/* <div style="display:flex;flex-direction:column;">
      <img src=${data[i].image} style="width:32vh;height:32vh;margin:auto auto;">
      <p style="height:10vh;"><b>${data[i].title}</b></p>
      <p style="height:15vh;font-size:11px;">${data[i].description}</p>
      <p>Rating-${data[i].rating.rate}/5</p>
      <p>Price-$${data[i].price}</p> */}