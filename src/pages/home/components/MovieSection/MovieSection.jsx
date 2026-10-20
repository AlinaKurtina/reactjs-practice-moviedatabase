import MovieCard from '../MovieCard/MovieCard.jsx';
import styles from './MovieSection.module.css';

function MovieSection() {
    return (
        <div className={styles.container}>
            <h3 className={styles.heading}>Category</h3>
            <ul className={styles.list}>
                <li><MovieCard /></li>
                <li><MovieCard /></li>
                <li><MovieCard /></li>
                <li><MovieCard /></li>
                <li><MovieCard /></li>
                <li><MovieCard /></li>
            </ul>
        </div>
    );
}

export default MovieSection;