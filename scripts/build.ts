import * as esbuild from 'esbuild'
import { createWriteStream } from 'fs'
import { readdir, readFile } from 'fs/promises'
import path from 'path'

const SRC = 'src'
const OUT_DIR = 'out'

;(async () => {
  const tsFiles = await (await readdir(SRC))
    .filter((file) => /tsx?$/.test(file))
    .map((file) => path.join(SRC, file))

  const buildResult = await esbuild.build({
    entryPoints: tsFiles,
    outdir: OUT_DIR,
    bundle: true,
    minify: true,
    color: true,
    logLevel: 'info',
    loader: {
      '.css': 'text',
    },
  })

  console.info(buildResult)

  const bookmarklet = await (await readFile(`${OUT_DIR}/@.js`)).toString()

  const ws = createWriteStream('out/@')

  ws.write(`javascript:${bookmarklet}`)
  ws.end()
})()
