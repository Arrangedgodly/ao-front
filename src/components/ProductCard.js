import {BiLinkExternal} from 'react-icons/bi';
import {RiAddFill} from 'react-icons/ri';
import {useState, useEffect} from 'react';
import { getProduct } from '../scripts/shop';

function ProductCard({product}) {
  const [data, setData] = useState({});
  const [variants, setVariants] = useState([]);

  useEffect(() => {
    getProduct(product.id)
      .then((data) => {
        setData(data.result);
      })
      .catch((err) => {
        console.log(err);
      })
  }, [product.id])

  useEffect(() => {
    setVariants(data.sync_variants)
  }, [data])

  return (
    <div className="card">
      <img src={product.thumbnail_url} alt={product.name} className="card__image" />
      <h3 className="card__title">{product.name}</h3>
      <div className='card__links'>
        <BiLinkExternal className="card__link" />
        <RiAddFill className="card__link" />
      </div>
    </div>
  )
}

export default ProductCard;