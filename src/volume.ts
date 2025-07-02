import { createPublicClient, formatEther, getAbiItem, http } from "viem";
import { PANCAKE_V3_POOL_ABI } from "./abi/PancakeV3Pool";
import { PANCAKE_V2_POOL_ABI } from "./abi/PancakeV2Pool";
import "dotenv/config";

const publicClient = createPublicClient({
  transport: http(process.env["ALCHEMY_API_URL"]), // testnet
});

const PANCAKESWAP_MAIGA_BNB_10000_POOL_ADDRESS =
  "0xae84255b7F6A6f0033327e554cfe64d520926F25"; // testnet, 1% fee
const PANCAKESWAP_MAIGA_BNB_V2_POOL_ADDRESS =
  "0xDfbC1cc8f726c2c59BBb391b92f414Fc6532235e"; // testnet

export const getV3Volume = async (
  fromBlock: number,
  toBlock: number
): Promise<{ totalVolume: number; buyVolume: number }> => {
  const swapEvents = await publicClient.getLogs({
    address: PANCAKESWAP_MAIGA_BNB_10000_POOL_ADDRESS,
    event: getAbiItem({
      abi: PANCAKE_V3_POOL_ABI,
      name: "Swap",
    }),
    fromBlock: BigInt(fromBlock),
    toBlock: BigInt(toBlock),
  });

  // Both in BNB
  let totalVolume = 0n;
  let buyVolume = 0n;

  for (const event of swapEvents) {
    // amount0 is MAIGA, amount1 is BNB
    // TODO: double check again if amount1 is BNB in mainnet deployment
    const amount1 = event.args.amount1!;
    // We take the absolute value since we count both buys and sells as volume
    const absAmount1 = amount1 < 0n ? -amount1 : amount1;
    totalVolume += absAmount1;

    // Track buy volume (when amount1 is positive, it means MAIGA is being bought)
    if (amount1 > 0n) {
      buyVolume += absAmount1;
    }
  }

  return {
    totalVolume: Number(formatEther(totalVolume)),
    buyVolume: Number(formatEther(buyVolume)),
  };
};

export const getV2Volume = async (
  fromBlock: number,
  toBlock: number
): Promise<{ totalVolume: number; buyVolume: number }> => {
  const swapEvents = await publicClient.getLogs({
    address: PANCAKESWAP_MAIGA_BNB_V2_POOL_ADDRESS,
    event: getAbiItem({
      abi: PANCAKE_V2_POOL_ABI,
      name: "Swap",
    }),
    fromBlock: BigInt(fromBlock),
    toBlock: BigInt(toBlock),
  });

  // Both in BNB
  let totalVolume = 0n;
  let buyVolume = 0n;

  for (const event of swapEvents) {
    // amount0 is MAIGA, amount1 is BNB
    // TODO: double check again if amount1 is BNB in mainnet deployment
    const amountOut = event.args.amount1Out!;
    const amountIn = event.args.amount1In!;
    totalVolume += amountIn + amountOut;

    // Track buy volume (when amountIn is positive, it means MAIGA is being bought)
    if (amountIn > 0n) {
      buyVolume += amountIn;
    }
  }

  return {
    totalVolume: Number(formatEther(totalVolume)),
    buyVolume: Number(formatEther(buyVolume)),
  };
};
