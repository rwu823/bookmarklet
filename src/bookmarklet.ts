/* eslint-disable no-restricted-globals */

;(() => {
  const d = document
  const script = d.createElement('script')
  const { host } = location
  script.src = `https://cdn.jsdelivr.net/gh/rwu823/bookmarklet@out/${host}.js`
  script.async = true
  script.defer = true

  script.addEventListener('error', () => {
    alert(`Load script error: \`${host}\``)
  })

  d.head.append(script)
})()
