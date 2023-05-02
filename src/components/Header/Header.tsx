import logo from "../../assets/logo.png";
import { useState } from 'react'
import InputSearch from "../../ui/InputSearch/InputSearch";
import styles from "./Header.module.scss";
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import { MdKeyboardArrowRight } from 'react-icons/md'
import Nav from "../Nav/Nav";


const Header = () => {
  const [show, setShow] = useState(false);


  const onChangeShow = () => {
    setShow(!show)
  }


  return (

    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={logo} className={styles.logoSvg} alt='logo' width='150px' height='50px' />
        <InputSearch placeholder='Search' value='' />
      </div>
      <div>
      </div>
      {window.innerWidth > 540 && window.innerWidth < 720 ? <MdOutlineKeyboardArrowDown onClick={onChangeShow} className={styles.arrow} /> : null}
      {window.innerWidth < 540 ? <MdKeyboardArrowRight onClick={onChangeShow} className={styles.arrow} /> : null}
      {window.innerWidth > 720 ? <Nav/> : null}
      {show ?<Nav/> : null}
    </header>
  );
};

export default Header;
