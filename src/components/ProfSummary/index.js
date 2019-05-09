import React, { useContext } from 'react';
import { LocaleContext } from 'context';

import { profSummary } from 'settings/imports';

import styles from './index.scss';

const ProfSummary = () => {
  const { locale } = useContext(LocaleContext);
  const { title, description } = profSummary[locale] ? profSummary[locale] : null;

  return (
    <section className={styles.section}>
      <h2 className={styles.section__title}>{title}</h2>
      <div className={styles['section__text-holder']}>
        <p className={styles.section__text} dangerouslySetInnerHTML={{ __html: description }} />
      </div>
    </section>
  );
};

export default ProfSummary;
