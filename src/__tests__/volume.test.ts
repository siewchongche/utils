import { getV2Volume, getV3Volume } from "../volume";

describe("Volume", () => {
  it("should return the correct volume for PancakeSwap V3", async () => {
    const result = await getV3Volume(51447270, 51447280);
    expect(result).toEqual({
      totalVolume: 0.003446578846705171,
      buyVolume: 0.001522171077073666,
    });
  });

  it("should return the correct volume for PancakeSwap V2", async () => {
    const result = await getV2Volume(56676880, 56676970);
    expect(result).toEqual({
      totalVolume: 0.001995055239988742,
      buyVolume: 0.001,
    });
  });
});
