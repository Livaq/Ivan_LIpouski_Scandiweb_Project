import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import './App.css';
import ProductListingPage from './components/ProductListingPage/ProductListingPage';
import ProductDescriptionPage from './components/ProductDescriptionPage/ProductDescriptionPage';
import CartPage from './components/CartPage/CartPage';

const client = new ApolloClient({
  uri: 'http://localhost:4000',
  cache: new InMemoryCache(),
});

class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <ProductListingPage />
        <ProductDescriptionPage />
        <CartPage />
      </ApolloProvider>
    );
  }
}

export default App;
