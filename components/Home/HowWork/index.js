import React from "react";
import styles from "./howwork.module.scss";
import { FaWpforms } from "react-icons/fa";
import { AiOutlineDatabase } from "react-icons/ai";
import { BiClipboard, BiBox, GrTestDesktop } from "react-icons/bi";
const HowWork = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.heading}>
            <label>How We Work</label>
            <p>Our work process is very simple.</p>
          </div>
          <div className={styles.work}>
            <div className={styles.card}>
              <div className={styles.logo}>
                <div className={styles.circlediv}>
                  <FaWpforms className={styles.icon} />
                </div>
              </div>
              <div className={styles.text}>
                Identify project <br />
                requirements or stories
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.logo}>
                <div className={styles.circlediv}>
                  <BiBox className={styles.icon} />
                </div>
              </div>
              <div className={styles.text}>
                Add project tasks plan in <br />a management tool
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.logo}>
                <div className={styles.circlediv}>
                  <FaWpforms className={styles.icon} />
                </div>
              </div>
              <div className={styles.text}>
                Push updates to staging <br />
                server
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.logo}>
                <div className={styles.circlediv}>
                  <AiOutlineDatabase className={styles.icon} />
                </div>
              </div>
              <div className={styles.text}>
                Make project ready for
                <br />
                production deployment
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowWork;
