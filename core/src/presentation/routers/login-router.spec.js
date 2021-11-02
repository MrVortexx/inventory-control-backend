const LoginRouter = require('./login-router')

const newSut = () => {
  class AuthUseCase {
    auth (email, password) {
      this.email = email
      this.password = password
    }
  }
  const authCase = new AuthUseCase()
  const loginRouter = new LoginRouter(authCase)
  return {
    loginRouter,
    authCase
  }
}

describe('Login router', () => {
  test('Should return 500 if httpRequest has not body.', async () => {
    const { loginRouter } = newSut()
    const response = await loginRouter.route()

    expect(response.statusCode).toBe(500)
    expect(response.body.message).toBe('InternalException: Internal error.')
  })

  test('Should return 400 if  email or password is not provided', async () => {
    const { loginRouter } = newSut()
    const httpRequest = {
      body: {

      }
    }
    const response = await loginRouter.route(httpRequest)

    expect(response.statusCode).toBe(400)
    expect(response.body.message).toBe('MissingParamException: Email or password is not provided.')
  })

  test('Should  works properly', () => {
    const { loginRouter, authCase } = newSut()
    const httpRequest = {
      body: {
        email: 'case@case.com',
        password: 'casecase'
      }
    }
    loginRouter.route(httpRequest)
    expect(authCase.email).toBe(httpRequest.body.email)
    expect(authCase.password).toBe(httpRequest.body.password)
  })
  /* test('Shout return 401 when credentials are invalids', () => {
    const { loginRouter, authCase } = newSut()
    const httpRequest = {
      body: {
        email: 'case@case.com',
        password: 'casecase'
      }
    }
  }) */
})
