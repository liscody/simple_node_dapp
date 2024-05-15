const hre = require("hardhat");

async function main() {

    // contract Test 
    const Test = await hre.ethers.getContractFactory("Test");
    const test = await Test.deploy();
    const addr = await test.getAddress();
    console.log("Test deployed to:", addr);


}

main()
  .then(() => process.exit(0))

  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

  // npx hardhat run scripts/deploy.js --network hardhat
