import React from 'react';
import './productDescriptionPage.scss';
import Header from '../Common/Header/Header';
import Gallery from '../Common/Gallery/Gallery';
import SizeChart from '../Common/SizeChart/SizeChart';
import ColorChart from '../Common/ColorChart/ColorChart';
import ProductName from '../Common/ProductName/ProductName';
import PriceDisplay from '../Common/PriceDisplay/PriceDisplay';

class ProductDescriptionPage extends React.Component {
  render() {
    return (
      <>
        <Header />
        <section className="product-description-page__wrap">
          <div className="product-description-page__container">
            <Gallery />
            <div className="product-description-page__description-content">
              <ProductName marginBottom="40px" />
              <SizeChart />
              <ColorChart />
              <div className="product-description-page__price-title">
                Price:
              </div>
              <PriceDisplay marginBottom="40px" />
              <button
                type="button"
                className="product-description-page__button btn"
              >
                Add to cart
              </button>
              <div className="product-description-page__item-description">
                afjafvadjvnksjvblashvbakfhvbalksvbfaks
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default ProductDescriptionPage;
