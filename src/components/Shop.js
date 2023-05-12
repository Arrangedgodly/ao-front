import { getProducts } from '../scripts/shop.js';
import { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import ProductPopup from './ProductPopup';

function Shop({ cart, addToCart }) {
    const [products, setProducts] = useState([]);
    const [activeProduct, setActiveProduct] = useState(null);

    const openPopup = (product) => {
        setActiveProduct(product);
    }

    const closePopup = () => {
        setActiveProduct(null);
    }

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

    useEffect(() => {
        const closePopupOnEscape = (event) => {
            if (event.key === 'Escape') {
                closePopup();
            }
        }
        window.addEventListener('keydown', closePopupOnEscape);
        return () => {
            window.removeEventListener('keydown', closePopupOnEscape);
        }
    }, [])

    useEffect(() => {
        const closePopupOnOutsideClick = (event) => {
            if (event.target.classList.contains('popup')) {
                closePopup();
            }
        }
        window.addEventListener('click', closePopupOnOutsideClick);
        return () => {
            window.removeEventListener('click', closePopupOnOutsideClick);
        }
    }, [])

    return (
        <div className="shop">
            <h1 className='shop__title'>Shop</h1>
            <div className="shop__products">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} openPopup={openPopup} />
                ))}
            </div>
            {activeProduct && (<ProductPopup product={activeProduct} closePopup={closePopup} addToCart={addToCart} />)}
        </div>
    )
}

export default Shop;