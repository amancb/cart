
const products = JSON.parse(localStorage.getItem('products')) || [];
const cartpro = document.getElementById('cart');

const product = document.getElementById('product');
products.forEach(element => {
    const main_div = document.createElement('div');
    const p_div = document.createElement('div');
    const p_name = document.createElement('h3');
    const p_price = document.createElement('small');
    const addBtn = document.createElement('button');
    p_div.classList.add('card-body');
    const img = document.createElement('img');
    img.src = element.url;
    img.style.width = "200px"
    img.style.height = "200px"
    img.style.objectFit = 'fill';
    p_name.innerText = element.name;
    p_price.innerText = element.price;
    addBtn.innerText = 'add to cart';
    // addBtn.classList.add('add','btn','btn-primary');
    addBtn.classList.add('add');
    main_div.classList.add('card','p-5',);
    main_div.style.width = '300px';
    // console.log(element);
    main_div.appendChild(img);
    p_div.appendChild(p_name);
    p_div.appendChild(p_price);
    main_div.appendChild(p_div)
    main_div.appendChild(addBtn);
    product.appendChild(main_div);
})

const cart = JSON.parse(localStorage.getItem('carts')) || [];
const add = document.querySelectorAll('.add');
displaycart(cart);
add.forEach((element, index) => {
    element.addEventListener('click',function(){
    addtocard(index);
    // console.log(element);
    // console.log(index)
    })
});
function addtocard(index){
   const data = products[index];

   let condition = false;
   // console.log(cartobj)
   
   cart.forEach(element => {
       if(data.id == element.id){ 
           condition = true;
        }
    });
        if(condition){
            cart[index].qty+= 1;
            localStorage.setItem('carts', JSON.stringify(cart));
            displaycart(cart);
        }
        else{
            const cartobj = {
                id:data.id,
                name:data.name,
                price:data.price,
                qty:1
            }
            cart.push(cartobj);
            localStorage.setItem('carts', JSON.stringify(cart));
            displaycart(cart); 
        }
        
        //    console.log(ab)
    }
    
    function displaycart(cart){
        cartpro.innerHTML = '';
        cart.forEach(element => {
            const div = document.createElement('div');
            const h4 = document.createElement('h4');
            const small = document.createElement('small');
            const qty = document.createElement('h5');
            const deletebtn = document.createElement('button');
            h4.innerText = element.name;
            small.innerText = element.price;
            qty.innerText = element.qty;
            deletebtn.innerText = "X";
            deletebtn.classList.add('remove');
            div.appendChild(h4);
            div.appendChild(small);
            div.appendChild(qty);
            div.appendChild(deletebtn);
            cartpro.appendChild(div);
        });

    
    const remove = document.querySelectorAll('.remove');
    remove.forEach((element,index) => {
        element.addEventListener('click',function(){
            console.log(index);
            cart.splice(index,1);
           localStorage.setItem('carts', JSON.stringify(cart));
           displaycart(cart);
        })
});
}