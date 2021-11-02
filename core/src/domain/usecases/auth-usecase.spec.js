
const AuthUseCase = require('./auth-usecase')
const { InvalidParamException } = require('../../utils/errors')
const Crypter = require('../../utils/Crypter/Crypter')

class UserRepository {
  findUserByEmail (email) {
    return false
  }

  updateUserAcessToken (user, token) {

  }
}

const makeSut = () => {
  const userRepository = new UserRepository()
  const crypter = new Crypter()
  const sut = new AuthUseCase({
    userRepository,
    crypter
  })

  return {
    userRepository,
    crypter,
    sut
  }
}
describe('Auth UseCase', () => {
  test('should throw  MissingParamException if email or password is not provided ', async () => {
    const { sut } = makeSut()
    const acessToken = sut.auth()
    expect(acessToken).rejects.toThrow()
  })

  test('should  throw if not UserRepository is injected', async () => {
    const sut = new AuthUseCase({ userRepository: undefined })
    const response = sut.auth('dddd@dddd.com', 'ddddd')
    expect(response).rejects.toThrow()
  })
  test('should  throw if not crypter is injected', async () => {
    const sut = new AuthUseCase({ crypter: undefined })
    const response = sut.auth('dddd@dddd.com', 'ddddd')
    expect(response).rejects.toThrow()
  })

  test('should  throw if UserRepository is injected with invalid repository', async () => {
    const sut = new AuthUseCase({ userRepository: {} })
    const response = sut.auth('dddd@dddd.com', 'ddddd')
    expect(response).rejects.toThrow(new InvalidParamException('userRepository has not findUserByEmail method.'))
  })

  test('should return null if an invalid email is provided', async () => {
    const { sut } = makeSut()
    const response = await sut.auth('dddd@dddd.com', 'ddddd')
    expect(response).toBeNull()
  })

  test('should return null if an invalid password is provided', async () => {
    const { sut } = makeSut()
    const response = await sut.auth('dddd@dddd.com', 'ddddd')
    expect(response).toBeNull()
  })
})
