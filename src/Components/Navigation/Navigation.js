import { useState, useEffect } from "react";
import LinkedIn from "../Icons/LinkedIn";
import Telegram from "../Icons/Telegram";
import Github from "../Icons/Github";

import classes from "./Navigation.module.css";

const Navigation = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 1009);
  const [isMenuOpened, setIsMenuOpened] = useState(window.innerWidth > 1009);

  const clickMenuHandler = () => {
    setIsMenuOpened((prev) => !prev);
  };

  const handleResize = () => {
    setIsSmallScreen((prev) => {
      if (prev === false && window.innerWidth <= 1009) {
        setIsMenuOpened(false);
      }
      if (prev === true && window.innerWidth > 1009) {
        setIsMenuOpened(true);
      }

      return window.innerWidth <= 1009;
    });
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <header id="top" className={classes.header}>
      <div className={classes.container}>
        <div className={classes["header-logo"]}>
          <span className={classes["logo-symbol"]}>H</span>{" "}
          <span className={classes["logo-text"]}>
            Hassan &nbsp;
            <span className={classes["logo-name"]}>Mahmoud</span>
          </span>
        </div>
        <div className={classes["nav-container"]}>
          {(isMenuOpened || !isSmallScreen) && (
            <ul className={classes["header__nav-links"]}>
              <li className={classes["header__nav-link"]}>
                <a href="#what">About Me </a>
              </li>
              <li className={classes["header__nav-link"]}>
                <a href="#resume">Resume</a>
              </li>
              <li className={classes["header__nav-link"]}>
                <a href="#portfolio">Portfolio</a>
              </li>
              <li className={classes["header__nav-link"]}>
                <a href="#contact">Contact Me</a>
              </li>
              {isSmallScreen && (
                <div className={classes["social-icons"]}>
                  <a
                    href="https://www.linkedin.com/in/hassan-mahmoud-0b8695173/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <LinkedIn className={classes["social-icon"]} />
                  </a>
                  <a
                    href="https://t.me/Hassan_Mahmoud25"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Telegram className={classes["social-icon"]} />
                  </a>
                  <a
                    href="https://github.com/HassanMahmoud25"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Github className={classes["social-icon"]} />
                  </a>
                </div>
              )}
            </ul>
          )}
          <div className={classes.menu}>
            {isSmallScreen && !isMenuOpened && (
              <svg
                onClick={clickMenuHandler}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={3.2}
                stroke="currentColor"
                className={classes.icon}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}

            {isSmallScreen && isMenuOpened && (
              <svg
                onClick={clickMenuHandler}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={3.2}
                stroke="currentColor"
                className={classes.icon}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
