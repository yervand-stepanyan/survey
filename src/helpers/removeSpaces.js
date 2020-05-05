const removeSpaces = text => {
  const firstReplace = text.replace(/\s\s+/g, ' ');
  const regex = /^\s*|\s*$/g;

  return firstReplace.replace(regex, '');
};

export default removeSpaces;
