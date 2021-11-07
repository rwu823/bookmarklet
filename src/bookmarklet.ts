;(() => {
  const script = document.createElement('script')
  const { host } = window.location
  script.src = `https://cdn.jsdelivr.net/gh/rwu823/bookmarklet@out/${host}.js`
  script.async = true
  script.defer = true

  script.addEventListener('error', () => {
    alert(`load script ${host} error`)
  })

  document.head.append(script)
})()
