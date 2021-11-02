class MissingParamException extends Error {
  constructor (message) {
    super(`MissingParamException: ${message}`)
  }
}

class InvalidParamException extends Error {
  constructor (message) {
    super(`InvalidParamException: ${message}`)
  }
}

class UnauthorizedException extends Error {
  constructor () {
    super('UnauthorizedException: Credential are invalid.')
  }
}

class InternalException extends Error {
  constructor (message = 'Internal error.') {
    super(`InternalException: ${message}`)
  }
}

module.exports = {
  MissingParamException,
  InvalidParamException,
  UnauthorizedException,
  InternalException
}
