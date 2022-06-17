import React, { useEffect, useState } from "react";
import styles from "./about.module.scss";
import { useWeb3 } from "@3rdweb/hooks";
const About = () => {
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
        console.log(balanceInDecimal, "error");
      } else return null;
    } catch (error) {
      console.log(error, "static Error");
    }
  };
  useEffect(() => {
    getBalnce();
  }, []);

  const getBalance = async () => {
    try {
      let Balance = await getBalance();
    } catch (error) {
      console.log(error);
    }
  };
  return <div>index</div>;
};

export default About;
