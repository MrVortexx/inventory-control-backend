const TokenService = require('./TokenService')

describe('Token Service', () => {
  const tokenService = new TokenService('secret_secret')

  test('should throws to all methods if not secret is provided', async () => {
    const tokenService = new TokenService()
    const validate = tokenService.validateToken('Bearer sakodaskdoaksdkas')
    expect(validate).rejects.toThrow()
    const decode = tokenService.decodeToken('Bearer sakodaskdoaksdkas')
    expect(decode).rejects.toThrow()
    const token = tokenService.generateToken('Bearer sakodaskdoaksdkas')
    expect(token).rejects.toThrow()
  })
  test('should return  null if token is invalid', async () => {
    const isValid = await tokenService.validateToken('Bearer sakodaskdoaksdkas')
    expect(isValid).toBeNull()
  })
  test('should return  null if not send parameter', async () => {
    const isValid = await tokenService.validateToken()
    expect(isValid).toBeNull()
  })
  test('should return true if token is valid', async () => {
    const token = await tokenService.generateToken({ id: 14, message: 'Token works' })
    const isValid = await tokenService.validateToken('Bearer ' + token)
    expect(isValid.id).toBe(14)
    expect(isValid.message).toBe('Token works')
  })
})
