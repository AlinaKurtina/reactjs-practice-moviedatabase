import styles from "./ActorCard.module.css";
import { urls } from "@/services/urls";

function ActorCard({ actorName, imgUrl }) {
  return (
    <div className={styles.actorCard}>
      {imgUrl ? (
        <img
          src={`${urls.image_path_small}${imgUrl}`}
          alt={actorName}
          className={styles.actorPicture}
        />
      ) : (
        <div className={styles.actorPicturePlaceholder}></div>
      )}
      <span>{actorName}</span>
    </div>
  );
}

export default ActorCard;
