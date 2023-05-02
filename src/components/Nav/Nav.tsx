import Button from "../../ui/Button/Button";
import styles from "./Nav.module.scss";
import { FaTelegramPlane } from "react-icons/fa";
import { AiFillBell } from "react-icons/ai";
import img from '../../assets/person.png'
import Avatar from "../../ui/Avatar/Avatar";


const Nav = () => {
  return (
        <nav className={styles.nav}>
          <div className={styles.links}>
            <FaTelegramPlane className={styles.icon} />
            <AiFillBell className={styles.icon} />

            <div className={styles.avatar}>
              <Avatar url={img} width={20} height={20} />
            </div>

          </div>
          <Button text='Create' variant='Orange' />
        </nav>
  );
};

export default Nav;
