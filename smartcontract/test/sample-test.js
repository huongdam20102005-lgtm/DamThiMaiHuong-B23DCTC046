const { expect } = require("chai");

describe("FirstSmartContract", function () {
  it("Should return the new balance once it's changed", async function () {
    const FirstSmartContract = await ethers.getContractFactory("FirstSmartContract");
    const contract = await FirstSmartContract.deploy();
    await contract.deployed();

    await contract.setBalance(500000000);
    expect(await contract.getBalance()).to.equal(500000000);
  });
});
