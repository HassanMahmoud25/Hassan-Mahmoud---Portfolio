import Skill from "./Skill";

import classes from "./SkillsStyle.module.css";

const DesignSkills = () => {
  return (
    <div className={classes["skills-container"]}>
      <h2 className={classes.title}>Design Skills</h2>
      <div className={classes.skills}>
        <Skill skillName="UI/UX Design" percentage="95%" />
        <Skill skillName="Print Design" percentage="75%" />
        <Skill skillName="Graphic Design" percentage="85%" />
        <Skill skillName="Logo Design" percentage="90%" />
      </div>
    </div>
  );
};

export default DesignSkills;
