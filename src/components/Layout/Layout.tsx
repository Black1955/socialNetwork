import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import LinksBar from "../LinksBar/LinksBar";
import Header from "../Header/Header";
import styles from "./Layout.module.scss";
import { useRefreshQuery } from "../../services/user";
const Layout = () => {
  const navigate = useNavigate();
  const { isLoading, error } = useRefreshQuery({});

  useEffect(() => {
    //@ts-ignore
    if (error && error.status === 401) {
      navigate("/signin");
    }
  }, [error, navigate]);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className={styles.layout}>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.main}>
            <div>
              <div className={styles.bar}>
                <LinksBar />
              </div>
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
