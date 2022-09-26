import Pen from "../Icons/Pen";
import Shop from "../Icons/Shop";
import Tele from "../Icons/Tele";
import Speaker from "../Icons/Speaker";

import classes from "./What.module.css";

const What = () => {
  return (
    <section id="what" className={classes.container}>
      <h2 className={classes.section_title}>What I Do</h2>
      <div className={classes.skills}>
        <div className={classes.skill}>
          <div className={classes["icon-container"]}>
            <Pen className={classes.icon} />
          </div>
          <div className={classes.description}>
            <h4 className={classes["skill-title"]}>Copywrite</h4>
            <p className={classes["skill-description"]}>
              Mauris neque libero, aliquet vel mollis nec, euismod sed tellus.
              Mauris convallis dictum elit id volutpat. Vivamus blandit, dolor
              vitae lacinia maximus, risus velit vehicula odio, a tincidunt
              turpis turpis tempus ex.
            </p>
          </div>
        </div>

        <div className={classes.skill}>
          <div className={classes["icon-container"]}>
            <Shop className={classes.icon} />
          </div>
          <div className={classes.description}>
            <h4 className={classes["skill-title"]}>Ecommerce</h4>
            <p className={classes["skill-description"]}>
              Mauris neque libero, aliquet vel mollis nec, euismod sed tellus.
              Mauris convallis dictum elit id volutpat. Vivamus blandit, dolor
              vitae lacinia maximus, risus velit vehicula odio, a tincidunt
              turpis turpis tempus ex.
            </p>
          </div>
        </div>

        <div className={classes.skill}>
          <div className={classes["icon-container"]}>
            <Tele className={classes.icon} />
          </div>
          <div className={classes.description}>
            <h4 className={classes["skill-title"]}>Web Design</h4>
            <p className={classes["skill-description"]}>
              Mauris neque libero, aliquet vel mollis nec, euismod sed tellus.
              Mauris convallis dictum elit id volutpat. Vivamus blandit, dolor
              vitae lacinia maximus, risus velit vehicula odio, a tincidunt
              turpis turpis tempus ex.
            </p>
          </div>
        </div>

        <div className={classes.skill}>
          <div className={classes["icon-container"]}>
            <Speaker className={classes.icon} />
          </div>
          <div className={classes.description}>
            <h4 className={classes["skill-title"]}>Marketing</h4>
            <p className={classes["skill-description"]}>
              Mauris neque libero, aliquet vel mollis nec, euismod sed tellus.
              Mauris convallis dictum elit id volutpat. Vivamus blandit, dolor
              vitae lacinia maximus, risus velit vehicula odio, a tincidunt
              turpis turpis tempus ex.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default What;
