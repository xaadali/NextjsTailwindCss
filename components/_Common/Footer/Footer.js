import React from "react";
import styles from "./footer.module.scss";
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";
import {
  TiSocialInstagram,
  TiSocialLinkedinCircular,
  TiSocialInstagramCircular,
} from "react-icons/ti";
import { BsFacebook } from "react-icons/bs";
import Image from "next/image";
const Footer = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.brand}>
              <div className={styles.footerlogo}>
                <Image
                  src="/logo.svg"
                  width={200}
                  height={200}
                  alt="footer-logo"
                />
              </div>
              <div className={styles.socialicons}>
                <div className={styles.icons}>
                  <BsFacebook className={styles.icon} />
                  <AiFillTwitterCircle className={styles.icontwitter} />
                  <TiSocialLinkedinCircular className={styles.iconlinkedin} />
                  <TiSocialInstagramCircular className={styles.iconinstagram} />
                </div>
              </div>
            </div>
            <div className={styles.addressinfo}>
              <label>Lahore Office</label>
              <span>+92 0300 1418889</span>
              <p>
                31b J3, opposite to Expo, next to Kumail`s Hotel, Johar Town,
                Lahore, 54782
              </p>
            </div>
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
