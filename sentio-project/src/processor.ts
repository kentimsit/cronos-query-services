import { Counter, Gauge } from '@sentio/sdk'
import { CronossafeProcessor } from './types/eth/cronossafe.js'

CronossafeProcessor.bind({ address: '0xC22834581EbC8527d974F8a1c97E1bEA4EF910BC', network: 25 }).onEventProxyCreation(
  (event, ctx) => {
    ctx.meter.Counter('wallets').add(1)
  }
)
