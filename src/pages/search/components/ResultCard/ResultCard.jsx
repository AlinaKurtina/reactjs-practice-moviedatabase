import { urls } from '@/services/urls';
import styles from './ResultCard.module.css';

function ResultCard({ imgUrl, title, date, overview }) {
  return (
    <div className={styles.resultCard}>
      {imgUrl ? <img src={`${urls.image_path_small}${imgUrl}`} alt={title} className={styles.image} /> : <div className={styles.imagePlaceholder}>?</div>}
      <div className={styles.metadata}>
        <span className={styles.title}>{title}</span>
        <span className={styles.date}>{date}</span>
        <p className={styles.overview}>
          {overview}
        </p>
      </div>
    </div>
  );
}

export default ResultCard;