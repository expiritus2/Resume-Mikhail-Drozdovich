import React, { useContext } from 'react';

import { Photo, info } from 'settings/imports';

import { extend } from 'helpers';
import { LocaleContext } from 'context';

import styles from './index.scss';

extend(styles);

const Header = () => {
  const { locale } = useContext(LocaleContext);
  const { name, born, phone, email, skype, live, citizenship } = info[locale] ? info[locale] : {};

  return (
    <div className={styles.header}>
      <div className={styles['header__image-holder']}>
        <img className={styles.header__image} src={Photo} alt="Mikhail Drozdovich" />
      </div>
      <div className={styles['header__personal-info-holder']}>
        <h1 className={styles.header__title}>{name}</h1>
        <h3 className={styles.header__subtitle}>{born}</h3>
        <div className={styles['header__info-holder']}>
          <p className={styles['header__phone-holder']}>
            <span className={styles['header__info-label']}>{phone.label}</span>
            <span className={styles.header__phone}>{phone.number}</span>
          </p>
          <p className={styles['header__email-holder']}>
            <span className={styles['header__info-label']}>{email.label}</span>
            <a
              className={styles['header__email-link']}
              href={`mailto:${email.address}`}
            >
              {email.address}
            </a>
          </p>
          <p className={styles['header__skype-holder']}>
            <span className={styles['header__info-label']}>{skype.label}</span>
            <span className={styles.header__skype}>{skype.address}</span>
          </p>
        </div>
        <div className={styles['header__info-holder']}>
          <p className={styles['header__live-holder']}>
            <span className={styles['header__info-label']}>{live.label}</span>
            <span className={styles.header__live}>{live.location}</span>
          </p>
          <p className={styles['header__live-holder']}>
            <span className={styles['header__info-label']}>{citizenship.label}</span>
            <span className={styles.header__live}>{citizenship.location}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
