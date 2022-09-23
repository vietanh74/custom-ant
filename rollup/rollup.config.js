import path from 'path';
import vue from '@vitejs/plugin-vue';
import typescript from 'rollup-plugin-typescript2';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import copy from 'rollup-plugin-copy';
import { terser } from 'rollup-plugin-terser';
import alias from '@rollup/plugin-alias';
import del from 'rollup-plugin-delete';

import { BUILD_FOLDER } from './vars';

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        dir: BUILD_FOLDER,
        format: 'es',
      },
      {
        dir: `${BUILD_FOLDER}/amd`,
        format: 'amd',
      },
    ],
    plugins: [
      vue(),
      typescript(),
      peerDepsExternal(),
      copy({
        targets: [
          { src: 'package.json', dest: BUILD_FOLDER },
          { src: 'README.md', dest: BUILD_FOLDER },
          { src: 'src/styles/antdVars.less', dest: `${BUILD_FOLDER}/styles` },
        ]
      }),
      terser(),
      alias({
        entries: [
          { find: '@', replacement: `${path.resolve(process.cwd(), 'src')}` },
        ]
      }),
      del({ targets: `${BUILD_FOLDER}/*` }),
    ]
  }
]
