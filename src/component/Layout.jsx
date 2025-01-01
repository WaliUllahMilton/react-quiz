import { Outlet } from "react-router-dom";
import classes from "../style/Layout.module.css";
import Nav from "./Nav";
export default function Layout() {
  return (
    <div>
      <Nav />
      <main className={classes.main}>
        <div className="container">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
