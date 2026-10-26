import Search from '@/components/common/Search/Search.jsx';
import Logo from '@/components/common/Logo/Logo.jsx';
import styles from './Navigation.module.css';
import { Link } from 'react-router';
import NavLinks from './NavLinks/NavLinks';

import BurgerNavLinks from './BurgerNavLinks/BurgerNavLinks';

function Navigation() {

  return (
    <nav className={styles.nav}>
      <div className="container">
        <Link to={"/"}>
          <Logo />
        </Link>
        <NavLinks />
        <div className={styles.mobile}>
          <BurgerNavLinks />
        </div>
        <Search />
      </div>
    </nav>
  );
}

export default Navigation;