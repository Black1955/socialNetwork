import { Outlet } from "react-router-dom";
import LinksBar from "../LinksBar/LinksBar";
import Header from "../Header/Header";
import styles from "./Layout.module.scss";
const Layout = () => {
  return (
    <div className={styles.layout}>
      <Header />
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.main}>
            <div className={styles.bar}>
              <LinksBar />
            </div>
            <div className={styles.outlet}>
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
