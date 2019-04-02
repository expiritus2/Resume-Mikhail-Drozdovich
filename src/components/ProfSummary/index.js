import React from 'react';

import styles from './index.scss';

const ProfSummary = () => (
  <section className={styles.section}>
    <h2 className={styles.section__title}>Profesional Summary</h2>
    <div className={styles['section__text-holder']}>
      <p className={styles.section__text}>
        I&apos;m <span className={styles.section__accent}>strong middle web developer.</span>
        Always rady to solve the task. I Love to study the new.
        Ambitious, organised, well-tempered and strong will men.
        I get a great pleasure to work in command and to solve
        common tasks together
      </p>
    </div>
  </section>
);

export default ProfSummary;
