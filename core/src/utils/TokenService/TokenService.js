const jwt = require('jsonwebtoken')

class TokenService {
  constructor (secret) {
    let _secret = secret

    this.setSecret = (secret) => { _secret = secret }
    this.getSecret = () => { return _secret }
  }

  async generateToken (payload) {
    if (!this.getSecret()) {
      throw new Error('Missing secret key. You can use TokenService.setScret() to set a secret.')
    }

    const token = jwt.sign(payload, this.getSecret())
    return token
  }

  async validateToken (authorizationToken) {
    if (!this.getSecret()) {
      throw new Error('Missing secret key. You can use TokenService.setScret() to set a secret.')
    }
    try {
      const [, token] = authorizationToken.split(' ')
      console.log(authorizationToken)
      const payload = jwt.verify(token, this.getSecret())
      return payload
    } catch (e) {
      console.log(e)
      return null
    }
  }

  async decodeToken (token) {
    if (!this.getSecret()) {
      throw new Error('Missing secret key. You can use TokenService.setScret() to set a secret.')
    }
    const decoded = jwt.decode(token, this.getSecret())
    return decoded
  }
}

module.exports = TokenService
