import { ethers } from "hardhat";

describe("Greeter", () => {
	it("should return the new greeting once it's changed", async () => {
		// eslint-disable-next-line @typescript-eslint/naming-convention
		const Greeter = await ethers.getContractFactory("Greeter");
		const greeter = await Greeter.deploy("Hello, world!");
		await greeter.deployed();

		expect(await greeter.greet()).toBe("Hello, world!");

		const setGreetingTx = await greeter.setGreeting("Hola, mundo!");

		// Wait until the transaction is mined
		await setGreetingTx.wait();

		expect(await greeter.greet()).toBe("Hola, mundo!");
	});
});
