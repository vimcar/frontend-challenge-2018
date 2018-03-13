/**
 * A partial mock implementation of the standard fetch function.
 *
 * @arg {string} url the URL to be requested
 * @arg {{ method: string, body: Object | string }} options
 * @return {Response}
 */
const fetch = (
  url,
  options = {},
) => {
  const requestKey = `${options.method || 'GET'}:${url}`
  const response = responses[requestKey]
  return response
    ? response(options)
    : Promise.resolve({
      status: 404,
      ok: false,
      json: () => ({ code: 'not-found' }),
    })
}

const responses = {
  'POST:https://example.com/-/v1/stock/reserve': () => {
    const responseFactor = Math.random()
    if (responseFactor < 0.1) {
      return Promise.resolve({
        ok: false,
        status: 500,
        json: () => {
          throw new Error('Empty Response')
        },
      })
    } else if (responseFactor < 0.3) {
      return Promise.resolve({
        ok: false,
        status: 418,
        json: () => {
          throw new Error('Empty Response')
        },
      })
    } else {
      return Promise.resolve({
        ok: true,
        status: 204,
        json: () => {
          throw new Error('Empty Response')
        },
      })
    }
  }
}

module.exports = fetch
