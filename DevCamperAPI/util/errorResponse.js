class ErrorResponse extends Error {
  constructor(message, status) {
    super(message);
    this.status = status;
  }
}

module.exports = ErrorResponse;
//use status on the Error object
