import React from "react";
import styles from "./ourspecialization.module.scss";
import { FaReact } from "react-icons/fa";
import { DiNodejsSmall, DiWordpress, DiStreamline } from "react-icons/di";
const OurSpecialization = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.heading}>
            <label>Our Specialization</label>
            <p>
              We use a network of tech stack to get the best possible output.
            </p>
          </div>

          <div className={styles.specialization}>
            <div className={styles.outerpulse}>
              <div className={styles.circlereact}>
                <div className={styles.react}>
                  <FaReact className={styles.icon} />
                </div>
              </div>
            </div>
            <div className={styles.outerpulse}>
              <div className={styles.circlereact}>
                <div className={styles.react}>
                  <DiStreamline className={styles.icon} />
                </div>
              </div>
            </div>
            <div className={styles.outerpulse}>
              <div className={styles.circlereact}>
                <div className={styles.react}>
                  <DiWordpress className={styles.icon} />
                </div>
              </div>
            </div>
            <div className={styles.outerpulse}>
              <div className={styles.circlereact}>
                <div className={styles.react}>
                  <DiNodejsSmall className={styles.icon} />
                </div>
              </div>
            </div>
            <div className={styles.outerpulse}>
              <div className={styles.circlereact}>
                <div className={styles.react}>
                  <FaReact className={styles.icon} />
                </div>
              </div>
            </div>
            <div className={styles.outerpulse}>
              <div className={styles.circlereact}>
                <div className={styles.react}>
                  <FaReact className={styles.icon} />
                </div>
              </div>
            </div>
            <div className={styles.outerpulse}>
              <div className={styles.circlereact}>
                <div className={styles.react}>
                  <FaReact className={styles.icon} />
                </div>
              </div>
            </div>
            <div className={styles.outerpulse}>
              <div className={styles.circlereact}>
                <div className={styles.react}>
                  <FaReact className={styles.icon} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurSpecialization;
