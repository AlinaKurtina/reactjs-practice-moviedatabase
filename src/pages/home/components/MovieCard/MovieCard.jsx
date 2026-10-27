import styles from './MovieCard.module.css';
import { urls } from '@/services/urls';
import { dateFormatter } from '@/utils/dateFormatter';

function MovieCard({ title, date, imgUrl, handleClick }) {
  return (
    <div className={styles.card} onClick={handleClick}>
      {imgUrl ? <img src={`${urls.image_path_small}${imgUrl}`} alt={title} className={styles.cover} /> 
      : <div className={styles.placeholderCover}></div>}
      <div className={styles.data}>
        <span className={styles.title}>{title}</span>
        <span className={styles.date}>{dateFormatter(date)}</span>
      </div>
    </div>
  );
}

export default MovieCard;