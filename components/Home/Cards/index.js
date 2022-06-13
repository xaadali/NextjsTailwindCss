import React from "react";
import styles from "./card.module.scss";
const Cards = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.card}>
            <div className={styles.heading}>Expertise</div>
            <div className={styles.text}>
              We always stay up to date in the tech industry to ensure our
              expertise can execute all projects smoothly.
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.heading}>Communication</div>
            <div className={styles.text}>
              You will be able to communicate directly with our developers
              during all stages of project development via Slack, WhatsApp,
              Skype, or in-person at our international office.
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.heading}>Transparency</div>
            <div className={styles.text}>
              We are completely open about pricing structure, development
              methods, technology standards, and anything else that might affect
              the end product.
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.heading}>Experience</div>
            <div className={styles.text}>
              We have experience in building small to large enterprise grade
              software. We have been serving clients globally for seven years.
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.heading}>Reliability</div>
            <div className={styles.text}>
              We will always keep you informed on project status and deliver
              results on time. Each project comes with our guarantee of client
              support for 1 year at no additional cost.
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.heading}>Scalable Solution</div>
            <div className={styles.text}>
              We build scalable solutions to extend your project as your
              business grows, and never stop working on it. Which means you will
              not need to reinvest in and rebuild the same project.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
