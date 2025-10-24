import crypto from "crypto";

export function generatePassword(
  length: number = 8,
  options = {
    lower: true,
    upper: true,
    digits: true,
    symbols: true,
  }
): string {
  const pools: string[] = [];
  if (options.lower) pools.push("abcdefghijklmnopqrstuvwxyz");
  if (options.upper) pools.push("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
  if (options.digits) pools.push("0123456789");
  if (options.symbols) pools.push("!@#$%^&*()-_=+;:,.<>?/~`");

  if (pools.length === 0) return "";

  const allChars = pools.join("");
  const randomBytes = crypto.randomBytes(length);
  const result: string[] = [];

  for (let i = 0; i < length; i++) {
    const idx = randomBytes[i] % allChars.length;
    result.push(allChars[idx]);
  }

  // ✅ ensure at least one char from each selected pool
  for (let i = 0; i < pools.length && i < length; i++) {
    const pool = pools[i];
    const randIndex = crypto.randomBytes(1)[0] % pool.length;
    result[i] = pool[randIndex];
  }

  // ✅ shuffle to remove predictable order
  for (let i = result.length - 1; i > 0; i--) {
    const j = crypto.randomBytes(1)[0] % (i + 1);
    [result[i], result[j]] = [result[j], result[i]];
  }

  return result.join("");
}
