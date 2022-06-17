import React from 'react';
import PropTypes from 'prop-types';
import './productName.scss';

class ProductName extends React.Component {
  render() {
    const { marginBottom } = this.props;
    return (
      <>
        <h4 className="product-name__brand">Apollo</h4>
        <h4 className="product-name__name" style={{ marginBottom }}>
          Running Short
        </h4>
      </>
    );
  }
}

ProductName.propTypes = {
  marginBottom: PropTypes.string.isRequired,
};

export default ProductName;
