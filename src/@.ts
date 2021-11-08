import { BOOKMARKLET_CDN } from '@/share/consts'
import { createScript } from '@/share/createScript'
;(() => {
  createScript(`${BOOKMARKLET_CDN}/main.js`)
})()
