import React from "react";
import styles from "./ourspecialization.module.scss";
import { FaReact } from "react-icons/fa";
import {
  DiNodejsSmall,
  DiWordpress,
  DiStreamline,
  DiMongodb,
} from "react-icons/di";
import { RiFlutterFill } from "react-icons/ri";
import {
  SiNuxtdotjs,
  SiLaravel,
  SiWeb3Dotjs,
  SiBlockchaindotcom,
} from "react-icons/si";
import { TbBrandNextjs, TbBrandVue } from "react-icons/tb";
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
            <div className={styles.Reactpulse}>
              <div className={styles.circle}>
                <div className={styles.react}>
                  <FaReact className={styles.icon} />
                </div>
              </div>
            </div>
            <div className={styles.Mysqlpulse}>
              <div className={styles.circle}>
                <div className={styles.sql}>
                  <DiStreamline className={styles.icon} />
                </div>
              </div>
            </div>
            <div className={styles.Wordpresspulse}>
              <div className={styles.circle}>
                <div className={styles.wordpress}>
                  <DiWordpress className={styles.icon} />
                </div>
              </div>
            </div>
            <div className={styles.Nodejspulse}>
              <div className={styles.circle}>
                <div className={styles.node}>
                  <DiNodejsSmall className={styles.icon} />
                </div>
              </div>
            </div>
            <div className={styles.Nextpulse}>
              <div className={styles.circle}>
                <div className={styles.next}>
                  <TbBrandNextjs className={styles.icon} />
                </div>
              </div>
            </div>
            <div className={styles.Vuepulse}>
              <div className={styles.circle}>
                <div className={styles.vue}>
                  <TbBrandVue className={styles.icon} />
                </div>
              </div>
            </div>
            <div className={styles.Mongodbpulse}>
              <div className={styles.circle}>
                <div className={styles.mongodb}>
                  <DiMongodb className={styles.icon} />
                </div>
              </div>
            </div>
            <div className={styles.Flutterpulse}>
              <div className={styles.circle}>
                <div className={styles.flutter}>
                  <RiFlutterFill className={styles.icon} />
                </div>
              </div>
            </div>
            <div className={styles.Nuxtpulse}>
              <div className={styles.circle}>
                <div className={styles.nuxt}>
                  <SiNuxtdotjs className={styles.icon} />
                </div>
              </div>
            </div>
            <div className={styles.Laravelpulse}>
              <div className={styles.circle}>
                <div className={styles.laravel}>
                  <SiLaravel className={styles.icon} />
                </div>
              </div>
            </div>
            <div className={styles.Blockpulse}>
              <div className={styles.circle}>
                <div className={styles.blockchain}>
                  <SiBlockchaindotcom className={styles.icon} />
                </div>
              </div>
            </div>
            <div className={styles.Web3pulse}>
              <div className={styles.circle}>
                <div className={styles.web3}>
                  <SiWeb3Dotjs className={styles.icon} />
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
