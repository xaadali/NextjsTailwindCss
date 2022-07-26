import React from "react";
import styles from "./mobilenav.module.scss";
import { useSpring, animated } from "react-spring";
import { CgClose } from "react-icons/cg";
import { useRouter } from "next/router";
import { useWeb3 } from "@3rdweb/hooks";
import Link from "next/link";
import Image from "next/image";
const MobileNav = ({ isMobileMenu, handleMobileNav }) => {
  const { connectWallet, address, error } = useWeb3();
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
                onClick={handleMobileNav}
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
                onClick={handleMobileNav}
              >
                <div className={styles.item}>
                  <Link href="/about" className={styles.text}>
                    About
                  </Link>
                </div>
              </div>
              <div
                className={
                  router.pathname === "/sign-up"
                    ? styles.active
                    : styles.inactive
                }
                onClick={handleMobileNav}
              >
                <div className={styles.item}>
                  <Link href="/sign-up" className={styles.text}>
                    Sign Up
                  </Link>
                </div>
              </div>
              <div
                className={
                  router.pathname === "/login" ? styles.active : styles.inactive
                }
                onClick={handleMobileNav}
              >
                <div className={styles.item}>
                  <Link href="/login" className={styles.text}>
                    Login
                  </Link>
                </div>
              </div>
              <button
                className={styles.button}
                type="submit"
                onClick={() => {
                  window.ethereum === undefined
                    ? window
                        .open(
                          "https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en",
                          "_blank"
                        )
                        .focus()
                    : connectWallet("injected");
                }}
              >
                <Image
                  src={"/wallet-icon.png"}
                  width={30}
                  height={25}
                  alt="Wallet-Connect"
                />
                <span>
                  {address
                    ? `${address.substring(0, 6)}...${address.substring(
                        address.length - 4
                      )}`
                    : "Connect MetaMask"}
                </span>
              </button>
            </div>
          </div>
        </animated.div>
      </>
    );
  } else return null;
};

export default MobileNav;
