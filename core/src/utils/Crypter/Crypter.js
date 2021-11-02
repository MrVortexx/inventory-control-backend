const bcrypt = require('bcrypt')

class Crypter {
  async compare (string, hash) {
    const compare = await bcrypt.compare(string, hash)
    return compare
  }

  async generateHash (string) {
    const hash = await bcrypt.hash(string, 8)
    return hash
  }

  async generateToken (payload = {}) {

  }
}

module.exports = Crypter
