import styles from './ActorCard.module.css';

function ActorCard() {
    return (
        <div className={styles.actorCard}>
            <div className={styles.actorPicture}></div>
            <span>Actor Name</span>
        </div>
    );
}

export default ActorCard;