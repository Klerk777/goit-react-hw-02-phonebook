import React from 'react';
import PropTypes from 'prop-types';
import styles from './Section.module.scss';

const Section = ({ title, level = '1', children }) => {
  const CustomTag = `h${level}`;
  return (
    <section className={styles.section}>
      <CustomTag>{title}</CustomTag>
      {children}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  level: PropTypes.string,
};

export default Section;
