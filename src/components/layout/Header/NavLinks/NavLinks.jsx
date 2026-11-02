import { useTranslation } from "react-i18next";
import styles from "./NavLinks.module.css";
import { Link } from "react-router";

function NavLinks() {
  const { t } = useTranslation();

  return (
    <>
      <ul className={styles.links}>
        <li>
          <Link to="/no-page-yet">{t("nav_links.movies")}</Link>
        </li>
        <li>
          <Link to="/no-page-yet">{t("nav_links.tv_series")}</Link>
        </li>
        <li>
          <Link to="/no-page-yet">{t("nav_links.people")}</Link>
        </li>
      </ul>
    </>
  );
}

export default NavLinks;
