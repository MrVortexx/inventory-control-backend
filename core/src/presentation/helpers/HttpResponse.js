class HttpReponse {
  constructor () {
    if (new.target === 'HttpReponse') {
      throw new TypeError('HttpResponse is an abstract class and need to be used as heritance from child class.')
    }
  }

  response (code, body) {
    return {
      statusCode: code,
      body
    }
  }

  badRequest (error) {
    return this.response(400, { message: error.message })
  }

  unauthorizedError (error) {
    return this.response(401, { message: error.message })
  }

  internalError (error) {
    return this.response(500, { message: error.message })
  }
}

module.exports = HttpReponse
