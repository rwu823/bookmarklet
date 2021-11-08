import * as esbuild from 'esbuild'
import { createWriteStream } from 'fs'
import { readdir, readFile } from 'fs/promises'
import path from 'path'

const SOURCE = 'src'
const OUT_DIR = 'out'

;(async () => {
  const tsFiles = await (await readdir(SOURCE))
    .filter((file) => /tsx?$/.test(file) && file !== 'bookmarklet.ts')
    .map((file) => path.join(SOURCE, file))

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

  const bookmarkletTs = await (
    await readFile(`${SOURCE}/bookmarklet.ts`)
  ).toString()

  const { code: bookmarkletJs } = await esbuild.transform(bookmarkletTs, {
    loader: 'ts',
    minify: true,
  })

  const ws = createWriteStream('out/@')

  ws.write(`javascript:${bookmarkletJs}`)
  ws.end()
})()
