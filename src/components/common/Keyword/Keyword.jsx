import styles from './Keyword.module.css';

function Keyword({ keyword }) {
    return <span className={styles.keyword}>{keyword}</span>;
}

export default Keyword;