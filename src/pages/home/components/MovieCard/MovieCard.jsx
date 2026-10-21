import styles from './MovieCard.module.css';

function MovieCard({ title, date, imgUrl }) {
  return (
    <div className={styles.card}>
      {imgUrl ? <img src={`https://image.tmdb.org/t/p/w342${imgUrl}`} alt={title} className={styles.cover} /> 
      : <div className={styles.placeholderCover}></div>}
      <div className={styles.data}>
        <span className={styles.title}>{title}</span>
        <span className={styles.date}>{date}</span>
      </div>
    </div>
  );
}

export default MovieCard;