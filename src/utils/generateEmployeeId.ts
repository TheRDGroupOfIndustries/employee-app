import crypto from "crypto";

/**
 * Generates a random Employee ID.
 * Format: 3 uppercase letters + 5 digits (e.g. ABC12345)
 */
export function generateEmployeeId(): string {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const digits = "0123456789";

  // Generate 3 random letters
  const randomLetters = Array.from(crypto.randomBytes(3))
    .map(b => letters[b % letters.length])
    .join("");

  // Generate 5 random digits
  const randomNumbers = Array.from(crypto.randomBytes(5))
    .map(b => digits[b % digits.length])
    .join("");

  return `${randomLetters}${randomNumbers}`;
}
