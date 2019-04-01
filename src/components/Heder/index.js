import React from 'react';

import Photo from 'images/image.jpeg';

import styles from './index.scss';

const Header = () => (
  <div className={styles.header}>
    <div className={styles['header__image-holder']}>
      <img className={styles.header__image} src={Photo} alt="Mikhail Drozdovich" />
    </div>
    <div className={styles['header__personal-info-holder']}>
      <h1 className={styles.header__title}>MIKHAIL DROZDOVICH</h1>
      <div className={styles['header__info-holder']}>
        <p className={styles['header__phone-holder']}>Phone:
          <span className={styles.header__phone}>+375 (29) 676-26-32</span>
        </p>
        <p className={styles['header__email-holder']}>Email:
          <a className={styles['header__email-link']} href="mailto:michaildrozdovich@gmail.com">michaildrozdovich@gmail.com</a>
        </p>
      </div>
    </div>
  </div>
);

export default Header;
