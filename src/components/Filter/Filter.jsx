import React from 'react';
import PropTypes from 'prop-types';
import styles from './Filter.module.scss';

const Filter = ({ value, onChangeFilter }) => {
  return (
    <label className={styles.filter}>
      Filter
      <input
        type="text"
        name="filter"
        placeholder="add a filter to sort contacts"
        value={value}
        onChange={onChangeFilter}
      />
    </label>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onChangeFilter: PropTypes.func.isRequired,
};

export default Filter;
