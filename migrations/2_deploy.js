const contractA = artifacts.require("contractA");
const contractB = artifacts.require("contractB");
const contractC = artifacts.require("contractC");

module.exports = async function (deployer) {
  await deployer.deploy(contractB);
  var deployedContractB = await contractB.deployed();

  await deployer.deploy(contractA, deployedContractB.address);
  await deployer.deploy(contractC);
};
