import styles from './AsideData.module.css';
import Keyword from '../../../../components/common/Keyword/Keyword.jsx';

function AsideData() {
    return (
        <aside className={styles.data}>
            <div className={styles.item}>
                <span className={styles.heading}>Status</span>
                <span>Movie Status</span>
            </div>
            <div className={styles.item}>
                <span className={styles.heading}>Original Language</span>
                <span>Movie Original Language</span>
            </div>
            <div className={styles.item}>
                <span className={styles.heading}>Budget</span>
                <span>Movie Budget</span>
            </div>
            <div className={styles.item}>
                <span className={styles.heading}>Keywords</span>
                <ul className={styles.keywords}>
                    <li><Keyword /></li>
                    <li><Keyword /></li>
                    <li><Keyword /></li>
                </ul>
            </div>
        </aside>
    );
}

export default AsideData;