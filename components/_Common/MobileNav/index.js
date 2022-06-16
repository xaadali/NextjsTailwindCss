import React from "react";
import styles from "./mobilenav.module.scss";
import { useSpring, animated } from "react-spring";
import { CgClose } from "react-icons/cg";
import { useRouter } from "next/router";
import Link from "next/link";
const MobileNav = ({ isMobileMenu, handleMobileNav }) => {
  const router = useRouter();
  const StylesProps = useSpring({
    opacity: isMobileMenu ? 0.95 : 0,
    marginTop: isMobileMenu ? 0 : -50,
  });
  if (isMobileMenu) {
    return (
      <>
        <animated.div
          style={StylesProps}
          className={styles.wrapper}
          id="content"
        >
          <div className={styles.closeMenu} onClick={handleMobileNav}>
            <CgClose className={styles.closeIcon} />
          </div>
          <div className={styles.mobileItem}>
            <div className={styles.items}>
              <div
                className={
                  router.pathname === "/" ? styles.active : styles.inactive
                }
              >
                <div className={styles.item}>
                  <Link href="/" className={styles.text}>
                    Home
                  </Link>
                </div>
              </div>
              <div
                className={
                  router.pathname === "/about" ? styles.active : styles.inactive
                }
              >
                <div className={styles.item}>
                  <Link href="/about" className={styles.text}>
                    About
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </animated.div>
      </>
    );
  } else return null;
};

export default MobileNav;
