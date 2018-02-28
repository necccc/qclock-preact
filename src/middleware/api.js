import {
    API_HOST,
    PUT_RATELIMIT
} from '../config'

let rateLimiter = 0

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
        const [ startRequest, success, failure ] = actions

        const data = {
            [dataKey]: action[dataKey]
        }

        if (startRequest) {
            next(startRequest())
        }

        const sendRequest = () => {
            const url = API_HOST + endPoint
            const options = { method: 'PUT', body: JSON.stringify(data) }
            const request = new Request(url, options)

            apiCall(request)
                .then(data => next(success(data)))
                .catch(error => next(failure(error)))
        }

        if (PUT_RATELIMIT !== 0) {
            clearTimeout(rateLimiter)
            rateLimiter = setTimeout(sendRequest, PUT_RATELIMIT);
        } else {
            sendRequest()
        }
    }

    if (get) {
        const { endPoint, actions } = get
        const [ startRequest, success, failure ] = actions

        if (startRequest) {
            next(startRequest())
        }

        const url = API_HOST + endPoint
        const options = { method: 'GET'}
        const request = new Request(url, options)

        return apiCall(request)
            .then(data => next(success(data)))
            .catch(error => next(failure(error)))
    }

    return next(action)
}