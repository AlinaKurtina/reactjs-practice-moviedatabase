import ActorCard from '../ActorCard/ActorCard';
import styles from './CastData.module.css';

function CastData() {
    return (
        <section className={styles.container}>
            <h2 className={styles.heading}>Cast</h2>
            <ul className={styles.list}>
                <li><ActorCard /></li>
                <li><ActorCard /></li>
                <li><ActorCard /></li>
                <li><ActorCard /></li>
                <li><ActorCard /></li>
                <li><ActorCard /></li>
                <li><ActorCard /></li>
                <li><ActorCard /></li>
                <li><ActorCard /></li>
            </ul>
        </section>
    );
}

export default CastData;