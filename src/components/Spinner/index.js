import React from 'react';
import PropTypes from 'prop-types';

import styles from './index.scss';

const Spinner = ({ isShow, size, style }) => {
  if (!isShow) return null;

  return (
    <div style={style} className={styles.spinner}>
      <div style={{ fontSize: size, width: size + 1, height: size + 1 }} className={styles.loader}>Loading...</div>
    </div>
  );
};

Spinner.propTypes = {
  size: PropTypes.number,
  style: PropTypes.shape({}),
  isShow: PropTypes.bool.isRequired,
};

Spinner.defaultProps = {
  size: 5,
  style: {},
};

export default Spinner;
