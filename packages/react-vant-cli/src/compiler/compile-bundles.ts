import { build } from 'vite';
import { getPackageJson } from '../common/constant.js';
import { mergeCustomViteConfig } from '../common/index.js';
import { getViteConfigForPackage } from '../config/vite.package.js';

export async function compileBundles() {
  const dependencies = getPackageJson().dependencies || {};
  const externals = Object.keys(dependencies);

  const configs = [
    // umd bundle
    getViteConfigForPackage({
      minify: false,
      formats: ['umd'],
      external: ['react'],
    }),
    // umd bundle (minified)
    getViteConfigForPackage({
      minify: true,
      formats: ['umd'],
      external: ['react'],
    }),
    // esm/cjs bundle
    getViteConfigForPackage({
      minify: false,
      formats: ['es', 'cjs'],
      external: ['react', ...externals],
    }),
    // esm/cjs bundle (minified)
    // vite will not minify es bundle
    // see: https://github.com/vuejs/vue-next/issues/2860
    getViteConfigForPackage({
      minify: true,
      formats: ['es', 'cjs'],
      external: ['react', ...externals],
    }),
  ];

  await Promise.all(configs.map((config) => build(mergeCustomViteConfig(config))));
}
