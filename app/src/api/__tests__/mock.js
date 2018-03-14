const fetch = require('../mock')

const mockRandom = (n) => {
  const realRandom = Math.random

  Math.random = () => n

  return () => {
    Math.random = realRandom
  }
}

describe('fetch', () => {
  describe('not found', () => {
    it('should respond with a 404 status code', async () => {
      const response = await fetch('afdsg')
      expect(response.status).toBe(404)
    })

    it('should not be ok', async () => {
      const response = await fetch('afdsg')
      expect(response.ok).toBe(false)
    })

    it('should return the error body as an object', async () => {
      const response = await fetch('afdsg')
      expect(response.json()).toEqual({ code: 'not-found' })
    })
  })

  describe('https://example.com/-/v1/stock/reserve', () => {
    describe('success', () => {
      const setup = async () => {
        mockRandom(1)
        return await fetch(
          'https://example.com/-/v1/stock/reserve',
          {
            method: 'POST',
            body: {
              urn: 'fakeurn:asdf',
              quantity: 42,
            }
          }
        )
      }

      it ('should respond with ok', async () => {
        const response = await setup()
        expect(response.ok).toBe(true)
      })

      it ('should respond with a status code 204', async () => {
        const response = await setup()
        expect(response.status).toBe(204)
      })

      it('should not return a body', async () => {
        const response = await setup()
        expect(response.json).toThrow()
      })
    })

    describe('failure', () => {
      const setup = async () => {
        mockRandom(0.05)
        return await fetch(
          'https://example.com/-/v1/stock/reserve',
          { method: 'POST' }
        )
      }

      it('should be an unsuccessful response', async () => {
        const response = await setup()
        expect(response.ok).toBe(false)
      })

      it('should return a 500 status code', async () => {
        const response = await setup()
        expect(response.status).toBe(500)
      })

      it('should not return abody', async () => {
        const response = await setup()
        expect(response.json).toThrow()
      })
    })

    describe('out of stock', () => {
      const setup = async () => {
        mockRandom(0.15)
        return await fetch(
          'https://example.com/-/v1/stock/reserve',
          { method: 'POST' }
        )
      }

      it('should be an unsuccessful response', async () => {
        const response = await setup()
        expect(response.ok).toBe(false)
      })

      it('should return a 418 status code', async () => {
        const response = await setup()
        expect(response.status).toBe(418)
      })

      it('should not return abody', async () => {
        const response = await setup()
        expect(response.json).toThrow()
      })
    })
  })
})
