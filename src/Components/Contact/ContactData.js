import classes from "./ContactData.module.css";

const ContactData = (props) => {
  return (
    <div className={classes.container}>
      {props.icon}
      <div className={classes.description}>
        <h4 className={classes.title}>{props.title}</h4>
        <p className={classes.text}>{props.text}</p>
      </div>
    </div>
  );
};

export default ContactData;
