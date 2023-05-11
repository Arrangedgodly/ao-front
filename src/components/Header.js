import {BsShop} from 'react-icons/bs';
import {RiGalleryFill} from 'react-icons/ri';
import {VscAccount} from 'react-icons/vsc';
import {AiOutlineShoppingCart} from 'react-icons/ai';
import AoLogo from '../images/ao-logo.png';

function Header({ changePage }) {
  const enterShop = () => {
    changePage('shop');
  }
  const enterGallery = () => {
    changePage('gallery');
  }
  const enterUser = () => {
    changePage('user');
  }

    return (
        <div className="header">
          <img src={AoLogo} alt="Art Offishal Logo" className="header__logo"/>
          <div className="header__buttons header__buttons-left">
            <BsShop onClick={enterShop} className='header__button'/>
            <RiGalleryFill onClick={enterGallery} className='header__button'/>
          </div>
          <div className="header__buttons">
            <VscAccount onClick={enterUser} className='header__button'/>
            <AiOutlineShoppingCart className='header__button'/>
          </div>
        </div>
    )
}

export default Header;