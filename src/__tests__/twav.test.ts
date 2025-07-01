import { isValidVolume } from "../twav";

describe("Time-Weighted Average Volume", () => {
  it("should return true if the new volume is within 10% of the time-weighted average volume", () => {
    const volume7days = new Array(10080).fill(100);
    const result = isValidVolume(volume7days, 110);
    expect(result).toBe(true);
  });

  it("should return false if the new volume is more than 10% of the time-weighted average volume", () => {
    const volume7days = new Array(10080).fill(100);
    const result = isValidVolume(volume7days, 120);
    expect(result).toBe(false);
  });

  it("should return true if the new volume is 0", () => {
    const volume7days = new Array(10080).fill(100);
    const result = isValidVolume(volume7days, 0);
    expect(result).toBe(true);
  });

  it("should return true when volume7days array has insufficient data", () => {
    const insufficientVolume = new Array(1000).fill(100);
    const result = isValidVolume(insufficientVolume, 200);
    expect(result).toBe(true);
  });
});
