import Image from "next/image";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./navigation.module.scss";
import { useWeb3 } from "@3rdweb/hooks";
const Navigation = () => {
  const { connectWallet, address, error } = useWeb3();
  // console.log(error, "error");
  // console.log(address, "address");
  const router = useRouter();
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.brandlogo}>
            <Image src="/profile.svg" width={80} height={54} alt="Profile" />
          </div>
          <div className={styles.navItems}>
            <div
              className={
                router.pathname === "/" ? styles.active : styles.inactive
              }
            >
              <div className={styles.item}>
                <Link href="/" className={styles.text}>
                  Home
                </Link>
                <div className={styles.activebar}></div>
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
                <div className={styles.activebar}></div>
              </div>
            </div>
            <div
              className={
                router.pathname === "/sign-up" ? styles.active : styles.inactive
              }
            >
              <div className={styles.item}>
                <Link href="/sign-up" className={styles.text}>
                  Sign Up
                </Link>
                <div className={styles.activebar}></div>
              </div>
            </div>
            <div
              className={
                router.pathname === "/login" ? styles.active : styles.inactive
              }
            >
              <div className={styles.item}>
                <Link href="/login" className={styles.text}>
                  Login
                </Link>
                <div className={styles.activebar}></div>
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
      </div>
    </>
  );
};

export default Navigation;
