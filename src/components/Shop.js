import { getProducts } from '../scripts/shop.js';
import { useEffect, useState } from 'react';
import ProductCard from './ProductCard.js';

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
    return (
        <div className="shop">
            <h1>Shop</h1>
            <div className="shop__products">
                {products.map((product) => {
                    <ProductCard product={product} />
                })}
            </div>
        </div>
    )
}

export default Shop;