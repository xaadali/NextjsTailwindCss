import React from "react";
import styles from "./footer.module.scss";
const Footer = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.footerlogo}></div>
          </div>
          <div className={styles.copyright}>
            <span>Superior Alumni, a software development agency</span>
            <span>© 2022 Superior Alumni. All rights reserved</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
