import styles from './ResultCard.module.css';

function ResultCard() {
    return (
        <div className={styles.resultCard}>
            <div className={styles.image}></div>
            <div className={styles.metadata}>
                <span className={styles.title}>Movie Title</span>
                <span className={styles.date}>Date</span>
                <p className={styles.overview}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi
                    rem consectetur numquam molestiae nam excepturi suscipit magnam
                    ducimus debitis! Fuga aliquid animi vitae libero tempora impedit
                    corporis sunt repudiandae molestias.
                </p>
            </div>
        </div>
    );
}

export default ResultCard;