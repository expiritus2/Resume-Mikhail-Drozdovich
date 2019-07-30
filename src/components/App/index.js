import React, { useState, useCallback, useContext } from 'react';

import { Header, ProfSummary, Skills, WorkHistory, Education, Locale, Saver } from 'components';
import { LocaleContext } from 'context';

import styles from './index.scss';

const App = () => {
  const { locale } = useContext(LocaleContext);
  const [localeValue, setLocaleValue] = useState(locale);

  const changeLocale = useCallback((lang) => {
    setLocaleValue(lang);
  }, []);

  return (
    <LocaleContext.Provider value={{ locale: localeValue, changeLocale }}>
      <Saver />
      <div className={styles.container}>
        <Locale />
        <Header />
        <ProfSummary />
        <Skills />
        <WorkHistory />
        <Education />
      </div>
      {/* <Decorations /> */}
    </LocaleContext.Provider>
  );
};

export default App;
