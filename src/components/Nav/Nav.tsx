import { useState } from "react";
import styles from "./Nav.module.scss";
import { FaTelegramPlane } from "react-icons/fa";
import { AiFillBell } from "react-icons/ai";
import img from "../../assets/person.png";
import Avatar from "../../ui/Avatar/Avatar";
import ModalNotifications from "../ModalNotifications/ModalNotifications";

const Nav = () => {
  const [show, setShow] = useState<boolean>(false);
  return (
    <nav className={styles.nav}>
      <div className={styles.links}>
        <div className={styles.linkBorder}>
          <FaTelegramPlane className={styles.icon} size={20} />
        </div>
        <div className={styles.linkBorder}>
          <AiFillBell
            className={styles.icon}
            size={20}
            color={show ? "orange" : "black"}
            onClick={() => setShow(prev => !prev)}
          />
        </div>
        <div className={styles.avatar}>
          <Avatar url={img} width={40} height={40} userId='qwe' />
        </div>
      </div>
      <ModalNotifications show={show} />
    </nav>
  );
};

export default Nav;
