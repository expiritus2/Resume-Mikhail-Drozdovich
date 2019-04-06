import React from 'react';

import { profSummary } from 'settings/imports';

import styles from './index.scss';

const ProfSummary = () => (
  <section className={styles.section}>
    <h2 className={styles.section__title}>Profesional Summary</h2>
    <div className={styles['section__text-holder']}>
      <p className={styles.section__text} dangerouslySetInnerHTML={{ __html: profSummary.description }} />
    </div>
  </section>
);

export default ProfSummary;
