import React from 'react';

import styles from './index.scss';

const Education = () => (
  <section className={styles.section}>
    <h2 className={styles.section__title}>Education</h2>
    <div className={styles['section__text-holder']}>
      <p className={styles.section__text}>High School Diploma - 2010</p>
      <p className={styles.section__text}>International Institute of Labor and Social Relations</p>
    </div>
  </section>
);

export default Education;
