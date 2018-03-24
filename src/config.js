
let QCLOCK = {}
if (typeof window !== "undefined") {
	QCLOCK = window.QCLOCK || {}
}

let hostname = ''
let protocol = ''
if (typeof window !== "undefined") {
	//hostname = window.location.hostname
	hostname = '0.0.0.0:9090'
	protocol = window.location.protocol
}

export const API_HOST = QCLOCK.API_HOST || hostname
export const API_ORIGIN = protocol + '//' + (QCLOCK.API_HOST || hostname)
export const WS_PORT = QCLOCK.WS_PORT || 8088
export const PUT_RATELIMIT = QCLOCK.PUT_RATELIMIT || 20
