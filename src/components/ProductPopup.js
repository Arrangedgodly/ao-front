import { AiFillCloseCircle } from "react-icons/ai";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useState, useEffect } from "react";

function ProductPopup({ product, closePopup }) {
  const data = product.sync_product;
  const variants = product.sync_variants;
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeVariant, setActiveVariant] = useState(0);

  const changeVariant = (index) => {
    setActiveVariant(index);
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
        </div>
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
        <AiFillCloseCircle className="popup__close" onClick={closePopup} />
        <button className="popup__button">Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductPopup;
