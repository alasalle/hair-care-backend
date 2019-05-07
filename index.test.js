const server = require('./index')

describe('api is up', () => {
  it('should be up', () => {
    server.get('/', (req, res) => res.status(200).json({ api: 'up' }))
  })
})
