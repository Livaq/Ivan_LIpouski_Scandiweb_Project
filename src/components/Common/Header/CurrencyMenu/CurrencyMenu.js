import React from 'react';
import './currencyMenu.scss';
import dollarIcon from '../../../../assets/Dollar-icon.png';
import arrowIcon from '../../../../assets/Arrow-icon.png';

class CurrencyMenu extends React.Component {
  render() {
    return (
      <div className="currency-menu__container">
        <img
          src={dollarIcon}
          alt="dollar icon"
          className="currency-menu__currency-sign"
        />
        <img
          src={arrowIcon}
          alt="arrow icon"
          className="currency-menu__drop-sign"
        />
      </div>
    );
  }
}

export default CurrencyMenu;
