import {HardhatRuntimeEnvironment} from 'hardhat/types';
import {DeployFunction} from 'hardhat-deploy/types';

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
	const {deployments, getNamedAccounts} = hre;
	const {deploy} = deployments;

	const {deployer} = await getNamedAccounts();

	const SETTINGS = [
		"0xA2c51FC0d268CcA1ee0cA00Dd0D6b616028fb609", // admin
		3,  // max claims
		259200, // time for reclaim
		259200, // time for challenge
		"0xA2c51FC0d268CcA1ee0cA00Dd0D6b616028fb609", // ubi burner
		0, // admin fee
		0, // ubi fee
		0, // max extra fee
		86400, // min time for service
		864000, // max time for service
		86400, // min time for claim
		864000 // max time for claim
	]

	const GOVERNOR = "0xA2c51FC0d268CcA1ee0cA00Dd0D6b616028fb609"
	const ARBITRATOR = "0xf107003f55f7153ea4fc1666936e47727643cc14"
	const EXTRA_DATA = "0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001"
	// this needs to be changed to make it work with yubiai. pending: evidence-display
	const METAEVIDENCE = "/ipfs/QmY7Mz3Uno1gXBcUzJgAwchd5i8NFC3vMrRHFUXyryUm3L/metaEvidence.json"

	await deploy('Yubiai', {
		from: deployer,
		args: [SETTINGS, GOVERNOR, ARBITRATOR, EXTRA_DATA, METAEVIDENCE],
		log: true,
		autoMine: true, // speed up deployment on local network (ganache, hardhat), no effect on live networks
	});
};
export default func;
func.tags = ['Yubiai'];
