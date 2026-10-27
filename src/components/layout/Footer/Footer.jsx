import styles from "./Footer.module.css";
import Logo from "../../common/Logo/Logo.jsx";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <Logo />
        <ul className={styles.contacts}>
          <h3 className={styles.contactsHeading}>Contacts</h3>
          <li>
            <label htmlFor="tel">Phone: </label>
            <a href="tel:+11111111111" id="tel" className={styles.contactsLink}>
              +111 (11) 111 11 11
            </a>
          </li>
          <li>
            <label htmlFor="mail">Mail: </label>
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
