import React from 'react';
import './sizeChart.scss';

class SizeChart extends React.Component {
  render() {
    return (
      <div className="size-chart__container">
        <div className="size-chart__header">Size:</div>
        <div className="size-chart__sizes-container">
          <span className="size-chart__size size-selected">XS</span>
          <span className="size-chart__size">S</span>
          <span className="size-chart__size">M</span>
          <span className="size-chart__size">L</span>
        </div>
      </div>
    );
  }
}

export default SizeChart;
