import Heart from "../Icons/Heart";
import Watch from "../Icons/Watch";
import Star from "../Icons/Star";
import Coffee from "../Icons/Coffee";

import classes from "./Facts.module.css";

const Facts = () => {
  return (
    <section id="facts" className={classes.container}>
      <h2 className={classes.section_title}>Fun Facts</h2>
      <div className={classes.facts}>
        <div className={classes.fact}>
          <div className={classes["icon-container"]}>
            <Heart className={classes.icon} />
          </div>
          <h4 className={classes.title}>Happy Clients</h4>
          <p className={classes.number}>578</p>
        </div>

        <div className={classes.fact}>
          <div className={classes["icon-container"]}>
            <Watch className={classes.icon} />
          </div>
          <h4 className={classes.title}>Working Hours</h4>
          <p className={classes.number}>4,780</p>
        </div>

        <div className={classes.fact}>
          <div className={classes["icon-container"]}>
            <Star className={classes.icon} />
          </div>
          <h4 className={classes.title}>Awards Won</h4>
          <p className={classes.number}>15</p>
        </div>

        <div className={classes.fact}>
          <div className={classes["icon-container"]}>
            <Coffee className={classes.icon} />
          </div>
          <h4 className={classes.title}>Coffee Consumed</h4>
          <p className={classes.number}>1,286</p>
        </div>
      </div>
    </section>
  );
};

export default Facts;
