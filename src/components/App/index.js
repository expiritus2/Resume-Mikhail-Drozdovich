import React, { useState, useCallback, useContext } from 'react';

import { Header, ProfSummary, Skills, WorkHistory, Education, Locale } from 'components';
import { LocaleContext } from 'context';
import { Decorations } from './components';

import styles from './index.scss';

const App = () => {
  const { locale } = useContext(LocaleContext);
  const [localeValue, setLocaleValue] = useState(locale);

  const changeLocale = useCallback((lang) => {
    setLocaleValue(lang);
  }, []);

  return (
    <LocaleContext.Provider value={{ locale: localeValue, changeLocale }}>
      <div className={styles.container}>
        <Locale />
        <Header />
        <ProfSummary />
        <Skills />
        <WorkHistory />
        <Education />
      </div>
      <Decorations />
    </LocaleContext.Provider>
  );
};

export default App;
