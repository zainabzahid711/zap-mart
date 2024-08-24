export const truncateText = (str: string): string => {
  // If the string is 25 characters or less, return the original string
  if (str.length <= 25) return str;

  // If the string is longer than 25 characters, truncate it and add an ellipsis
  return str.substring(0, 25) + "...";
};
