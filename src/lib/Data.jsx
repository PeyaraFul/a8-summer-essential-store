export const productsData = async () => { 
 const res = await fetch('http://localhost:3000/products.json');
const products = await res.json();
return products 

}
    




