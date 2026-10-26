import styles from './Carousel.module.css';

const imagesFromFolder = import.meta.glob('@/assets/carousel/*.webp', { eager: true });
const images = Object.values(imagesFromFolder).map((img) => img.default);

function Carousel() {
  return (
    <div className="container">
      <div className={styles.heroBanner}>
        <p className={styles.p}>See what's now playing</p>
        <div className={styles.heroBannerImgs}>
          {images.map(img => (
            <div className={styles.imgBackground} key={img}>
              <img src={img} alt="heroBannerImage" className={styles.heroBannerImg} fetchPriority='high'/>
            </div>
          ))}
        </div>
        <div className={styles.heroBannerControls}></div>
      </div>
    </div>
  );
}

export default Carousel;