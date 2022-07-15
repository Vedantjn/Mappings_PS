const contractA = artifacts.require("contractA");
const contractB = artifacts.require("contractB");
const contractC = artifacts.require("contractC");

contract("MappingUpdation", (accounts) => {
  let A, B, C;
  it("should deploy all the contracts", async () => {
    A = await contractA.deployed();
    B = await contractB.deployed();
    C = await contractC.deployed();

    const contractBAddress = await A.addressContractB();
    assert.equal(
      B.address,
      contractBAddress,
      "contract B address not set in contract A"
    );
  });

  it("should let contract B update mapping", async () => {
    await B.update(1, 100, A.address);
    const val = await A.getNum(1);
    assert.equal(val, 100, "mapping didnt updated");
  });

  // The next two tests should fail as contract C cant update mapping
  it("should let contract C update mapping", async () => {
    await C.update(2, 200, A.address);
    const val = await A.getNum(2);
    assert.equal(val, 200, "mapping didnt updated");
  });

  it("should let an EOA update mapping", async () => {
    await A.updateMapping(3, 300);
  });
});
