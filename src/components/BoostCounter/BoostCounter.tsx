import React from 'react';
import styles from './boostcounter.module.scss';
import BoostScrolledTabs from '../BoostScrolledTabs/BoostScrolledTabs';

type BoostCounterProps = {
  tabNames: string[];
};

const BoostCounter: React.FC<BoostCounterProps> = ({ tabNames }) => {
  return (
    <div className={styles.boost}>
      <div className="container">
        <div className={styles.body}>
          <BoostScrolledTabs tabNames={tabNames} />
        </div>
      </div>
    </div>
  );
};

export default BoostCounter;


