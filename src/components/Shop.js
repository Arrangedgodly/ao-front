import { getProducts } from '../scripts/shop.js';
import { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

function Shop() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts()
            .then((data) => {
                setProducts(data.result);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    useEffect(() => {
        console.log(products);
    }, [products])

    return (
        <div className="shop">
            <h1 className='shop__title'>Shop</h1>
            <div className="shop__products">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    )
}

export default Shop;