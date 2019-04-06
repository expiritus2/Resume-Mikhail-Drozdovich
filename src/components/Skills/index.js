import React, { useCallback } from 'react';

import { skillsList } from 'settings/imports';

import styles from './index.scss';

const Skills = () => {
  const renderSkill = useCallback((skill, index) => (
    <li key={`${skill}-${index}`} className={styles.section__text}>
      {index + 1}) { skill }
    </li>
  ), []);

  return (
    <section className={styles.section}>
      <h2 className={styles.section__title}>Skills</h2>
      <div className={styles['section__text-holder']}>
        <ul className={styles.section__list}>
          {skillsList.map(renderSkill)}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
