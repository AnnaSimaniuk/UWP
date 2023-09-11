export const isFourthCharacterUppercase = (str: string) => {
  if (str.length < 4) return false;
  return str.charAt(3) === str.charAt(3).toUpperCase();
};

export const extractLanguage = (inputString: string) => {
  const match = inputString.match(/^[^/]+/);
  return match ? match[0] : null;
};
