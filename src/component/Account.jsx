import classes from "../style/Account.module.css";

export default function Account() {
  return (
    <div className={classes.account}>
      {/* <>
        <span className="material-icons-outlined" title="Account">
          account_circle
        </span>
        <span> logout </span>
      </> */}
      {/* ) : ( */}
      <>
        <a to="/signup">Signup</a>
        <a to="/login">Login</a>
      </>
      {/* )} */}
    </div>
  );
}
