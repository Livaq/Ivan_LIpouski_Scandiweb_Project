import React from 'react';
import './cartPage.scss';
import Header from '../Common/Header/Header';
import CartPageItem from '../Common/CartPageItem/CartPageItem';

class CartPage extends React.Component {
  render() {
    return (
      <>
        <Header />
        <section className="cart-page__wrap">
          <div className="cart-page__container">
            <h2 className="cart-page__header">Cart</h2>
            <CartPageItem />
            <CartPageItem />
            <CartPageItem />
          </div>
        </section>
      </>
    );
  }
}

export default CartPage;
