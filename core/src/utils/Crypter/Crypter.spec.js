const Crypter = require('./Crypter')

describe('Crypter', () => {
  const makeSut = () => {
    const crypter = new Crypter()

    return {
      crypter

    }
  }

  test('should return true in compare method if hash has a string with base ', async () => {
    const { crypter } = makeSut()
    const hash = await crypter.generateHash('test')
    const compare = await crypter.compare('test', hash)
    expect(compare).toBe(true)
  })
  test('should return false in compare method if hash is different than required', async () => {
    const { crypter } = makeSut()
    const hash = await crypter.generateHash('testsadkoasdosakodka')

    const compare = await crypter.compare('test', hash)
    expect(compare).toBe(false)
  })
  test('should throw if one of params is undefined(1)', async () => {
    const { crypter } = makeSut()
    const compare = crypter.compare('test')
    expect(compare).rejects.toThrow()
  })
  test('should throw if one of params is undefined(2)', async () => {
    const { crypter } = makeSut()
    const hash = await crypter.generateHash('testsadkoasdosakodka')
    const compare = crypter.compare(undefined, hash)
    expect(compare).rejects.toThrow()
  })
})
