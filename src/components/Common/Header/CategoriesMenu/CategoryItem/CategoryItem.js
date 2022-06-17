import React from 'react';
import PropTypes from 'prop-types';
import './categoryItem.scss';

class CategoryItem extends React.Component {
  render() {
    const { categoryName, setCategory } = this.props;

    return (
      <button
        type="button"
        className="category-item__category-title"
        onClick={setCategory}
      >
        {categoryName}
      </button>
    );
  }
}

CategoryItem.propTypes = {
  categoryName: PropTypes.string.isRequired,
  setCategory: PropTypes.func.isRequired,
};

export default CategoryItem;
