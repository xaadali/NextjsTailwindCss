import ContractDemo from "../utils/demoContract";
import Web3 from "web3";

export const getBalance = async (account) => {
  let response = await ContractDemo.methods.balanceOf(account).call();
  return response;
};
export const getTotalSupply = async () => {
  let response = await ContractDemo.methods.totalSupply().call();
  return response;
};

export const TransferBalanceContract = async (address, unitvalue) => {
  let response = await ContractDemo.methods.transfer(address, unitvalue);
  return response.encodeABI();
};
