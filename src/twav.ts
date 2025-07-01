const maxDiffInPerc = 10; // 10%, to confirm again
const periodPerVolume = 5; // 5 minutes

// This function expect each volume is snapshot in the same period i.e. 5 minutes
export const isValidVolume = (volume7days: number[], newVolume: number) => {
  // check if the volume7days is valid
  if (volume7days.length !== 7 * 24 * 12 * periodPerVolume) {
    console.log("insufficient volume7days");
    // If the volume7days is insufficient, we just allow the new volume
    return true;
  }

  const sum = volume7days.reduce((acc, curr) => acc + curr, 0);
  const twav = sum / volume7days.length;

  // It is okay if newVolume less than twav,
  // because we only want to track spiked volume
  if (newVolume <= twav) {
    return true;
  }

  // calculate the difference between newVolume and avg
  const diff = newVolume - twav;
  const diffInPerc = (diff / twav) * 100;

  return diffInPerc <= maxDiffInPerc;
};
