import React, { useEffect, useState } from "react";
import Header from "./Header";
import Cards from "./Cards";
import ExploreService from "./ExploreService";
import OurPartner from "./OurPartner";
import FewReasons from "./FewReasons";
import HowWork from "./HowWork";
import OurSpecialization from "./OurSpecialization";
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
  });

  return (
    <>
      <Header />
      <Cards />
      <OurSpecialization />
      <ExploreService />
      <OurPartner />
      <FewReasons />
      <HowWork />
    </>
  );
};

export default Home;
