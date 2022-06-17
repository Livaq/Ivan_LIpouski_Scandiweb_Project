import React from 'react';
import './gallery.scss';
import testImage from '../../../assets/Test-image.png';

class Gallery extends React.Component {
  render() {
    return (
      <div className="gallery__container">
        <div className="gallery__preview-images-container">
          <button type="button" className="gallery__preview-image-container">
            <img
              src={testImage}
              alt="gallery"
              className="gallery__preview-image"
            />
          </button>
          <button type="button" className="gallery__preview-image-container">
            <img
              src={testImage}
              alt="gallery"
              className="gallery__preview-image"
            />
          </button>
          <button type="button" className="gallery__preview-image-container">
            <img
              src={testImage}
              alt="gallery"
              className="gallery__preview-image"
            />
          </button>
        </div>
        <div className="gallery__display-image-container">
          <img
            src={testImage}
            alt="display"
            className="gallery__display-image"
          />
        </div>
      </div>
    );
  }
}

export default Gallery;
