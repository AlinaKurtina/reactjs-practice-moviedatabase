import styles from './Logo.module.css';
import icon from '../../../assets/icon.png';

export function Logo() {
    return (
        <div className={styles.logo}>
            <img src={icon} width="35" alt="Logo" />
            <h2 className={styles.heading}>The Movie Database</h2>
        </div>
    );
}

export default Logo;