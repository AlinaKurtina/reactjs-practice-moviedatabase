import { Link } from "react-router";
import styles from "./ErrorMessage.module.css";
import errorImage from "@/assets/sad2.png";
import worksImage from "@/assets/inwork.png";
import { useTranslation } from "react-i18next";

function ErrorMessage({ reason }) {
  const { t } = useTranslation();

  return (
    <div className={styles.div}>
      <div className={styles.flex_div}>
        <h4 className={styles.h4}>
          {reason === "no-page" ? t("no_page") : t("error_mgs.went_wrong")}
        </h4>
        {reason === "no-page" ? (
          <img src={worksImage} alt="in-works-image" />
        ) : (
          <img src={errorImage} alt="error-image" />
        )}
      </div>
      <p className={styles.p}>
        {t("error_mgs.sorry")}{" "}
        <Link to={"/"}>
          <span className={styles.span}>{t("error_mgs.to_main")}</span>
        </Link>
      </p>
    </div>
  );
}

export default ErrorMessage;
