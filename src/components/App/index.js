import React, { useState, useCallback, useContext } from 'react';

import {
  Header, ProfSummary, Skills, WorkHistory, Education, Locale, Saver, Spinner, Projects
} from 'components';
import { LocaleContext } from 'context';

import styles from './index.scss';

const App = () => {
  const { locale } = useContext(LocaleContext);
  const [isShowSpinner, setIsShowSpinner] = useState(false);
  const [localeValue, setLocaleValue] = useState(locale);

  const changeLocale = useCallback((lang) => {
    setLocaleValue(lang);
  }, []);

  return (
    <LocaleContext.Provider value={{ locale: localeValue, changeLocale }}>
      <Saver showSpinner={setIsShowSpinner} />
      <div className={styles.container}>
        <Locale />
        <Header />
        <ProfSummary />
        <Skills />
        <WorkHistory />
        <Education />
        <Projects />
      </div>
      <Spinner isShow={isShowSpinner} />
    </LocaleContext.Provider>
  );
};

export default App;
