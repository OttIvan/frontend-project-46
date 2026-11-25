const parse = (data, format) => {
  switch (format) {
    case '.json':
      return JSON.parse(data);
    default:
      throw new Error(`Unsupported file format: ${format}`);
  }
};

export default parse;
