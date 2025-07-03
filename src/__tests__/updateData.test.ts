import { createPublicClient, http, parseEther } from "viem";
import { OMAIGA_TOKEN_ABI } from "../abi/OMaiga";
import "dotenv/config";

const publicClient = createPublicClient({
  transport: http(process.env["ALCHEMY_API_URL"]),
});

const OMAIGA_TOKEN_ADDRESS = "0x250E40c339F32D0B2871D7e83A2b13b03337d3Fe"; // testnet

describe("updateData", () => {
  it("should able to estimate updateData", async () => {
    // Fake data
    const data = [
      {
        // Sample code in volume.ts
        buyRatio: parseEther("1"),
        // Sample code in cryptoFearAndGreed.ts
        cryptoFearAndGreed: parseEther("1"),
        // Current volume
        volume: parseEther("1"),
        // Always false
        isFlashLoan: false,
        // Sample code in washTrading.ts, TODO
        isWashTrading: false,
        // Always false for now
        isLiquiditySniping: false,
        // Fetch all records within 24 hours from database and sum up volume
        volume24Hrs: parseEther("10"),
        // Fetch all records between 48 hours and 24 hours from database and sum up volume
        volumePrevious24Hrs: parseEther("10"),
        // Time now in seconds
        timestamp: BigInt(Math.floor(Date.now() / 1000)),
      },
    ];
    const gas = await publicClient.estimateContractGas({
      // updateData is only callable by admin
      // in testnet, admin is 0x860e53ec01b573e8cbd0ba3c78e0426dea11327c
      account: "0x860e53ec01b573e8cbd0ba3c78e0426dea11327c",
      address: OMAIGA_TOKEN_ADDRESS,
      abi: OMAIGA_TOKEN_ABI,
      functionName: "updateData",
      args: [data],
    });
    expect(gas).toBeGreaterThan(0);
  });
});
