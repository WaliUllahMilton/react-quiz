import classes from "../style/Layout.module.css";
import Nav from "./Nav";

export default function Layout({ children }) {
  return (
    <div>
      <Nav />
      <main className={classes.main}>
        <div className="container">{children}</div>
      </main>
    </div>
  );
}
