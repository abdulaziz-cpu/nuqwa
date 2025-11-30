import { ethers } from "hardhat";

async function main() {
    const NuqwaDCoA = await ethers.getContractFactory("NuqwaDCoA");
    const dcoa = await NuqwaDCoA.deploy();

    await dcoa.waitForDeployment();

    console.log(
        `NuqwaDCoA deployed to ${dcoa.target}`
    );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
