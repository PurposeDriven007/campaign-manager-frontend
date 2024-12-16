/**
 * Generates a random password of a specified length.
 *
 * @param {number} [length=14] - The length of the password to generate. Defaults to 14 if not provided.
 * @returns {string} A randomly generated password containing uppercase letters, lowercase letters, and digits.
 */
export const generatePassword = (length: number = 14) => {
  const charset =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let password = "";
  for (let i = 0; i < length; i++) {
    password += charset.charAt(Math.floor(Math.random() * charset.length));
  }
  return password;
};
