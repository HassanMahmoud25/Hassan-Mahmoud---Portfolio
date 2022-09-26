import classes from "./Item.module.css";

const Item = (props) => {
  return (
    <div className={classes["item-container"]}>
      <div className={classes["item-header"]}>
        <h5 className={classes["date"]}>{props.date}</h5>
        <span className={classes["where"]}>{props.place}</span>
      </div>
      <div className={classes["item-description"]}>
        <h4 className={classes.title}>{props.title}</h4>
        <p className={classes.description}>{props.description}</p>
      </div>
    </div>
  );
};

export default Item;
