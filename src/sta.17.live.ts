/* eslint-disable no-restricted-globals */

const SERVER = '17LIVE/KEY_DEV_BACKEND_SERVER'
;(() => {
  const sessionStorageJson: { name: string; url: string } = JSON.parse(
    sessionStorage.getItem(SERVER) ?? '{}',
  )

  const isProd = sessionStorageJson.name === 'prod'

  // toggle storage:
  sessionStorage.setItem(
    SERVER,

    JSON.stringify({
      name: 'prod',
      url: 'https://api-dsa.17app.co/',
      type: 1,

      ...(isProd
        ? {
            name: 'stag',
            url: 'https://sta-api.17app.co/',
          }
        : {}),
    }),
  )
  sessionStorage.setItem('17LIVE/KEY_DEV_IS_ENABLED', 'true')
  location.reload()
})()
