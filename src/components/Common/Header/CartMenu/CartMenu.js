import React from 'react';
import './cartMenu.scss';
import cartIcon from '../../../../assets/Cart-icon.png';

class CartMenu extends React.Component {
  render() {
    return (
      <div className="cart-menu__container">
        <img src={cartIcon} alt="cart icon" className="cart-menu__cart-icon" />
      </div>
    );
  }
}

export default CartMenu;
