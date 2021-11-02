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
})
