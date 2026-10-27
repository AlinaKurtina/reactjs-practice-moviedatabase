import styles from "./SearchPageSkeleton.module.css";
import "@/styles/global.css";

function SearchPageSkeleton() {
  return (
    <div className={styles.skeletonWrapper}>
      {/* QueryBar Skeleton */}
      <div className="container">
        <div className={styles.queryBarSkeleton}>
          <div className={`${styles.searchIconSkeleton} ${styles.shimmer}`}></div>
          <div className={`${styles.inputSkeleton} ${styles.shimmer}`}></div>
        </div>
      </div>

      {/* SearchResults List Skeleton */}
      <div className="container">
        <div className={styles.searchResultsSkeleton}>
          {Array.from({ length: 5 }).map((_, index) => (
            <div key={index} className={styles.resultCardSkeleton}>
              <div className={`${styles.imageSkeleton} ${styles.shimmer}`}></div>
              <div className={styles.metadataSkeleton}>
                <div className={`${styles.titleSkeleton} ${styles.shimmer}`}></div>
                <div className={`${styles.dateSkeleton} ${styles.shimmer}`}></div>
                <div className={styles.overviewGroupSkeleton}>
                  <div className={`${styles.textLine} ${styles.shimmer}`}></div>
                  <div className={`${styles.textLine} ${styles.shimmer}`}></div>
                  <div className={`${styles.textLineShort} ${styles.shimmer}`}></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SearchPageSkeleton;
