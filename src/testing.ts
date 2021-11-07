import { createStyle } from '@/share/createStyle'

import css from './www.voicetube.com.css'
;(() => {
  createStyle(css)

  const $subtitles = document.querySelector<HTMLDivElement>('.video-subtitles')

  $subtitles?.addEventListener('click', (ev) => {
    const target = ev.target as HTMLDivElement

    const caption: HTMLDivElement | null =
      target.querySelector('.captions') ?? target.closest('.captions')

    if (caption) {
      const isHidden = caption.offsetParent === null

      caption.style.display = isHidden ? 'block' : 'none'
    }
  })
})()
