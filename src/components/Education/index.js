import React, { useCallback } from 'react';

import { education } from 'settings/imports';

import styles from './index.scss';

const Education = () => {
  const renderEducation = useCallback((item, index) => (
    <div key={`${item}-${index}`}>
      <p className={styles.section__text}>{item.diploma}</p>
      <p className={styles.section__text}>{item.name}</p>
    </div>
  ), []);

  const titleClasses = [
    styles.section__title,
    styles['section__education-title'],
  ].join(' ');

  return (
    <section className={styles.section}>
      <h2 className={titleClasses}>Education</h2>
      <div className={styles['section__text-holder']}>
        {education.map(renderEducation)}
      </div>
    </section>
  );
};

export default Education;
