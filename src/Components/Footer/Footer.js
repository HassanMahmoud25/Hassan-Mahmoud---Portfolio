import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <ul className={classes.social_links}>
          <li className={classes.social_link}>
            <a
              href="https://www.linkedin.com/in/hassan-mahmoud-0b8695173/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li className={classes.social_link}>
            <a
              href="https://t.me/Hassan_Mahmoud25"
              target="_blank"
              rel="noreferrer"
            >
              Telegram
            </a>
          </li>
          <li className={classes.social_link}>
            <a
              href="https://github.com/HassanMahmoud25"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </li>
        </ul>
        <p className={classes.copyright}>&copy; 2022 All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
