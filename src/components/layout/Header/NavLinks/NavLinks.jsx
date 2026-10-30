import { Trans, useTranslation } from "react-i18next";
import styles from "./NavLinks.module.css";

function NavLinks() {
  const { t } = useTranslation();

  return (
    <>
      <ul className={styles.links}>
        <li>
          <Trans i18nKey="nav_links.movies">
            <a>{t('nav_links.movies')}</a>
          </Trans>
        </li>
        <li>
          <Trans i18nKey="nav_links.tv_series">
            <a>{t('nav_links.tv_series')}</a>
          </Trans>
        </li>
        <li>
          <Trans i18nKey="nav_links.people">
            <a>{t('nav_links.people')}</a>
          </Trans>
        </li>
      </ul>
    </>
  );
}

export default NavLinks;
