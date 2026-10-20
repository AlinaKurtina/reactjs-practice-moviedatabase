import Search from '../../common/Search/Search.jsx';
import Logo from '../../common/Logo/Logo.jsx';
import styles from './Navigation.module.css';

function Navigation() {
    return (
        <nav className={styles.nav}>
            <div className="container">
                <Logo />
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