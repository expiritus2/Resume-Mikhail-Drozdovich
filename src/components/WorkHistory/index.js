import React, { useCallback } from 'react';

import { worksList } from 'settings/imports';

import styles from './index.scss';

const WorkHistory = () => {
  const renderWork = useCallback((work, index) => {
    const { position, yearRange, company, description } = work;

    return (
      <section key={`${work}-${index}`} className={styles.section}>
        <div className={styles['section__text-holder']}>
          <div className={styles['section__inner-holder']}>
            <div className={styles['section__title-holder']}>
              <p className={styles.section__position}>{ position }</p>
              <p className={styles['section__year-range']}>{ yearRange }</p>
            </div>
            <p className={`${styles.section__company} ${styles.section__text}`} dangerouslySetInnerHTML={{ __html: company }} />
            <p className={styles.section__text} dangerouslySetInnerHTML={{ __html: description }} />
          </div>
        </div>
      </section>
    );
  }, []);

  return (
    <>
      <h2 className={styles.section__title}>Work History</h2>
      {worksList.map(renderWork)}
    </>
  );
};

export default WorkHistory;
