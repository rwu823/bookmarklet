export const createScript = (src: string) => {
  const d = document
  const script = d.createElement('script')

  script.src = src
  script.async = true
  script.defer = true

  d.head.append(script)

  return script
}
