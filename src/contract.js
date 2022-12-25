
import web3 from "./web3";
import abi from "./abi.json";

const instance = new web3.eth.Contract(
  JSON.parse(JSON.stringify(abi)),
  '0x1Efca937eB08ffDD8279Bcdb9E16d9E41F643A75'
);

export default instance;
