import styles from "./InputSearch.module.scss";
import { useEffect, useState } from "react";
import { FC } from "react";
import { IInputSearch } from "./IInputSearch";
import { BsSearch } from "react-icons/bs";

const InputSearch: FC<IInputSearch> = ({ ...rest }) => {
  const [isInputVisible, setIsInputVisible] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setWindowWidth(width);
      if (width <= 720) {
        setIsInputVisible(false);
      } else {
        setIsInputVisible(true);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleInput = () => {
    setIsInputVisible(true);
  };
  const handleClick = () => {
    console.log("wd");
    if (windowWidth > 720) {
      return;
    }
    toggleInput();
  };
  return (
    <div
      className={`${styles.inputBlock} ${
        isInputVisible ? styles.inputVisible : styles.inputHidden
      }`}
      onClick={handleClick}
    >
      <button className={styles.button}>
        <BsSearch style={{ color: "orange" }} className={styles.searchIcon} />
      </button>
      <input type='text' className={styles.input} {...rest} />
    </div>
  );
};

export default InputSearch;
