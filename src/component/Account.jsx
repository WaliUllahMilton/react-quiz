import { FaUser } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import classes from "../style/Account.module.css";
export default function Account() {
  const { currentUser, logout } = useAuth();
  return (
    <div className={classes.account}>
      {currentUser ? (
        <span className={classes.account}>
          <FaUser />
          <p>{currentUser.displayName}</p>
          <span onClick={logout}>
            <IoIosLogOut />
          </span>
        </span>
      ) : (
        <span className={classes.account}>
          <Link to="/signup">Signup</Link>
          <Link to="/signin">Login</Link>
        </span>
      )}
    </div>
  );
}
