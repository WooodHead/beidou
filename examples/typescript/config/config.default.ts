'use strict';

import * as path from 'path';
import { EggAppConfig, PowerPartial } from 'beidou-core';

export default () => {
  const config = {} as PowerPartial<EggAppConfig>;

  config.keys = 'secret';

  config.view = {
    defaultExtension: '.tsx'
  };

  config.router = {
    exts: ['.jsx', '.ts', '.tsx'],
    entry: 'index',
  };

  config.isomorphic = {
    // babel: false,
  };
  
  config.webpack = {
    // your webpack config file
    custom: {
      configPath: path.resolve(__dirname, './webpack.config.js'),
    },
    resolve: {
      extensions: ['.json', '.js', '.jsx', '.ts', '.tsx'],
      alias: {
        client: path.join(__dirname, '../client'),
      },
    },
  }

  return config;
};
