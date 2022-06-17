import React from 'react';
import PropTypes from 'prop-types';
import { gql } from '@apollo/client';
import { Query } from '@apollo/client/react/components';
import './categoriesMenu.scss';
import CategoryItem from './CategoryItem/CategoryItem';

const CATEGORIES_QUERY = gql`
  {
    categories {
      name
    }
  }
`;

class CategoriesMenu extends React.Component {
  render() {
    const { setCategory } = this.props;

    return (
      <div className="categories-menu__container">
        <Query query={CATEGORIES_QUERY}>
          {({ loading, error, data }) => {
            if (loading) return null;
            if (error) console.log(error);
            return data.categories.map((item) => (
              <CategoryItem
                key={item.name}
                categoryName={item.name}
                setCategory={setCategory}
              />
            ));
          }}
        </Query>
      </div>
    );
  }
}

CategoriesMenu.propTypes = {
  setCategory: PropTypes.func.isRequired,
};

export default CategoriesMenu;
