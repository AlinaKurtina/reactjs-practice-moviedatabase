import styles from './AsideData.module.css';
import Keyword from '@/components/common/Keyword/Keyword.jsx';

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
        <ul className={styles.keywords}>
          {keywords.map(kw => (
            <li key={kw.id}>
              <Keyword keyword={kw.name} />
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}

export default AsideData;