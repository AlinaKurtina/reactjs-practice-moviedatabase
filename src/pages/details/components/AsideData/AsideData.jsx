import styles from "./AsideData.module.css";
import Keyword from "@/components/common/Keyword/Keyword.jsx";
import { Fragment } from "react";
import { useTranslation } from "react-i18next";

function AsideData({ status, language, budget, keywords }) {
  const {t} = useTranslation();

  return (
    <aside className={styles.data}>
      <div className={styles.item}>
        <span className={styles.heading}>{t('status')}</span>
        <span>{status}</span>
      </div>
      <div className={styles.item}>
        <span className={styles.heading}>{t('original_language')}</span>
        <span>{language}</span>
      </div>
      <div className={styles.item}>
        <span className={styles.heading}>{t('budget')}</span>
        <span>{budget}$</span>
      </div>
      <div className={styles.item}>
        <span className={styles.heading}>{t('keywords')}</span>
        <div className={styles.keywords}>
          {keywords.map((kw) => (
            <Fragment key={kw.id}>
              <Keyword keyword={kw.name} />
            </Fragment>
          ))}
        </div>
      </div>
    </aside>
  );
}

export default AsideData;
