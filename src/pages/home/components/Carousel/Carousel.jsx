import { useState } from "react";
import styles from "./Carousel.module.css";
import { Trans, useTranslation } from "react-i18next";

const imagesFromFolder = import.meta.glob("@/assets/carousel/*.webp", { eager: true });
const images = Object.values(imagesFromFolder).map((img) => img.default);

function Carousel() {
  const { t } = useTranslation();
  const [isHovered, setIsHovered] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="container">
      <div className={styles.heroBanner}>
        <p className={styles.p}>
          {" "}
          <Trans i18nKey="hero_banner">{t("hero_banner")}</Trans>
        </p>
        <div
          className={styles.heroBannerImgs}
          onPointerEnter={() => {
            setIsHovered(true);
            setCurrentIndex(currentIndex < images.length - 1 ? currentIndex + 1 : 0);
          }}
          onPointerLeave={() => setIsHovered(false)}
        >
          {isHovered ? (
            <img
              src={images[currentIndex]}
              alt="heroBannerImage"
              className={styles.heroBannerImgHovered}
              fetchPriority="high"
            />
          ) : (
            images.map((img) => (
              <div className={styles.imgBackground} key={img}>
                <img
                  src={img}
                  alt="heroBannerImage"
                  className={styles.heroBannerImg}
                  fetchPriority="high"
                />
              </div>
            ))
          )}
        </div>
        <div className={styles.heroBannerControls}></div>
      </div>
    </div>
  );
}

export default Carousel;
