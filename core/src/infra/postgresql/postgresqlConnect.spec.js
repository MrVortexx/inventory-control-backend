const pqsl = require('./postgresqlConnector')

describe('PSQL connector', () => {
  test('should connect psql without problems', async () => {
    const connect = await pqsl.connect()
    expect(connect).toHaveProperty('query')
  })
})
