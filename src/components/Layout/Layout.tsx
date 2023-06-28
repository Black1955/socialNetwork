import { Outlet, useNavigate } from "react-router-dom";
import LinksBar from "../LinksBar/LinksBar";
import Header from "../Header/Header";
import styles from "./Layout.module.scss";
import { useRefreshQuery } from "../../services/user";
const Layout = () => {
  const navigate = useNavigate();
  const { isLoading, isSuccess, error } = useRefreshQuery({});
  if (isLoading) {
    return <h1>oleg</h1>;
  }
  //@ts-ignore
  if (error && error?.status == 401) {
    navigate("/signin");
  } else
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
