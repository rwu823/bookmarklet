import * as esbuild from 'esbuild'
//
;(async () => {
  await esbuild.build({
    entryPoints: ['src/www.voicetube.com.ts'],
    outdir: 'out',
    bundle: true,
    minify: true,
    loader: {
      '.css': 'text',
    },
  })
})()
