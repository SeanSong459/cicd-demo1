const TrimString = (string) => {
  const regex = /[^\w\s\']|_/g;
  const trimmed = string.replace(regex, " ");
  console.log(`${trimmed}`);
  return trimmed;
};

module.exports = TrimString;
