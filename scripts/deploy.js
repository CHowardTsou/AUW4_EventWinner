const hre = require("hardhat");

async function main() {
  
  const winnerContract = "0xcF469d3BEB3Fc24cEe979eFf83BE33ed50988502";
  const EventWinner = await hre.ethers.getContractFactory("EventWinner");
  const eventWinner = await EventWinner.deploy();

  await eventWinner.deployed();

  console.log(
    `Contract deployed to ${eventWinner.address}`
  );

  await eventWinner.callWinner(winnerContract);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
