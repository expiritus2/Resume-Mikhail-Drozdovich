import React, { useContext } from 'react';
import { LocaleContext } from 'context';
import ReactFlagsSelect from 'react-flags-select';

import styles from './insex.scss';

const Locale = () => {
  const localeContext = useContext(LocaleContext);

  return (
    <div className={styles.locale}>
      <ReactFlagsSelect
        defaultCountry={localeContext.locale}
        countries={['US', 'RU']}
        customLabels={{ US: 'US', RU: 'RU' }}
        onSelect={localeContext.changeLocale}
      />
    </div>
  );
};

export default Locale;
