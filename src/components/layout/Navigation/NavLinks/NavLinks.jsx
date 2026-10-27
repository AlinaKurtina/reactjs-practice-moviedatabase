import styles from "./NavLinks.module.css";

function NavLinks() {
  return (
    <>
      <ul className={styles.links}>
        <li>
          <a>Movies</a>
        </li>
        <li>
          <a>TV Shows</a>
        </li>
        <li>
          <a>People</a>
        </li>
      </ul>
    </>
  );
}

export default NavLinks;
