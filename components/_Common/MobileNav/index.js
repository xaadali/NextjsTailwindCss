import React from "react";
import styles from "./mobilenav.module.scss";
const MobileNav = ({ isMobile, handleMobileNav }) => {
  return (
    <>
      {isMobile && (
        <div className={styles.wrapper} onClick={handleMobileNav}>
          Mobile Nav
        </div>
      )}
    </>
  );
};

export default MobileNav;
