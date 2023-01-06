import { defineConfig } from 'tsup'

export default defineConfig({
  entry: [
    'src/index.ts',
  ],
  format: [
    'esm',
    'cjs'
  ],
  dts: true,
  clean: true,
  splitting: true,
  minifyWhitespace: true,
  minifyIdentifiers: true,
  minifySyntax: true,
})
