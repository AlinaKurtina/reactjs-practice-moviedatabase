import { useDispatch, useSelector } from "react-redux";
import styles from "./LanguageChoice.module.css";
import { changeCurrentLanguage } from "@/store/languageSlice";
import { useTranslation } from "react-i18next";
import { useLocalStorage } from "@/hooks/useLocalStorage";

function LanguageChoice() {
  const lang = useSelector((state) => state.lang.value);
  const dispatch = useDispatch();
  const { i18n } = useTranslation();
  const { setNewItem } = useLocalStorage();

  return (
    <select
      className={styles.select}
      value={lang}
      onChange={(e) => {
        const lng = e.currentTarget.value;
        dispatch(changeCurrentLanguage(lng));
        i18n.changeLanguage(lng);
        setNewItem("lang", lng);
      }}
    >
      <option value="en-US">ENG</option>
      <option value="ru">RU</option>
    </select>
  );
}

export default LanguageChoice;
