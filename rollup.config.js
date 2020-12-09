import resolve from 'rollup-plugin-node-resolve';
import sourceMaps from 'rollup-plugin-sourcemaps';
import typescript from 'rollup-plugin-typescript2';
import external from 'rollup-plugin-peer-deps-external';
import commonjs from 'rollup-plugin-commonjs';
import pkg from './package.json';

export default [
  {
    input: pkg.source,
    output: [
      {
        file: pkg.browser,
        format: 'umd',
        name: 'reakeys'
      },
      {
        file: pkg.main,
        format: 'cjs',
        name: 'reakeys'
      },
      {
        file: pkg.module,
        format: 'esm'
      }
    ],
    plugins: [
      external({
        includeDependencies: true
      }),
      typescript({
        clean: true,
        exclude: [
          '*.test.js',
          '*.test.ts',
          '*.test.tsx',
          '*.d.ts',
          '**/*.d.ts',
          '**/*.story.tsx'
        ]
      }),
      resolve(),
      commonjs(),
      sourceMaps()
    ]
  }
];
