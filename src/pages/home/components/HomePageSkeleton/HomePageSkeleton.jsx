import styles from "./HomePageSkeleton.module.css";
import "@/styles/global.css";

function HomePageSkeleton({ count = 6 }) {
  return (
    <div className="container">
      <div className={styles.sectionSkeleton}>
        {/* Section Heading Skeleton */}
        <div className={`${styles.headingSkeleton} ${styles.shimmer}`}></div>

        {/* Movie Cards Horizon List Skeleton */}
        <div className={styles.listSkeleton}>
          {Array.from({ length: count }).map((_, index) => (
            <div key={index} className={styles.cardSkeleton}>
              <div className={`${styles.coverSkeleton} ${styles.shimmer}`}></div>
              <div className={styles.dataSkeleton}>
                <div className={`${styles.titleSkeleton} ${styles.shimmer}`}></div>
                <div className={`${styles.dateSkeleton} ${styles.shimmer}`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePageSkeleton;
