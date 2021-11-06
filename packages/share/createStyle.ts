export const createStyle = (cssText: string) => {
  const d = document
  const style = d.createElement('style')
  style.textContent = cssText

  d.head.append(style)
}
