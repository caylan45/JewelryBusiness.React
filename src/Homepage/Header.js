import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { SearchContext } from '../SearchContext';
import HeaderImage from "../image/Asset 1@3x.png";
import ShoppingCartIcon from '../image/ShoppingCart.webp';
import ProfileIcon from '../image/profile-icon.jpg';
import SearchIcon from '../image/search-Icon.png';
import { CartContext } from '../Cart.Context';
function Header() {
  const { setSearchTerm, searchTerm } = useContext(SearchContext);
  const [showSearch, setShowSearch] = useState(false);
  const {cartItems}=useContext(CartContext)
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };

  return (
    <div>
      <nav className="shipping">Free Shipping on Orders $99</nav>
    
      <div className="topbanner"></div>
      <header>
        <Link to="/">
          <img src={HeaderImage} alt="Header" width="160" height="auto" />
        </Link>
        <div className="icon-container">
         
          <Link to="/ShoppingCart">
            <img src={ShoppingCartIcon} alt="Shopping Cart" className="icon" />
            {cartItems && cartItems.length > 0 && (
  <span className="cart-badge">
    {cartItems.length}
  </span>
)}
          </Link>
          <Link to="/MyProfile">
            <img src={ProfileIcon} alt="Profile" className="icon" />
          </Link>
        </div>
     
      </header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Necklace">Necklace</Link></li>
          <li><Link to="/Earring">Earring</Link></li>
          <li><Link to="/Ring">Ring</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/Contact">Contact</Link></li>
          <button onClick={toggleSearch} className="search-icon-button">
            <img src={SearchIcon} alt="Search" className="icon" />
          </button>
        </ul>
      </nav> 
      {showSearch && (
          <div className="search-container">
            <input
           className="search-input"
              type="text"
              value={searchTerm}
              onChange={handleSearchChange}
              placeholder="Search..."
              autoFocus
            />
            <button className="search-button">Search</button>
          </div>
        )}
    </div>
  );
}

export default Header;
