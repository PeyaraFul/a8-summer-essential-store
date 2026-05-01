import React from 'react';
import { productsData } from '@/lib/Data';

import ProductCard from '@/components/ProductCard';

const ProductsPage = async ({children}) => {
    const products = await productsData();
    return (
        <div className="grid grid-cols-3 gap-6  ">
            {products.map((product) => (            

        <ProductCard product={product} key={product.id} />
            ))}
        </div>
    );
};

export default ProductsPage;