const errorHelpers = {
  decodeQueryError(error: Error) {
    return JSON.parse(error.message);
  },
};

export default errorHelpers;
