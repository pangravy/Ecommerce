let men=document.getElementById('mens');
let women=document.getElementById('womens');
let elect=document.getElementById('electronics');
let jewel=document.getElementById('jewellery');

const api_url = 'https://fakestoreapi.com/products';

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
        
        
        
        
        
        
        
        if(data[i].category==="men's clothing"){
              men.appendChild(products);
        }else if(data[i].category==="women's clothing"){
            women.appendChild(products);
        }else if(data[i].category==="jewelery"){
            jewel.appendChild(products);
        }else{
            elect.appendChild(products);
        }
        
        
        
        
      }
      
    }
    
    getUser();