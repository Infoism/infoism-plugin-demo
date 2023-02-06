import { registerMicroApp } from '@infoism/core'
import { EVENT_NAMES } from '@infoism/core'

const { event } = registerMicroApp('demo', {})
export { event, EVENT_NAMES }
