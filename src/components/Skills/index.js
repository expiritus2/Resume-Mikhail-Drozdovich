import React, { useCallback, useContext } from 'react';
import { LocaleContext } from 'context';

import { skillsList } from 'settings/imports';

import styles from './index.scss';

const Skills = () => {
  const { locale } = useContext(LocaleContext);
  const { title, description: skills } = skillsList[locale] ? skillsList[locale] : [];

  const renderSkill = useCallback((skill, index) => (
    <li key={`${skill}-${index}`} className={styles.section__text}>
      {index + 1}) { skill }
    </li>
  ), []);

  return (
    <section className={styles.section}>
      <h2 className={styles.section__title}>{title}</h2>
      <div className={styles['section__text-holder']}>
        <ul className={styles.section__list}>
          {skills.map(renderSkill)}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
