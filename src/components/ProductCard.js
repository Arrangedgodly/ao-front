import {BiLinkExternal} from 'react-icons/bi';
import {RiAddFill} from 'react-icons/ri';
import {useState, useEffect} from 'react';
import { getProduct } from '../scripts/shop';

function ProductCard({product, openPopup}) {
  const [data, setData] = useState({});
  const priceRange = data.sync_variants
  ? `$${Math.min(...data.sync_variants.map((variant) => parseFloat(variant.retail_price)))} - $${Math.max(...data.sync_variants.map((variant) => parseFloat(variant.retail_price)))}`
  : "";

  const triggerPopup = () => {
    openPopup(data);
  }

  useEffect(() => {
    getProduct(product.id)
      .then((data) => {
        setData(data.result);
      })
      .catch((err) => {
        console.log(err);
      })
  }, [product.id])

  return (
    <div className="card">
      <img src={product.thumbnail_url} alt={product.name} className="card__image" />
      <h3 className="card__title">{product.name}</h3>
      <div className='card__links'>
        {priceRange && <p className="card__price-range">{priceRange}</p>}
        <BiLinkExternal className="card__link" />
        <RiAddFill className="card__link" onClick={triggerPopup} />
      </div>
    </div>
  )
}

export default ProductCard;