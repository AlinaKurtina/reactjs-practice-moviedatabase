import styles from "./MovieDetailsSkeleton.module.css";
import "@/styles/global.css";

function MovieDetailsSkeleton() {
  return (
    <div className={styles.skeletonWrapper}>
      {/* Hero / Movie Data Section Skeleton */}
      <section className={styles.heroSkeleton}>
        <div className="container">
          <div className={`${styles.posterSkeleton} ${styles.shimmer}`}></div>
          <div className={styles.metadataSkeleton}>
            <div className={styles.titleGroup}>
              <div className={`${styles.titleSkeleton} ${styles.shimmer}`}></div>
              <div className={`${styles.metaListSkeleton} ${styles.shimmer}`}></div>
            </div>
            <div className={styles.overviewGroup}>
              <div className={`${styles.headingSkeleton} ${styles.shimmer}`}></div>
              <div className={`${styles.textLine} ${styles.shimmer}`}></div>
              <div className={`${styles.textLine} ${styles.shimmer}`}></div>
              <div className={`${styles.textLineShort} ${styles.shimmer}`}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area: Cast & Aside Skeleton */}
      <div className={styles.contentLayout}>
        {/* Cast Section Skeleton */}
        <section className={styles.castSkeleton}>
          <div className={`${styles.headingSkeleton} ${styles.shimmer}`}></div>
          <div className={styles.castListSkeleton}>
            {Array.from({ length: 5 }).map((_, index) => (
              <div key={index} className={styles.actorCardSkeleton}>
                <div className={`${styles.actorPictureSkeleton} ${styles.shimmer}`}></div>
                <div className={`${styles.actorNameSkeleton} ${styles.shimmer}`}></div>
              </div>
            ))}
          </div>
        </section>

        {/* Sidebar / Aside Data Skeleton */}
        <aside className={styles.asideSkeleton}>
          <div className={styles.asideItem}>
            <div className={`${styles.asideHeadingSkeleton} ${styles.shimmer}`}></div>
            <div className={`${styles.asideValueSkeleton} ${styles.shimmer}`}></div>
          </div>
          <div className={styles.asideItem}>
            <div className={`${styles.asideHeadingSkeleton} ${styles.shimmer}`}></div>
            <div className={`${styles.asideValueSkeleton} ${styles.shimmer}`}></div>
          </div>
          <div className={styles.asideItem}>
            <div className={`${styles.asideHeadingSkeleton} ${styles.shimmer}`}></div>
            <div className={`${styles.asideValueSkeleton} ${styles.shimmer}`}></div>
          </div>
          <div className={styles.asideItem}>
            <div className={`${styles.asideHeadingSkeleton} ${styles.shimmer}`}></div>
            <div className={styles.keywordsSkeleton}>
              {Array.from({ length: 4 }).map((_, index) => (
                <div
                  key={index}
                  className={`${styles.keywordBadgeSkeleton} ${styles.shimmer}`}
                ></div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default MovieDetailsSkeleton;
