import styles from './Loader.module.css';

function Loader() {
    return (
        <div className="container">
            <div className={styles.loader}></div>
        </div>
    )
}

export default Loader;