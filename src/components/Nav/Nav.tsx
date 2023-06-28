import { useState } from "react";
import styles from "./Nav.module.scss";
import { FaTelegramPlane } from "react-icons/fa";
import { AiFillBell } from "react-icons/ai";
import Avatar from "../../ui/Avatar/Avatar";
import ModalNotifications from "../ModalNotifications/ModalNotifications";
import { useAppSelector } from "../../hooks/useAppSelect/useAppSelector";
import { addHostName } from "../../helpFunctions/addHostname";
const Nav = () => {
  const { id, avatar_url } = useAppSelector(state => state.auth.user!);
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
          <Avatar
            url={addHostName(avatar_url)}
            width={40}
            height={40}
            userId={id}
          />
        </div>
      </div>
      <ModalNotifications show={show} />
    </nav>
  );
};

export default Nav;
