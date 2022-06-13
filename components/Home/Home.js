import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./home.module.scss";
import { useWeb3 } from "@3rdweb/hooks";
import Web3 from "web3";

const Home = () => {
  const { address, error } = useWeb3();
  const [AddressBalance, setAddressBalance] = useState();

  function GetProvider() {
    // const { account } = useActiveWeb3React();
    const web3 = new Web3();
    web3.setProvider(window.web3.currentProvider);
    return web3;
  }

  const getBalnce = async () => {
    try {
      let web3 = GetProvider();
      if (web3.currentProvider) {
        const account = await web3?.eth?.getAccounts();
        const balance = await web3?.eth?.getBalance(account[0]);
        const balanceInDecimal = web3?.utils?.fromWei(balance);
        setAddressBalance(balanceInDecimal);
      } else return null;
    } catch (error) {}
  };
  useEffect(() => {
    getBalnce();
  }, []);

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.hire}>
          <div className={styles.heading}>
            We code to bring your dreams to <span>LIFE.</span>
          </div>
          <div className={styles.text}>
            Once you share your dream, we envision it and then bring it to life
            with the latest technologies. You will always feel ahead of the game
            with your competitors.
          </div>
          <div className={styles.hirebtn}>
            <button>Hire Me</button>
          </div>
        </div>
        <div className={styles.headerlogo}>
          <div className={styles.logo}>
            <Image src="/giphy.gif" width={500} height={400} alt="logo" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
