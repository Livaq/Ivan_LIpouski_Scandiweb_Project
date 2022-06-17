import React from 'react';
import './quantitySelector.scss';
import minusIcon from '../../../assets/Minus-icon.png';
import plusIcon from '../../../assets/Plus-icon.png';

class QuantitySelector extends React.Component {
  render() {
    return (
      <div className="quantity-selector__container">
        <button type="button" className="quantity-selector__btn">
          <img src={plusIcon} alt="add product quantity" />
        </button>
        <span className="quantity-selector__quantity">1</span>
        <button type="button" className="quantity-selector__btn">
          <img src={minusIcon} alt="subtract product quantity" />
        </button>
      </div>
    );
  }
}

export default QuantitySelector;
