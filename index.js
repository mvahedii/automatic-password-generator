export const autoPasswordGenerator = (length) => {
  const chars =
    "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ&*()^%#!@$+-";
  let generatedPassword = "";
  for (let i = 0; i < length; i++) {
    generatedPassword += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return generatedPassword;
};
