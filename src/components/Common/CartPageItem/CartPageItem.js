import React from 'react';
import './cartPageItem.scss';
import ProductName from '../ProductName/ProductName';
import SizeChart from '../SizeChart/SizeChart';
import ColorChart from '../ColorChart/ColorChart';
import PriceDisplay from '../PriceDisplay/PriceDisplay';
import QuantitySelector from '../QuantitySelector/QuantitySelector';
import Slider from '../Slider/Slider';

class CartPageItem extends React.Component {
  render() {
    return (
      <div className="cart-page-item__container">
        <div className="cart-page-item__description-container">
          <ProductName marginBottom="20px" />
          <PriceDisplay />
          <SizeChart marginBottom="20px" />
          <ColorChart />
        </div>
        <div className="cart-page-item__quantity-selector-container">
          <QuantitySelector />
          <Slider />
        </div>
      </div>
    );
  }
}

export default CartPageItem;
