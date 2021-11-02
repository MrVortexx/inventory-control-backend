const HttpReponse = require('../helpers/HttpResponse')
const { MissingParamException, InternalException } = require('../../utils/errors')

class LoginRouter extends HttpReponse {
  constructor (authUseCase) {
    super()
    this.authUseCase = authUseCase
  }

  async route (httpRequest) {
    try {
      if (!httpRequest || !httpRequest.body) {
        return this.internalError(new InternalException())
      }
      const { password, email } = httpRequest.body
      if (!password || !email) {
        return this.badRequest(new MissingParamException('Email or password is not provided.'))
      }

      this.authUseCase.auth(email, password)
    } catch (e) {
      return this.internalError()
    }
  }
}

module.exports = LoginRouter
