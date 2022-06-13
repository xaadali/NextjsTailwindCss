import React from "react";
import styles from "./exploreservice.module.scss";
const index = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.heading}>
            <label>Explore Our Services</label>
            <span>
              You have the dream; we have the technological roadmaps to
              end-to-end development of scalable solutions. We provide
              development services that adapt seamlessly to your project
              requirements and business needs.
            </span>
          </div>
          <div className={styles.cardsection}>
            <div className={styles.card}>
              <div className={styles.heading}>Mobile App Development</div>
              <div className={styles.text}>
                We provide complete iOS and Android application design,
                development, integration and deployment.
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.heading}>Web Development</div>
              <div className={styles.text}>
                We use a combination of the latest technologies to build secure,
                robust, and scalable enterprise-class apps.
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.heading}>UI & UX Design</div>
              <div className={styles.text}>
                Get a UI & UX design or a prototype of your dream project before
                you begin the main project. We have expertly skilled in-house
                designers and partners that will make your UI & UX designs stand
                out from the crowd.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
