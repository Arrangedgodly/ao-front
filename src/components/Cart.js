function Cart({ cart }) {
  return (
    <div className="cart">
      <h1 className="cart__title">Cart</h1>
      <div className="cart__items">
        {cart.map((item) => (
          <div className="cart__item" key={item.id}>
            <img
              src={item.sync_product.thumbnail_url}
              alt={item.sync_product.name}
              className="cart__item-image"
            />
            <div className="cart__item-info">
              <p className="cart__item-name">{item.sync_product.name}</p>
              <p className="cart__item-price">${item.sync_variants[0].retail_price}</p>
            </div>
            <div className='cart__buttons'>
              <div className='cart__item-quantity'>
              <button className="cart__button">-</button>
              <p className="cart__item-quantity-text">1</p>
              <button className="cart__button">+</button>
              </div>
              <button className="cart__button-remove">Remove</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Cart;