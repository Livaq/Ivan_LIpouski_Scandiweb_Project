import React from 'react';
import './slider.scss';
import testImage from '../../../assets/Test-image.png';
import arrowLeft from '../../../assets/Arrow_left-icon.png';
import arrowRight from '../../../assets/Arrow_right-icon.png';

class Slider extends React.Component {
  render() {
    return (
      <div className="slider__container">
        <img src={testImage} alt="slider" className="slider__image" />
        <div className="slider__arrows-container">
          <button type="button" className="slider__arrow-btn">
            <img src={arrowLeft} alt="arrow left" />
          </button>
          <button type="button" className="slider__arrow-btn">
            <img src={arrowRight} alt="arrow right" />
          </button>
        </div>
      </div>
    );
  }
}

export default Slider;
