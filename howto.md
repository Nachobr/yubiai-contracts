## Before anything, get these keys

Get the private key of the wallet you're going to use to deploy the contracts.

Get an etherscan api key, same deal. Goto https://etherscan.io and Sign Up. You need it to verify contracts.

Get an infura key, https://infura.io

Add all these to the .env. In ETH_NODE_URI, just overwrite the `<apiKey>` with the infura key.

## Sepolia

In `src/Yubiai.sol`, change the _WXDAI_ address to `0x3a184Af49CFc34594E167a1c5b5909FbE41967f1`. (This is a WETH contract)

Go to https://centralizedarbitrator.kleros.io and create an arbitrator. Paste that arbitrator in the proper constant, in the deployment script: `deploy/deploy-yubiai.ts`.

`yarn deploy sepolia`

`yarn verify sepolia`

## Gnosis Chain

In `src/Yubiai.sol`, change the _WXDAI_ address to `0xe91D153E0b41518A2Ce8Dd3D7944Fa863463a97d` (This is actual WXDAI on Gnosis Chain)

In `deploy/deploy-yubiai.ts`, change the Arbitrator to `0x9C1dA9A04925bDfDedf0f6421bC7EEa8305F9002`

`yarn deploy gnosis`

You want to verify in gnosisscan. To do so, go to https://gnosisscan.io and get an API key. Paste that key in tne `ETHERSCAN_API_KEY` in the env, and run:

`yarn verify gnosis --api-url https://api.gnosisscan.io`

Blockscout didn't work for me, possibly because they're unable to verify contracts compiled with `viaIR`. So it's left unverified. This is how it would have worked, after getting a blockscout key in `ETHERSCAN_API_KEY`:

`yarn verify gnosis --api-url https://blockscout.com/xdai/mainnet`

## BSC

In `src/Yubiai.sol`, change the _WXDAI_ address to `0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c` (This is WBNB on BSC)

In `deploy/deploy-yubiai.ts`, change the Arbitrator to `0xe40f68004f6b91297b0807d54a5b68dbb68097df` (this a centralized arbitrator, whose owner is `0xA2c51FC0d268CcA1ee0cA00Dd0D6b616028fb609`)

`yarn deploy bsc`

You want to verify in bscscan. To do so, go to https://bscscan.io and get an API key. Paste that key in tne `ETHERSCAN_API_KEY` in the env, and run:

`yarn verify bsc --api-url https://api.bscscan.com/`
