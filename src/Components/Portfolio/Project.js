import classes from "./Project.module.css";

const Project = (props) => {
  return (
    <div className={classes["project-container"]}>
      <img
        className={classes["project-img"]}
        src={props.src}
        alt="Project name"
      />
      <div className={classes["project-details"]}>
        <h4 className={classes["project-name"]}>{props.name}</h4>
        <div className={classes.links}>
          <a href={props.href} className={classes.link}>
            View Demo
          </a>
          <a href={props.href} className={classes.link}>
            Github Repo
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
