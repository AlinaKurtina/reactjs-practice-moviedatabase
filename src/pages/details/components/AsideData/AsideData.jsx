import styles from './AsideData.module.css';
import Keyword from '@/components/common/Keyword/Keyword.jsx';
import { Fragment } from 'react';


function AsideData({ status, language, budget, keywords }) {
  return (
    <aside className={styles.data}>
      <div className={styles.item}>
        <span className={styles.heading}>Status</span>
        <span>{status}</span>
      </div>
      <div className={styles.item}>
        <span className={styles.heading}>Original Language</span>
        <span>{language}</span>
      </div>
      <div className={styles.item}>
        <span className={styles.heading}>Budget</span>
        <span>{budget}$</span>
      </div>
      <div className={styles.item}>
        <span className={styles.heading}>Keywords</span>
        <div className={styles.keywords}>
          {keywords.map(kw => (
            <Fragment key={kw.id}>
              <Keyword keyword={kw.name} />
            </Fragment>
          ))}
        </div>
      </div>
    </aside>
  );
}

export default AsideData;