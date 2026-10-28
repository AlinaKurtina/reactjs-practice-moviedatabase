import Search from "@/components/common/Search/Search.jsx";
import Logo from "@/components/common/Logo/Logo.jsx";
import styles from "./Navigation.module.css";
import { Link } from "react-router";
import NavLinks from "./NavLinks/NavLinks";
import BurgerNavLinks from "./BurgerNavLinks/BurgerNavLinks";
import QueryBar from "@/components/common/QueryBar/QueryBar";
import { useState } from "react";
import { useOutsideClick } from "@/hooks/useOutsideClick";

function Navigation() {
  const [showQueryBar, setShowQueryBar] = useState(false);
  const ref = useOutsideClick(() => setShowQueryBar(false));

  return (
    <>
      <nav className={styles.nav}>
        <div className="container">
          <Link to={"/"}>
            <Logo />
          </Link>
          <NavLinks />
          <div className={styles.mobile}>
            <BurgerNavLinks />
          </div>
          <Search setShowQueryBar={setShowQueryBar} showQueryBar={showQueryBar} />
        </div>
      </nav>
      {showQueryBar && <QueryBar ref={ref} setShowQueryBar={setShowQueryBar} />}
    </>
  );
}

export default Navigation;
