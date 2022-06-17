import React from 'react';
import PropTypes from 'prop-types';
import './priceDisplay.scss';

class PriceDisplay extends React.Component {
  render() {
    const { marginBottom } = this.props;
    return (
      <div className="price-display__price" style={{ marginBottom }}>
        $50.00
      </div>
    );
  }
}

PriceDisplay.propTypes = {
  marginBottom: PropTypes.string.isRequired,
};
export default PriceDisplay;
