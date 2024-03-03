function success(message = '', data = null) {
  return {
    statusCode: 200,
    status: 'success',
    message,
    data,
  };
}

function errorResponse(statusCode = 500, message = '') {
  return {
    statusCode,
    message,
    status: 'failuer',
  };
}

module.exports = {
  success,
  errorResponse,
};
