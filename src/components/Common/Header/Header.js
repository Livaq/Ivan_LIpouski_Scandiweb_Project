import React from 'react';
import PropTypes from 'prop-types';
import './header.scss';
import brandIcon from '../../../assets/Brand-icon.png';
import CategoriesMenu from './CategoriesMenu/CategoriesMenu';
import CurrencyMenu from './CurrencyMenu/CurrencyMenu';
import CartMenu from './CartMenu/CartMenu';

class Header extends React.Component {
  render() {
    const { setCategory } = this.props;

    return (
      <header className="header__wrap">
        <div className="header__container">
          <CategoriesMenu setCategory={setCategory} />
          <div className="header__logo-container">
            <img src={brandIcon} alt="brand icon" />
          </div>
          <div className="header__cart-container">
            <CurrencyMenu />
            <CartMenu />
          </div>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  setCategory: PropTypes.func.isRequired,
};

export default Header;
