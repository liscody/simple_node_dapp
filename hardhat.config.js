require("@nomicfoundation/hardhat-toolbox");

require("dotenv").config();
// require("@nomiclabs/hardhat-ethers");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337,
    },
    // sepolia: {
    //   url: `https://rpc-mumbai.maticvigil.com/v1/${process.env.MATICVIGIL_API_KEY}` || "",
    //   accounts: [process.env.PRIVATE_KEY] || "",
    // },
  },
};
