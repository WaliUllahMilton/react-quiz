// import image from "../assets/images/3.jpg";
import classes from "../style/Videos.module.css";
export const Video = ({ title, noq, image }) => {
  return (
    <div className={classes.video}>
      <div className={classes.image}>
        <img
          src={`http://img.youtube.com/vi/${image}/maxresdefault.jpg`}
          alt="Video"
        />
      </div>
      <div className={classes.bottom}>
        <p className={classes.title}>{title}</p>
        <p>
          <span>{noq} Questions</span>
          <span>Total points : {noq * 5}</span>
        </p>
      </div>
    </div>
  );
};
