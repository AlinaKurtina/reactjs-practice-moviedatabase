import ActorCard from "../ActorCard/ActorCard";
import styles from "./CastData.module.css";

function CastData({ cast }) {
  return (
    <section className={styles.container}>
      <h2 className={styles.heading}>Cast</h2>
      <ul className={styles.list}>
        {cast.map((cm) => (
          <li key={cm.id}>
            <ActorCard actorName={cm.name} imgUrl={cm.profile_path} />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default CastData;
