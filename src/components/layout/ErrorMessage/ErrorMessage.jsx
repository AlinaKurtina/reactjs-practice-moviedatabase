import { Link } from "react-router";
import styles from "./ErrorMessage.module.css";
import image from "@/assets/sad2.png";

function ErrorMessage() {
  return (
    <div className={styles.div}>
      <div className={styles.flex_div}>
        <h4 className={styles.h4}>Something went wrong.</h4>
        <img src={image} alt="" />
      </div>
      <p className={styles.p}>
        We are really sorry.{" "}
        <Link to={"/"}>
          <span className={styles.span}>Return to the main page.</span>
        </Link>
      </p>
    </div>
  );
}

export default ErrorMessage;
