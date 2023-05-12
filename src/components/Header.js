import {BsShop} from 'react-icons/bs';
import {RiGalleryFill} from 'react-icons/ri';
import {VscAccount} from 'react-icons/vsc';
import {AiOutlineShoppingCart} from 'react-icons/ai';
import AoLogo from '../images/ao-logo.png';
import { useState, useEffect } from 'react';

function Header({ navigate, cart }) {
  const [cartCount, setCartCount] = useState(0);
  const enterShop = () => {
    navigate('/shop');
  }
  const enterGallery = () => {
    navigate('/');
  }
  const enterUser = () => {
    navigate('/user');
  }

  const enterCart = () => {
    if (cart.length > 0) {
      navigate('/cart');
    } else {
      alert('Your cart is empty!');
    }
  }

  useEffect(() => {
    setCartCount(cart.length);
  }, [cart])

    return (
        <div className="header">
          <img src={AoLogo} alt="Art Offishal Logo" className="header__logo"/>
          <div className="header__buttons header__buttons-left">
            <BsShop onClick={enterShop} className='header__button'/>
            <RiGalleryFill onClick={enterGallery} className='header__button'/>
          </div>
          <div className="header__buttons">
            <VscAccount onClick={enterUser} className='header__button'/>
            <div className='header__cart'>
            <AiOutlineShoppingCart onClick={enterCart} className='header__button'/>
            {cartCount > 0 && (
              <p className="header__cart-count">{cartCount}</p>
            )}
            </div>
          </div>
        </div>
    )
}

export default Header;