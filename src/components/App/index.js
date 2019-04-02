import React from 'react';

import { Header, ProfSummary, Skills, WorkHistory, Education } from 'components';

import styles from './index.scss';

const App = () => (
  <div className={styles.container}>
    <Header />
    <ProfSummary />
    <Skills />
    <WorkHistory />
    <Education />
  </div>
);

export default App;
