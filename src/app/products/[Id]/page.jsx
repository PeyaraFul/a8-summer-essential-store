import { productsData } from "@/lib/Data";



const ProductDetailPage = async ({ params }) => {
    const { Id } = await params;
    const products = await productsData();
    const product = products.find((p) => p.id === parseInt(Id));

    return (
        <div>
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <p>${product.price.toFixed(2)}</p>
        </div>
    );
};

export default ProductDetailPage;