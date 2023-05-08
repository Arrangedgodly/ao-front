//create a shop header that will link to the shop, gallery or user page

function Header() {
    return (
        <div className="header">
          <div className="header__buttons">
            <button>Shop</button>
            <button>Gallery</button>
            <button>My Account</button>
          </div>
        </div>
    )
}

export default Header;