import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

function Header() {
  const { cartItems } = useContext(CartContext);
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header style={{ padding: '1rem', backgroundColor: '#f2f2f2' }}>
      <nav>
        <ul style={{ display: 'flex', listStyle: 'none', gap: '1rem' }}>
          <li>
            <Link to="/">Landing</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/cart">Cart ({totalItems})</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
