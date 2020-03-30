const removeSpaces = text => {
  const firstReplace = text.replace(/\s\s+/g, ' ');
  const wsRegex = /^\s*|\s*$/g;
  return firstReplace.replace(wsRegex, '');
};

export { removeSpaces as default };
