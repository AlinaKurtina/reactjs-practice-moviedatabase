import Search from '@/components/common/Search/Search.jsx';
import Logo from '@/components/common/Logo/Logo.jsx';
import styles from './Navigation.module.css';
import { Link } from 'react-router';

function Navigation() {
  return (
    <nav className={styles.nav}>
      <div className="container">
        <Link to={"/"}>
          <Logo />
        </Link>
        <ul className={styles.links}>
          <li><a>Movies</a></li>
          <li><a>TV Shows</a></li>
          <li><a>People</a></li>
        </ul>
        <Search />
      </div>
    </nav>
  );
}

export default Navigation;