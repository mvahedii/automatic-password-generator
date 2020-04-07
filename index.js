const autoPasswordGenerator = (length = 4) => {
  const chars =
    "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ&*()^%#!@$+-";
  let generatedPassword = "";
  for (let i = 0; i < length; i++) {
    generatedPassword += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return generatedPassword;
};

exports.autoPasswordGenerator = autoPasswordGenerator;
