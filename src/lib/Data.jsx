export const productsData = async () => { 
 const res = await fetch('https://a8-summer-essential-store-47ltzk65x-peyarafuls-projects.vercel.app/products.json');
const products = await res.json();
return products 

}
    




