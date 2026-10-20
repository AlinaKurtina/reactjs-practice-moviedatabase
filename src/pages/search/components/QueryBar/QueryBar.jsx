import styles from './QueryBar.module.css';

function QueryBar() {
    return (
        <form action="" method="get" className={styles.queryBar}>
            <input 
                name="queryBar" 
                type="text" 
                placeholder="results for previous query..." 
                className={styles.input} 
            />
        </form>
    );
}

export default QueryBar;