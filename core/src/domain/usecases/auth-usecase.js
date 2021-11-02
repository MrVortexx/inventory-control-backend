
const { MissingParamException, InvalidParamException } = require('../../utils/errors')

class AuthUseCase {
  constructor ({ userRepository, crypter } = {}) {
    this.userRepository = userRepository
    this.crypter = crypter
  }

  async auth (email, password) {
    if (!email || !password) {
      throw new MissingParamException('Email or password is not provided.')
    }
    if (!this.userRepository.findUserByEmail) {
      throw new InvalidParamException('userRepository has not findUserByEmail method.')
    }
    try {
      const user = await this.userRepository.findUserByEmail(email)
      if (!user) {
        return null
      }

      const compare = await this.crypter.compare(password, user.hash_passowrd)
      if (!compare) {
        console.log('compare')

        return null
      }

      const token = await this.crypter.generateUserToken(user.id)

      return token
    } catch (e) {

    }
  }
}

module.exports = AuthUseCase
