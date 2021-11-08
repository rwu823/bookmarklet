/* eslint-disable no-restricted-globals */

import { BOOKMARKLET_CDN } from '@/share/consts'
import { createScript } from '@/share/createScript'
;(() => {
  const { host } = location

  const script = createScript(`${BOOKMARKLET_CDN}/${host}.js`)
  script.addEventListener('error', () => {
    alert(`Load script error: \`${host}\``)
  })
})()
