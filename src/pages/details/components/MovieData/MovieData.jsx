import styles from './MovieData.module.css';

function MovieData() {
    return (
        <main className={styles.container}>
            <div className={styles.poster}></div>
            <div className={styles.metadata}>
                <div>
                    <h2 className={styles.title}>Movie Title</h2>
                    <ul className={styles.metadataList}>
                        <li><span>Date</span></li>
                        <li><span>Genres</span></li>
                        <li><span>Duration</span></li>
                    </ul>
                </div>
                <div>
                    <h3 className={styles.overviewHeading}>Overview</h3>
                    <p className={styles.overview}>
                        Lorem ipsum dolor sit amet consectetur adipisicing
                        elit. Ipsam hic temporibus doloremque voluptatum rem corporis
                        nesciunt quas eos libero voluptatem magnam, quam distinctio ea
                        dolor voluptas quos esse architecto impedit?
                    </p>
                </div>
            </div>
        </main>
    );
}

export default MovieData;