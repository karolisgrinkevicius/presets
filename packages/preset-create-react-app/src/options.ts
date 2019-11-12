export interface Options {
  /**
   * Optionally set the package name of a react-scripts fork.
   * In most cases, the package is located automatically by this preset.
   */
  scriptsPackageName?: string;

  /**
   * Options for `ts-docgen-loader`.
   */
  tsDocgenLoaderOptions?: {
    tsconfigPath?: string;
  };

  /**
   * Overrides for Create React App's Webpack configuration.
   */
  craOverrides?: {
    fileLoaderExcludes?: string[];
  };

  // TODO: Improve these types.
  // Maybe get from Storybook.
  /* eslint-disable @typescript-eslint/no-explicit-any */
  configDir: string;
  babelOptions: {
    extends: any;
    plugins: any;
    presets: any;
  };
}
