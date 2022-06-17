import React from 'react';
import './productItem.scss';
import PropTypes from 'prop-types';
import addToCartIcon from '../../../assets/Add_to_cart-icon.png';

class ProductItem extends React.Component {
  render() {
    const { brand, name, image } = this.props;
    const imageStyle = {
      backgroundImage: `url(${image})`,
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
    };

    return (
      <div className="product-item__container">
        <div className="product-item__image-container" style={imageStyle}>
          <img
            src={addToCartIcon}
            alt="add to cart"
            className="product-item__add-to-cart-button"
          />
        </div>
        <h4 className="product-item__title">{`${brand} ${name}`}</h4>
        <div className="product-item__price">$50</div>
      </div>
    );
  }
}

ProductItem.propTypes = {
  brand: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default ProductItem;
