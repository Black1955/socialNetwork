import logo from "../../assets/logo.png";
import { useState } from "react";
import InputSearch from "../../ui/InputSearch/InputSearch";
import styles from "./Header.module.scss";
// import { MdOutlineKeyboardArrowDown } from "react-icons/md";
// import { MdKeyboardArrowRight } from "react-icons/md";
import Nav from "../Nav/Nav";

const Header = () => {
  const [show, setShow] = useState(false);

  const onChangeShow = () => {
    setShow(!show);
  };

  return (
    <header className={styles.background}>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <div className={styles.logo}>
            <img
              src={logo}
              className={styles.logoSvg}
              alt='logo'
              width='150px'
              height='50px'
            />
          </div>
          <div>
            <InputSearch placeholder='Search' value='' />
          </div>
          <div className={styles.nav}>
            <Nav />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
