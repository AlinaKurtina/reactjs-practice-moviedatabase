import styles from './Carousel.module.css';

function Carousel() {
    return (
        <div className={styles.heroBanner}>
            <div className={styles.heroBannerImg}></div>
            <div className={styles.heroBannerControls}></div>
        </div>
    );
}

export default Carousel;