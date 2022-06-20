import ContractDemo from "../utils/demoContract";
import Web3 from "web3";

export const getBalance = async (address) => {
  let response = await ContractDemo.methods.balanceOf(address).call();
  return response;
};
export const getTotalSupply = async () => {
  let response = await ContractDemo.methods.totalSupply().call();
  return response;
};
