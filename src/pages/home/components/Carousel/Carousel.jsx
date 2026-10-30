import styles from "./Carousel.module.css";
import { Trans, useTranslation } from "react-i18next";

const imagesFromFolder = import.meta.glob("@/assets/carousel/*.webp", { eager: true });
const images = Object.values(imagesFromFolder).map((img) => img.default);

function Carousel() {
  const { t } = useTranslation();

  return (
    <div className="container">
      <div className={styles.heroBanner}>
        <p className={styles.p}> <Trans i18nKey="hero_banner">{t('hero_banner')}</ Trans></p>
        <div className={styles.heroBannerImgs}>
          {images.map((img) => (
            <div className={styles.imgBackground} key={img}>
              <img
                src={img}
                alt="heroBannerImage"
                className={styles.heroBannerImg}
                fetchPriority="high"
              />
            </div>
          ))}
        </div>
        <div className={styles.heroBannerControls}></div>
      </div>
    </div>
  );
}

export default Carousel;
