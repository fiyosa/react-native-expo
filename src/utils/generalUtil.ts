export const delayThreshold = async (fetchFunction: () => Promise<void>, threshold: number): Promise<void> => {
  const startTime = Date.now()
  try {
    await fetchFunction()
    const endTime = Date.now()
    const fetchDuration = endTime - startTime
    const delay = fetchDuration < threshold ? threshold - fetchDuration : 0
    if (delay > 0) await new Promise((r) => setTimeout(r, threshold - delay))
  } catch (err) {}
}
