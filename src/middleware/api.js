const API_HOST = 'http://0.0.0.0:9090'

const PUT_RATELIMIT = 30
let rateLimit = 0

export const API_GET = 'API_GET'
export const API_PUT = 'API_PUT'

const apiCall = function (request) {
    return fetch(request)
        .then(response => {
            if (response) return response.json()
            return {}
        })
}

export default store => next => action => {

    const put = action[API_PUT]
    const get = action[API_GET]

    if (put) {
        const { endPoint, actions, dataKey } = put
        const data = {
            [dataKey]: action[dataKey]
        }
        const [ startRequest, success, failure ] = actions

        next(startRequest())

        clearTimeout(rateLimit)
        rateLimit = setTimeout(() => {
            const request = new Request(API_HOST + endPoint, { method: 'PUT', body: JSON.stringify(data) })
            apiCall(request)
                .then(data => next(success(data)))
                .catch(error => next(failure(error)))

        }, PUT_RATELIMIT)

    }

    if (get) {
        const { endPoint, actions } = get
        const [ startRequest, success, failure ] = actions

        next(startRequest())

        const request = new Request(API_HOST + endPoint, { method: 'GET'})

        return apiCall(request)
            .then(data => next(success(data)))
            .catch(error => next(failure(error)))
    }

    return next(action)
}