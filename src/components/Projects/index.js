import React, { useContext } from 'react';

import { LocaleContext } from 'context';
import { projects } from 'settings/imports';

import styles from './index.scss';

const Projects = () => {
  const { locale } = useContext(LocaleContext);
  const { title, links } = projects[locale];

  return (
    <div className={styles.projects}>
      <span className={styles.projects__title}>{title}: </span>
      <span>[ </span>
      {links.map(({ id, label, link }, index) => {
        const linkEl = <a rel="noopener noreferrer" target="_blank" href={link}>{label}</a>;
        return (
          <span key={id}>
            {index > 0
              ? <span>, {linkEl}</span>
              : linkEl}
          </span>
        );
      })}
      <span> ]</span>
    </div>
  );
};

export default Projects;
