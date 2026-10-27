import { useState } from "react";
import hambg from "@/assets/hamburger.png";
import styles from "./BurgerNavLinks.module.css";
import { useOutsideClick } from "@/hooks/useOutsideClick";

function BurgerNavLinks() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const menuRef = useOutsideClick(() => setMenuOpen(false));

  return (
    <>
      <img
        src={hambg}
        alt="openMenu"
        onClick={() => setMenuOpen(true)}
        ref={menuRef}
        width="30"
        height="30"
        className={styles.hamburger}
      />
      {isMenuOpen ? (
        <ul className={styles.linksHamburger}>
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
      ) : null}
    </>
  );
}

export default BurgerNavLinks;
