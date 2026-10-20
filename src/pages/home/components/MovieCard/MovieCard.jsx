import styles from './MovieCard.module.css';

function MovieCard() {
    return (
        <div className={styles.card}>
            <div className={styles.cover}></div>
            <div className={styles.data}>
                <span className={styles.title}>Movie Title</span>
                <span className={styles.date}>Date</span>
            </div>
        </div>
    );
}

export default MovieCard;