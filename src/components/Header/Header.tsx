import logo from "../../assets/logo.png";
import Button from "../../ui/Button/Button";
import InputSearch from "../../ui/InputSearch/InputSearch";
import styles from "./Header.module.scss";
import { FaTelegramPlane } from "react-icons/fa";
import { AiFillBell } from "react-icons/ai";
const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={logo} alt='logo' width='150px' height='50px' />
      </div>
      <div>
        <InputSearch placeholder='Search' value='' />
      </div>
      <nav className={styles.nav}>
        <div>
          <FaTelegramPlane />
          <AiFillBell />
        </div>
        <Button text='Create' variant='Orange' />
      </nav>
    </header>
  );
};

export default Header;
