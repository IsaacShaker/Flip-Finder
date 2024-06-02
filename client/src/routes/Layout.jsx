import { Outlet, Link } from "react-router-dom";
import Header from "../components/Header";
import styles from "./Layout.module.css";

const Layout = () => {
  return (
    <div className={styles.layout}>
      <Header />
      <div className={styles.content}>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
