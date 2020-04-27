const Status = require('http-status-codes')

module.exports = {
  serverError: getStatus(Status.INTERNAL_SERVER_ERROR),
  notFound: getStatus(Status.NOT_FOUND),
  invalidProvides: getStatus(Status.UNPROCESSABLE_ENTITY),
}

function getStatus(code) {
  const message = Status.getStatusText(code)
  return { message, status: code }
}
