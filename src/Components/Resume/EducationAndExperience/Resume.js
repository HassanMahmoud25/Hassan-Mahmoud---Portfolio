import SectionHeader from "../../Common/SectionHeader";
import DesignSkills from "../Skills/DesignSkills";
import CodingSkills from "../Skills/CodingSkills";
import Education from "./Education";
import Experience from "./Experience";
import classes from "./Resume.module.css";

const Resume = () => {
  return (
    <section>
      <SectionHeader
        id="resume"
        head="Resume"
        addition="1 Year of Experience"
      />

      <div className={classes["section_body-container"]}>
        <div className={classes["section_body"]}>
          <Education />
          <Experience />
          <DesignSkills />
          <CodingSkills />
        </div>
      </div>

    </section>
  );
};

export default Resume;
