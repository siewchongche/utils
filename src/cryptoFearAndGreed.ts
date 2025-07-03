export const getCryptoFearAndGreed = async () => {
  // Normally, crypto fear and greed index update every 24 hours UTC
  // Hence, cryptoFearAndGreed will be remain same in 24 hours UTC
  const fngResponse = await fetch("https://api.alternative.me/fng/");
  const fngData = await fngResponse.json();
  const cryptoFearAndGreed = Number(fngData.data[0].value);
  // Convert cryptoFearAndGreed to a number between 0.9 and 1.1, given the default value is 1
  // Fear and Greed index ranges from 0-100, where 50 is neutral (should map to 1.0)
  // 0 (extreme fear) maps to 0.9, 50 (neutral) maps to 1.0, 100 (extreme greed) maps to 1.1
  const normalizedCryptoFearAndGreed = 0.9 + (cryptoFearAndGreed / 100) * 0.2;
  return normalizedCryptoFearAndGreed;
};
