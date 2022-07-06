import Image from "next/image";
import React from "react";
import styles from "./navigation.module.scss";
import { SiFacebook } from "react-icons/si";
import {
  RiSearchEyeLine,
  RiHomeHeartFill,
  RiFlag2Fill,
  RiMessage3Fill,
} from "react-icons/ri";
import { MdSlowMotionVideo } from "react-icons/md";
import { FaCartArrowDown } from "react-icons/fa";
import { HiOutlineUserGroup } from "react-icons/hi";
import { TbStack2 } from "react-icons/tb";
import { BsFillBellFill } from "react-icons/bs";
import { AiFillCaretDown } from "react-icons/ai";
const Navigation = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.left}>
          <SiFacebook className={styles.icon} />
          <div className={styles.searchfile}>
            <RiSearchEyeLine className={styles.icons} />
            <input type="Search" placeholder="Search Facebook" />
          </div>
        </div>
        <div className={styles.center}>
          <RiHomeHeartFill className={styles.icon} />
          <RiFlag2Fill className={styles.icon} />
          <MdSlowMotionVideo className={styles.icon} />
          <FaCartArrowDown className={styles.icon} />
          <HiOutlineUserGroup className={styles.icon} />
        </div>
        <div className={styles.right}>
          <div className={styles.profile}>
            <Image
              src="/profile.jpg"
              width={30}
              height={30}
              layout="fixed"
              alt=""
              className={styles.pic}
            />
            <div className={styles.name}>John Doe</div>
          </div>
          <div className={styles.notification}>
            <TbStack2 className={styles.icons} />
          </div>
          <div className={styles.notification}>
            <RiMessage3Fill className={styles.icons} />
          </div>
          <div className={styles.notification}>
            <BsFillBellFill className={styles.icons} />
          </div>
          <div className={styles.menu}>
            <AiFillCaretDown className={styles.icons} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
