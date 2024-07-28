/**
 * Formats a given number of minutes into a human-readable string.
 * @param minutes - The number of minutes to format.
 * @returns A formatted string representing the time.
 * @throws {Error} If the input is negative.
 */
export function formatTime(minutes: number): string {
  if (minutes < 0) {
    throw new Error("Input must be a non-negative number.");
  }

  if (minutes < 60) {
    return `${minutes} min${minutes !== 1 ? "s" : ""}`;
  }

  const hours: number = Math.floor(minutes / 60);
  const remainingMinutes: number = minutes % 60;

  if (minutes === 60) {
    return `${hours} hr`;
  }

  if (remainingMinutes === 0) {
    return `${hours} hr${hours !== 1 ? "s" : ""}`;
  }

  return `${hours} hr${hours !== 1 ? "s" : ""} ${remainingMinutes} min${remainingMinutes !== 1 ? "s" : ""}`;
}
