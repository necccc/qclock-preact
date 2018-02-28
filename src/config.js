
let QCLOCK = {}
if (typeof window !== "undefined") {
    QCLOCK = window.QCLOCK || {};
}

let location = ''
if (typeof window !== "undefined") {
    location = window.location.origin
}

export const API_HOST = QCLOCK.API_HOST || location
export const PUT_RATELIMIT = QCLOCK.PUT_RATELIMIT || 20
