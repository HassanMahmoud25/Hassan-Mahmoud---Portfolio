import classes from "./SectionHeader.module.css";

const SectionHeader = (props) => {
  return (
    <div id={props.id} className={classes.container}>
      <div className={classes["section_title-container"]}>
        <div className={classes["sub-container"]}>
          <h1 className={classes["section-title"]}>{props.head}</h1>
          <h4 className={classes.years}>{props.addition}</h4>
        </div>
      </div>
    </div>
  );
};

export default SectionHeader;
