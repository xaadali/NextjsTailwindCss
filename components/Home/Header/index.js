import React from "react";
import Image from "next/image";
import styles from "./header.module.scss";
const Header = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.hire}>
            <div className={styles.heading}>
              We code to bring your dreams to <span>LIFE.</span>
            </div>
            <div className={styles.text}>
              Once you share your dream, we envision it and then bring it to
              life with the latest technologies. You will always feel ahead of
              the game with your competitors.
            </div>
            <div className={styles.hirebtn}>
              <button>Hire Me</button>
            </div>
          </div>
          <div className={styles.headerlogo}>
            <div className={styles.logo}>
              <Image
                src="/giphy.gif"
                width={500}
                height={400}
                alt="logo"
                loading="eager"
                priority={true}
                placeholder="blur"
                blurDataURL="/giphy.gif"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
