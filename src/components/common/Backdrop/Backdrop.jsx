import { createPortal } from 'react-dom';
import styles from './Backdrop.module.css';

function Backdrop({ children }) {
  return createPortal(<div className={styles.div}>
    {children}
  </div>, document.body)
}

export default Backdrop;