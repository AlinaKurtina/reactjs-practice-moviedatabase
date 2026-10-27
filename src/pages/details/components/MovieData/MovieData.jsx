import styles from './MovieData.module.css';
import '@/styles/global.css';
import { urls } from '@/services/urls';

function MovieData({ title, date, genres, duration, overview, imgUrl, backdropUrl }) {
  return (
    <main className={styles.container} style={{ 
      backgroundImage: `url(${urls.image_path_original}${backdropUrl})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center"
      }}>
      <div className="container">
        {imgUrl ? <img src={`${urls.image_path_big}${imgUrl}`} alt={title} className={styles.poster} /> : <div className={styles.placeholderPoster}></div>}
        <div className={styles.metadata}>
          <div>
            <h2 className={styles.title}>{title}</h2>
            <ul className={styles.metadataList}>
              <li><span>{date}</span></li>•
              <li><span>{genres.map(genre => (genre.name)).join(", ")}</span></li>•
              <li><span>{duration} mins</span></li>
            </ul>
          </div>
          <div>
            <h3 className={styles.overviewHeading}>Overview</h3>
            <p className={styles.overview}>{overview}</p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default MovieData;