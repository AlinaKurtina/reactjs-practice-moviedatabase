import { Link } from "react-router";
import styles from "./ErrorMessage.module.css";
import image from "@/assets/sad2.png";
import { useTranslation } from "react-i18next";

function ErrorMessage() {
  const { t } = useTranslation();

  return (
    <div className={styles.div}>
      <div className={styles.flex_div}>
        <h4 className={styles.h4}>{t('error_mgs.went_wrong')}</h4>
        <img src={image} alt="" />
      </div>
      <p className={styles.p}>
        {t('error_mgs.sorry')}{" "}
        <Link to={"/"}>
          <span className={styles.span}>{t('error_mgs.to_main')}</span>
        </Link>
      </p>
    </div>
  );
}

export default ErrorMessage;
