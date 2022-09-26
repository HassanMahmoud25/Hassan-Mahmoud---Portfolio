import classes from "./Skill.module.css";

const Skill = (props) => {
  return (
    <div className={classes["skill-container"]}>
      <div className={classes["skill-label-container"]}>
        <h4 className={classes["skill-name"]}>{props.skillName}</h4>
        <p className={classes["skill-value"]}>{props.percentage}</p>
      </div>

      <div className={classes["skill-outer"]}>
        <div
          className={classes["skill-inner"]}
          style={{ width: props.percentage }}
        ></div>
      </div>
    </div>
  );
};

export default Skill;
