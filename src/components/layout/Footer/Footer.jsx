import styles from "./Footer.module.css";
import Logo from "../../common/Logo/Logo.jsx";
import { useTranslation } from "react-i18next";

function Footer() {
  const {t} = useTranslation();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <Logo />
        <ul className={styles.contacts}>
          <h3 className={styles.contactsHeading}>{t('contacts')}</h3>
          <li>
            <label htmlFor="tel">{t('phone')}: </label>
            <a href="tel:+11111111111" id="tel" className={styles.contactsLink}>
              +111 (11) 111 11 11
            </a>
          </li>
          <li>
            <label htmlFor="mail">{t('mail')}: </label>
            <a href="mailto:alina@gmail.com" id="mail" className={styles.contactsLink}>
              alina@gmail.com
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
