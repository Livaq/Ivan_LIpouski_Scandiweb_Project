import React from 'react';
import './colorChart.scss';

class ColorChart extends React.Component {
  render() {
    return (
      <div className="color-chart__container">
        <div className="color-chart__header">Color:</div>
        <div className="color-chart__colors-container">
          <span className="color-chart__color" />
          <span className="color-chart__color" />
          <span className="color-chart__color" />
        </div>
      </div>
    );
  }
}

export default ColorChart;
