import image from "../assets/images/3.jpg";
import classes from "../style/Videos.module.css";
export const Video = () => {
  return (
    <div className={classes.video}>
      <div className={classes.image}>
        <img src={image} alt="Video" />
      </div>
      <p className={classes.title}>
        #23 React Hooks Bangla - React useReducer hook Bangla
      </p>
      <p>
        <span>10 questions</span>
        <span>Score : Not taken yet</span>
      </p>
    </div>
  );
};
