import { useState, useEffect } from "react";
import LinkedIn from "../Icons/LinkedIn";
import Telegram from "../Icons/Telegram";
import Github from "../Icons/Github";

import logo from "../assets/logo.png";

import classes from "./Navigation.module.css";

const Navigation = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 1009);
  const [isMenuOpened, setIsMenuOpened] = useState(window.innerWidth > 1009);
  const [showShadow, setShowShadow] = useState(window.scrollY > 0);

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

  const clickLinkHandler = () => {
    if (isSmallScreen) setIsMenuOpened(false);
  };

  const handleScroll = () => {
    setShowShadow(window.scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      id="top"
      className={
        showShadow
          ? classes.header + " " + classes["header-shadow"]
          : classes.header
      }
    >
      <div className={classes.container}>
        <div className={classes["header-logo"]}>
          <img
            className={classes["header-logo-img"]}
            src={logo}
            alt="Portofolio logo"
          />
        </div>
        <div className={classes["nav-container"]}>
          <ul
            className={
              isMenuOpened || !isSmallScreen
                ? classes["header__nav-links"] + " " + classes["show_smoothly"]
                : classes["header__nav-links"]
            }
          >
            <li
              onClick={clickLinkHandler}
              className={classes["header__nav-link"]}
            >
              <a href="#what">About Me </a>
            </li>
            <li
              onClick={clickLinkHandler}
              className={classes["header__nav-link"]}
            >
              <a href="#resume">Resume</a>
            </li>
            <li
              onClick={clickLinkHandler}
              className={classes["header__nav-link"]}
            >
              <a href="#portfolio">Portfolio</a>
            </li>
            <li
              onClick={clickLinkHandler}
              className={classes["header__nav-link"]}
            >
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
