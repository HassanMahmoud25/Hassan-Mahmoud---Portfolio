import ArrowUp from "../Icons/ArrowUp";

import CV from "../assets/CV.pdf";

import classes from "./Hero.module.css";
import profile from "../assets/profile.jpg";
import { useEffect, useState } from "react";

const Hero = () => {
  const cvBtn = classes.btn + " " + classes.cvBtn;
  const contactBtn = classes.btn + " " + classes.contactBtn;

  const [scrollToTopBtn, setScrollToTopBtn] = useState(window.scrollY >= 150);
  const [smallScreen, setSmallScreen] = useState(window.innerWidth <= 1008);

  const displayScrollToTopBtn = () => {
    setScrollToTopBtn(window.scrollY >= 150);
  };

  const resizeHandler = () => {
    setSmallScreen(window.innerWidth <= 1008);
  };

  useEffect(() => {
    window.addEventListener("scroll", displayScrollToTopBtn);
    window.addEventListener("resize", resizeHandler);
  }, []);

  return (
    <section id="hero" className={classes.container}>
      <div className={classes.hero}>
        <div className={classes["hero__img-container"]}>
          <div className={classes["hero-img"]}>
            <img src={profile} alt="Hassan profile" />
          </div>
        </div>
        <div className={classes["hero-description"]}>
          <h4 className={classes.title}>Full Stack Web Developer</h4>
          <h1 className={classes.name}>Hassan Mahmoud</h1>
          <p className={classes.description}>
            Fusce tempor magna mi, non egestas velit ultricies nec. Aenean
            convallis, risus non condimentum gravida, odio mauris ullamcorper
            felis, ut venenatis purus ex eu mi. Quisque imperdiet lacinia urna,
            a placerat sapien pretium eu.
          </p>
          <div className={classes["home-btns"]}>
            <a href={CV} download className={cvBtn}>
              Download CV
            </a>
            <a href="#contact" className={contactBtn}>
              Contact
            </a>
          </div>
        </div>

        {scrollToTopBtn && !smallScreen && (
          <a href="#hero" className={classes["icon-container"]}>
            <ArrowUp className={classes.icon} />
          </a>
        )}
      </div>
    </section>
  );
};

export default Hero;
