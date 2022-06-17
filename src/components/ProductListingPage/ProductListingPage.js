import React from 'react';
import { gql } from '@apollo/client';
import { Query } from '@apollo/client/react/components';
import './productListingPage.scss';
import ProductItem from './ProductItem/ProductItem';
import Header from '../Common/Header/Header';

const PRODUCTS_QUERY = (category) => gql`
  {
     category(input: { title: "${category}" }) {
    name
    products {
      name
      brand
      id
      category
      inStock
      gallery
      prices {
        currency {
          label
          symbol
        }
        amount
      }
    }
  }
  }
`;

class ProductListingPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      category: '',
    };
  }

  setCategory = (e) => {
    const x = e.target.innerHTML;
    this.setState({
      category: x,
    });
  };

  render() {
    const { category } = this.state;
    return (
      <>
        <Header setCategory={this.setCategory} />
        <section className="product-listing-page__wrap">
          <div className="product-listing-page__container">
            <h2 className="product-listing-page__header">Category Name</h2>
            <div className="product-listing-page__products-container">
              <Query query={PRODUCTS_QUERY(category)}>
                {({ loading, error, data }) => {
                  if (loading) return null;
                  if (error) console.log(error);
                  console.log(data);
                  return data.category.products.map((product) => (
                    <ProductItem
                      key={product.id}
                      brand={product.brand}
                      name={product.name}
                      image={product.gallery[0]}
                    />
                  ));
                }}
              </Query>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default ProductListingPage;
