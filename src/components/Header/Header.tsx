import logo from "../../assets/logo.png";
import styles from "./Header.module.scss";
import Nav from "../Nav/Nav";
import FindUser from "../FindUser/FindUser";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className={styles.background}>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <Link to='/'>
            <div className={styles.logo}>
              <img
                src={logo}
                className={styles.logoSvg}
                alt='logo'
                width='150px'
                height='50px'
              />
            </div>
          </Link>
          <div>
            <FindUser />
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
