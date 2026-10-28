import { useDispatch, useSelector } from "react-redux";
import styles from "./LanguageChoice.module.css";
import { changeLanguage } from "@/store/languageSlice";

function LanguageChoice() {
  const lang = useSelector((state) => state.lang.value);
  const dispatch = useDispatch();

  return (
    <select
      className={styles.select}
      value={lang}
      onChange={(e) => {
        dispatch(changeLanguage(e.currentTarget.value));
      }}
    >
      <option value="en-US">ENG</option>
      <option value="ru">RU</option>
    </select>
  );
}

export default LanguageChoice;
