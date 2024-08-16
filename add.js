const p_id = document.getElementById('p_id');
const p_name = document.getElementById('p_name');
const p_price = document.getElementById('p_amount');
const addBtn = document.getElementById('p_btn');
const p_url = document.getElementById('p_url');
 
const products = JSON.parse(localStorage.getItem('products')) || [];

addBtn.addEventListener('click', function(){

    const p_obj = {
      id:p_id.value,
      name: p_name.value,
      price: p_price.value,
      url: p_url.value,
    }
    addpro(p_obj)
})
function addpro(obj){
    
    // console.log(obj.qty);
    let conditon = false;
    products.forEach(element => {
        if(obj.id == element.id){
            conditon = true;
        }
    });
    if (conditon) {
        alert('id ')
    } else {
        products.push(obj);
        localStorage.setItem('products', JSON.stringify(products)); 
        
    } 

}
