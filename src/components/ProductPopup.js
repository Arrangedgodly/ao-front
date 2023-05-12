import { AiFillCloseCircle } from "react-icons/ai";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useState, useEffect } from "react";

function ProductPopup({ product, closePopup, addToCart }) {
  const data = product.sync_product;
  const variants = product.sync_variants;
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeVariant, setActiveVariant] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const changeVariant = (index) => {
    setActiveVariant(index);
  };

  const triggerAddToCart = () => {
    addToCart(product);
    closePopup();
  };

  return (
    <div className="popup">
      <div className="popup__content">
        <img
          src={data.thumbnail_url}
          alt={data.name}
          className="popup__image"
        />
        <div className="popup__dropdown">
          <p className="popup__title">{variants[activeVariant].name}</p>
          <p className="popup__price">
            ${variants[activeVariant].retail_price}
          </p>
          <RiArrowDropDownLine
            className="popup__dropdown-icon"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          />
          {dropdownOpen && (
          <div className="popup__dropdown-content">
            {variants.map((variant, index) => (
              <div
                className="popup__variant"
                key={variant.id}
                onClick={() => {
                  changeVariant(index);
                  setDropdownOpen(false);
                }}
              >
                <p className="popup__variant-name">
                  {variant.name} : ${variant.retail_price}
                </p>
              </div>
            ))}
          </div>
        )}
        </div>
        <AiFillCloseCircle className="popup__close" onClick={closePopup} />
        <div className="popup__quantity">
          <button
            className="popup__quantity-button"
            onClick={() => setQuantity(quantity - 1)}
            disabled={quantity === 1}
          >
            -
          </button>
          <p className="popup__quantity-text">{quantity}</p>
          <button
            className="popup__quantity-button"
            onClick={() => setQuantity(quantity + 1)}
          >
            +
          </button>
        </div>
        <button className="popup__button" onClick={triggerAddToCart}>Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductPopup;
