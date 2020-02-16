// 请注意运行模式下，因日志输出、sourcemap以及未压缩源码等原因，性能和包体积，均不及发行模式。
{
  mode: 'development',
  context: 'D:\\study\\self_learn\\js_learn_code\\uni\\demo\\my-project',
  node: {
    setImmediate: false,
    process: 'mock',
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  },
  output: {
    path: 'D:\\study\\self_learn\\js_learn_code\\uni\\demo\\my-project\\dist\\dev\\h5',
    filename: 'static/js/[name].js',
    publicPath: '/h5/',
    chunkFilename: 'static/js/[name].js'
  },
  resolve: {
    alias: {
      '@': 'D:\\study\\self_learn\\js_learn_code\\uni\\demo\\my-project\\src',
      vue$: '@dcloudio/vue-cli-plugin-uni/packages/h5-vue',
      'uni-pages': 'D:\\study\\self_learn\\js_learn_code\\uni\\demo\\my-project\\src\\pages.json',
      '@dcloudio/uni-stat': 'D:\\study\\self_learn\\js_learn_code\\uni\\demo\\my-project\\node_modules\\@dcloudio\\uni-stat\\dist\\index.js',
      'uni-stat-config': 'D:\\study\\self_learn\\js_learn_code\\uni\\demo\\my-project\\src\\pages.json?{"type":"stat"}',
      'vue-router': 'D:\\study\\self_learn\\js_learn_code\\uni\\demo\\my-project\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\h5-vue-router',
      'uni-h5': 'D:\\study\\self_learn\\js_learn_code\\uni\\demo\\my-project\\node_modules\\@dcloudio\\uni-h5\\dist\\index.umd.min.js'
    },
    extensions: [
      '.mjs',
      '.js',
      '.jsx',
      '.vue',
      '.json',
      '.wasm',
      '.nvue'
    ],
    modules: [
      'D:\\study\\self_learn\\js_learn_code\\uni\\demo\\my-project\\node_modules',
      'D:\\study\\self_learn\\js_learn_code\\uni\\demo\\my-project\\node_modules\\@vue\\cli-service\\node_modules',
      'D:\\study\\self_learn\\js_learn_code\\uni\\demo\\my-project\\src',
      'D:\\study\\self_learn\\js_learn_code\\uni\\demo\\my-project\\src\\node_modules'
    ]
  },
  resolveLoader: {
    modules: [
      'D:\\study\\self_learn\\js_learn_code\\uni\\demo\\my-project\\node_modules\\@vue\\cli-plugin-babel\\node_modules',
      'node_modules',
      'D:\\study\\self_learn\\js_learn_code\\uni\\demo\\my-project\\node_modules',
      'D:\\study\\self_learn\\js_learn_code\\uni\\demo\\my-project\\node_modules\\@vue\\cli-service\\node_modules'
    ],
    alias: {
      'vue-style-loader': 'D:\\study\\self_learn\\js_learn_code\\uni\\demo\\my-project\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\h5-vue-style-loader'
    }
  },
  module: {
    noParse: /^(vue|vue-router|vuex|vuex-router-sync)$/,
    rules: [
      /* config.module.rule('vue') */
      {
        test: [
          /\.vue$/,
          /\.nvue$/
        ],
        use: [
          {
            loader: 'D:\\study\\self_learn\\js_learn_code\\uni\\demo\\my-project\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\vue-loader\\lib\\index.js',
            options: {
              compilerOptions: {
                isUnaryTag: undefined,
                preserveWhitespace: false,
                modules: [
                  {
                    postTransformNode: function () { /* omitted long function */ }
                  },
                  {
                    preTransformNode: function () { /* omitted long function */ },
                    postTransformNode: function () { /* omitted long function */ }
                  }
                ]
              },
              cacheDirectory: false,
              cacheIdentifier: false,
              isH5: true,
              compiler: {
                compile: function () { /* omitted long function */ },
                parseComponent: function () { /* omitted long function */ },
                compileToFunctions: function () { /* omitted long function */ },
                ssrCompile: function () { /* omitted long function */ },
                ssrCompileToFunctions: function () { /* omitted long function */ },
                generateCodeFrame: function () { /* omitted long function */ }
              }
            }
          },
          {
            loader: 'D:\\study\\self_learn\\js_learn_code\\uni\\demo\\my-project\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\webpack-scoped-loader\\index.js'
          }
        ]
      },
      /* config.module.rule('images') */
      {
        test: /\.(png|jpe?g|gif|webp)(\?.*)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 40960,
              fallback: {
                loader: 'file-loader',
                options: {
                  name: 'static/img/[name].[hash:8].[ext]'
                }
              }
            }
          }
        ]
      },
      /* config.module.rule('svg') */
      {
        test: /\.(svg)(\?.*)?$/,
        use: [
          {
            loader: 'D:\\study\\self_learn\\js_learn_code\\uni\\demo\\my-project\\node_modules\\file-loader\\dist\\cjs.js',
            options: {
              name: 'static/img/[name].[hash:8].[ext]'
            }
          }
        ]
      },
      /* config.module.rule('media') */
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 40960,
              fallback: {
                loader: 'file-loader',
                options: {
                  name: 'static/media/[name].[hash:8].[ext]'
                }
              }
            }
          }
        ]
      },
      /* config.module.rule('fonts') */
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 40960,
              fallback: {
                loader: 'file-loader',
                options: {
                  name: 'static/fonts/[name].[hash:8].[ext]'
                }
              }
            }
          }
        ]
      },
      /* config.module.rule('pug') */
      {
        test: /\.pug$/,
        oneOf: [
          /* config.module.rule('pug').rule('pug-vue') */
          {
            resourceQuery: /vue/,
            use: [
              {
                loader: 'pug-plain-loader'
              }
            ]
          },
          /* config.module.rule('pug').rule('pug-template') */
          {
            use: [
              {
                loader: 'raw-loader'
              },
              {
                loader: 'pug-plain-loader'
              }
            ]
          }
        ]
      },
      /* config.module.rule('css') */
      {
        test: /\.css$/,
        oneOf: [
          /* config.module.rule('css').rule('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              {
                loader: 'D:\\study\\self_learn\\js_learn_code\\uni\\demo\\my-project\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\h5-vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: 'D:\\study\\self_learn\\js_learn_code\\uni\\demo\\my-project\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\webpack-preprocess-loader',
                options: {
                  type: 'css',
                  context: {
                    H5: true,
                    'APP-PLUS': false,
                    'MP-QQ': false,
                    'MP-WEIXIN': false,
                    'MP-BAIDU': false,
                    'MP-ALIPAY': false,
                    'MP-TOUTIAO': false,
                    MP: false,
                    APP: false,
                    'APP-PLUS-NVUE': false,
                    APP_PLUS_NVUE: false,
                    'APP-VUE': false,
                    APP_VUE: false,
                    'APP-NVUE': false,
                    APP_NVUE: false,
                    APP_PLUS: false,
                    MP_QQ: false,
                    MP_WEIXIN: false,
                    MP_BAIDU: false,
                    MP_ALIPAY: false,
                    MP_TOUTIAO: false
                  }
                }
              },
              {
                loader: 'D:\\study\\self_learn\\js_learn_code\\uni\\demo\\my-project\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              {
                loader: 'D:\\study\\self_learn\\js_learn_code\\uni\\demo\\my-project\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: false,
                  config: {
                    path: 'D:\\study\\self_learn\\js_learn_code\\uni\\demo\\my-project\\postcss.config.js'
                  }
                }
              }
            ]
          },
          /* config.module.rule('css').rule('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              {
                loader: 'D:\\study\\self_learn\\js_learn_code\\uni\\demo\\my-project\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\h5-vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: 'D:\\study\\self_learn\\js_learn_code\\uni\\demo\\my-project\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\webpack-preprocess-loader',
                options: {
                  type: 'css',
                  context: {
                    H5: true,
                    'APP-PLUS': false,
                    'MP-QQ': false,
                    'MP-WEIXIN': false,
                    'MP-BAIDU': false,
                    'MP-ALIPAY': false,
                    'MP-TOUTIAO': false,
                    MP: false,
                    APP: false,
                    'APP-PLUS-NVUE': false,
                    APP_PLUS_NVUE: false,
                    'APP-VUE': false,
                    APP_VUE: false,
                    'APP-NVUE': false,
                    APP_NVUE: false,
                    APP_PLUS: false,
                    MP_QQ: false,
                    MP_WEIXIN: false,
                    MP_BAIDU: false,
                    MP_ALIPAY: false,
                    MP_TOUTIAO: false
                  }
                }
              },
              {
                loader: 'D:\\study\\self_learn\\js_learn_code\\uni\\demo\\my-project\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: 'D:\\study\\self_learn\\js_learn_code\\uni\\demo\\my-project\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: false,
                  config: {
                    path: 'D:\\study\\self_learn\\js_learn_code\\uni\\demo\\my-project\\postcss.config.js'
                  }
                }
              }
            ]
          },
          /* config.module.rule('css').rule('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              {
                loader: 'D:\\study\\self_learn\\js_learn_code\\uni\\demo\\my-project\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\h5-vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: 'D:\\study\\self_learn\\js_learn_code\\uni\\demo\\my-project\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\webpack-preprocess-loader',
                options: {
                  type: 'css',
                  context: {
                    H5: true,
                    'APP-PLUS': false,
                    'MP-QQ': false,
                    'MP-WEIXIN': false,
                    'MP-BAIDU': false,
                    'MP-ALIPAY': false,
                    'MP-TOUTIAO': false,
                    MP: false,
                    APP: false,
                    'APP-PLUS-NVUE': false,
                    APP_PLUS_NVUE: false,
                    'APP-VUE': false,
                    APP_VUE: false,
                    'APP-NVUE': false,
                    APP_NVUE: false,
                    APP_PLUS: false,
                    MP_QQ: false,
                    MP_WEIXIN: false,
                    MP_BAIDU: false,
                    MP_ALIPAY: false,
                    MP_TOUTIAO: false
                  }
                }
              },
              {
                loader: 'D:\\study\\self_learn\\js_learn_code\\uni\\demo\\my-project\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              {
                loader: 'D:\\study\\self_learn\\js_learn_code\\uni\\demo\\my-project\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: false,
                  config: {
                    path: 'D:\\study\\self_learn\\js_learn_code\\uni\\demo\\my-project\\postcss.config.js'
                  }
                }
              }
            ]
          },
          /* config.module.rule('css').rule('normal') */
          {
            use: [
              {
                loader: 'D:\\study\\self_learn\\js_learn_code\\uni\\demo\\my-project\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\h5-vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: 'D:\\study\\self_learn\\js_learn_code\\uni\\demo\\my-project\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\webpack-preprocess-loader',
                options: {
                  type: 'css',
                  context: {
                    H5: true,
                    'APP-PLUS': false,
                    'MP-QQ': false,
                    'MP-WEIXIN': false,
                    'MP-BAIDU': false,
                    'MP-ALIPAY': false,
                    'MP-TOUTIAO': false,
                    MP: false,
                    APP: false,
                    'APP-PLUS-NVUE': false,
                    APP_PLUS_NVUE: false,
                    'APP-VUE': false,
                    APP_VUE: false,
                    'APP-NVUE': false,
                    APP_NVUE: false,
                    APP_PLUS: false,
                    MP_QQ: false,
                    MP_WEIXIN: false,
                    MP_BAIDU: false,
                    MP_ALIPAY: false,
                    MP_TOUTIAO: false
                  }
                }
              },
              {
                loader: 'D:\\study\\self_learn\\js_learn_code\\uni\\demo\\my-project\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: 'D:\\study\\self_learn\\js_learn_code\\uni\\demo\\my-project\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: false,
                  config: {
                    path: 'D:\\study\\self_learn\\js_learn_code\\uni\\demo\\my-project\\postcss.config.js'
                  }
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('postcss') */
      {
        test: /\.p(ost)?css$/,
        oneOf: [
          /* config.module.rule('postcss').rule('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              {
                loader: 'D:\\study\\self_learn\\js_learn_code\\uni\\demo\\my-project\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\h5-vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: 'D:\\study\\self_learn\\js_learn_code\\uni\\demo\\my-project\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\webpack-preprocess-loader',
                options: {
                  type: 'css',
                  context: {
                    H5: true,
                    'APP-PLUS': false,
                    'MP-QQ': false,
                    'MP-WEIXIN': false,
                    'MP-BAIDU': false,
                    'MP-ALIPAY': false,
                    'MP-TOUTIAO': false,
                    MP: false,
                    APP: false,
                    'APP-PLUS-NVUE': false,
                    APP_PLUS_NVUE: false,
                    'APP-VUE': false,
                    APP_VUE: false,
                    'APP-NVUE': false,
                    APP_NVUE: false,
                    APP_PLUS: false,
                    MP_QQ: false,
                    MP_WEIXIN: false,
                    MP_BAIDU: false,
                    MP_ALIPAY: false,
                    MP_TOUTIAO: false
                  }
                }
              },
              {
                loader: 'D:\\study\\self_learn\\js_learn_code\\uni\\demo\\my-project\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              {
                loader: 'D:\\study\\self_learn\\js_learn_code\\uni\\demo\\my-project\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: false,
                  config: {
                    path: 'D:\\study\\self_learn\\js_learn_code\\uni\\demo\\my-project\\postcss.config.js'
                  }
                }
              }
            ]
          },
          /* config.module.rule('postcss').rule('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              {
                loader: 'D:\\study\\self_learn\\js_learn_code\\uni\\demo\\my-project\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\h5-vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: 'D:\\study\\self_learn\\js_learn_code\\uni\\demo\\my-project\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\webpack-preprocess-loader',
                options: {
                  type: 'css',
                  context: {
                    H5: true,
                    'APP-PLUS': false,
                    'MP-QQ': false,
                    'MP-WEIXIN': false,
                    'MP-BAIDU': false,
                    'MP-ALIPAY': false,
                    'MP-TOUTIAO': false,
                    MP: false,
                    APP: false,
                    'APP-PLUS-NVUE': false,
                    APP_PLUS_NVUE: false,
                    'APP-VUE': false,
                    APP_VUE: false,
                    'APP-NVUE': false,
                    APP_NVUE: false,
                    APP_PLUS: false,
                    MP_QQ: false,
                    MP_WEIXIN: false,
                    MP_BAIDU: false,
                    MP_ALIPAY: false,
                    MP_TOUTIAO: false
                  }
                }
              },
              {
                loader: 'D:\\study\\self_learn\\js_learn_code\\uni\\demo\\my-project\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: 'D:\\study\\self_learn\\js_learn_code\\uni\\demo\\my-project\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: false,
                  config: {
                    path: 'D:\\study\\self_learn\\js_learn_code\\uni\\demo\\my-project\\postcss.config.js'
                  }
                }
              }
            ]
          },
          /* config.module.rule('postcss').rule('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              {
                loader: 'D:\\study\\self_learn\\js_learn_code\\uni\\demo\\my-project\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\h5-vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: 'D:\\study\\self_learn\\js_learn_code\\uni\\demo\\my-project\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\webpack-preprocess-loader',
                options: {
                  type: 'css',
                  context: {
                    H5: true,
                    'APP-PLUS': false,
                    'MP-QQ': false,
                    'MP-WEIXIN': false,
                    'MP-BAIDU': false,
                    'MP-ALIPAY': false,
                    'MP-TOUTIAO': false,
                    MP: false,
                    APP: false,
                    'APP-PLUS-NVUE': false,
                    APP_PLUS_NVUE: false,
                    'APP-VUE': false,
                    APP_VUE: false,
                    'APP-NVUE': false,
                    APP_NVUE: false,
                    APP_PLUS: false,
                    MP_QQ: false,
                    MP_WEIXIN: false,
                    MP_BAIDU: false,
                    MP_ALIPAY: false,
                    MP_TOUTIAO: false
                  }
                }
              },
              {
                loader: 'D:\\study\\self_learn\\js_learn_code\\uni\\demo\\my-project\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              {
                loader: 'D:\\study\\self_learn\\js_learn_code\\uni\\demo\\my-project\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: false,
                  config: {
                    path: 'D:\\study\\self_learn\\js_learn_code\\uni\\demo\\my-project\\postcss.config.js'
                  }
                }
              }
            ]
          },
          /* config.module.rule('postcss').rule('normal') */
          {
            use: [
              {
                loader: 'D:\\study\\self_learn\\js_learn_code\\uni\\demo\\my-project\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\h5-vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: 'D:\\study\\self_learn\\js_learn_code\\uni\\demo\\my-project\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\webpack-preprocess-loader',
                options: {
                  type: 'css',
                  context: {
                    H5: true,
                    'APP-PLUS': false,
                    'MP-QQ': false,
                    'MP-WEIXIN': false,
                    'MP-BAIDU': false,
                    'MP-ALIPAY': false,
                    'MP-TOUTIAO': false,
                    MP: false,
                    APP: false,
                    'APP-PLUS-NVUE': false,
                    APP_PLUS_NVUE: false,
                    'APP-VUE': false,
                    APP_VUE: false,
                    'APP-NVUE': false,
                    APP_NVUE: false,
                    APP_PLUS: false,
                    MP_QQ: false,
                    MP_WEIXIN: false,
                    MP_BAIDU: false,
                    MP_ALIPAY: false,
                    MP_TOUTIAO: false
                  }
                }
              },
              {
                loader: 'D:\\study\\self_learn\\js_learn_code\\uni\\demo\\my-project\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: 'D:\\study\\self_learn\\js_learn_code\\uni\\demo\\my-project\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: false,
                  config: {
                    path: 'D:\\study\\self_learn\\js_learn_code\\uni\\demo\\my-project\\postcss.config.js'
                  }
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('scss') */
      {
        test: /\.scss$/,
        oneOf: [
          /* config.module.rule('scss').rule('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              {
                loader: 'D:\\study\\self_learn\\js_learn_code\\uni\\demo\\my-project\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\h5-vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: 'D:\\study\\self_learn\\js_learn_code\\uni\\demo\\my-project\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\webpack-preprocess-loader',
                options: {
                  type: 'css',
                  context: {
                    H5: true,
                    'APP-PLUS': false,
                    'MP-QQ': false,
                    'MP-WEIXIN': false,
                    'MP-BAIDU': false,
                    'MP-ALIPAY': false,
                    'MP-TOUTIAO': false,
                    MP: false,
                    APP: false,
                    'APP-PLUS-NVUE': false,
                    APP_PLUS_NVUE: false,
                    'APP-VUE': false,
                    APP_VUE: false,
                    'APP-NVUE': false,
                    APP_NVUE: false,
                    APP_PLUS: false,
                    MP_QQ: false,
                    MP_WEIXIN: false,
                    MP_BAIDU: false,
                    MP_ALIPAY: false,
                    MP_TOUTIAO: false
                  }
                }
              },
              {
                loader: 'D:\\study\\self_learn\\js_learn_code\\uni\\demo\\my-project\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              {
                loader: 'D:\\study\\self_learn\\js_learn_code\\uni\\demo\\my-project\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: false,
                  config: {
                    path: 'D:\\study\\self_learn\\js_learn_code\\uni\\demo\\my-project\\postcss.config.js'
                  }
                }
              },
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: false,
                  sassOptions: {
                    outputStyle: 'nested'
                  },
                  prependData: '\n$uni-color-primary: #007aff;\n$uni-color-success: #4cd964;\n$uni-color-warning: #f0ad4e;\n$uni-color-error: #dd524d;\n\n$uni-text-color: #333;//基本色\n$uni-text-color-inverse: #fff;//反色\n$uni-text-color-grey: #999;//辅助灰色，如加载更多的提示信息\n$uni-text-color-placeholder: #808080;\n$uni-text-color-disable: #c0c0c0;\n\n$uni-bg-color: #ffffff;\n$uni-bg-color-grey: #f8f8f8;\n$uni-bg-color-hover: #f1f1f1;//点击状态颜色\n$uni-bg-color-mask: rgba(0, 0, 0, 0.4);//遮罩颜色\n\n$uni-border-color: #c8c7cc;\n\n\n$uni-font-size-sm: 24rpx;\n$uni-font-size-base: 28rpx;\n$uni-font-size-lg: 32rpx;\n\n$uni-img-size-sm: 40rpx;\n$uni-img-size-base: 52rpx;\n$uni-img-size-lg: 80rpx;\n\n$uni-border-radius-sm: 4rpx;\n$uni-border-radius-base: 6rpx;\n$uni-border-radius-lg: 12rpx;\n$uni-border-radius-circle: 50%;\n\n$uni-spacing-row-sm: 10px;\n$uni-spacing-row-base: 20rpx;\n$uni-spacing-row-lg: 30rpx;\n\n$uni-spacing-col-sm: 8rpx;\n$uni-spacing-col-base: 16rpx;\n$uni-spacing-col-lg: 24rpx;\n\n$uni-opacity-disabled: 0.3; // 组件禁用态的透明度\n\n$uni-color-title: #2C405A; // 文章标题颜色\n$uni-font-size-title: 40rpx;\n$uni-color-subtitle: #555555; // 二级标题颜色\n$uni-font-size-subtitle: 36rpx;\n$uni-color-paragraph: #3F536E; // 文章段落颜色\n$uni-font-size-paragraph: 30rpx;\n\n  @import "@/uni.scss";'
                }
              },
              {
                loader: 'D:\\study\\self_learn\\js_learn_code\\uni\\demo\\my-project\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\webpack-preprocess-loader',
                options: {
                  type: 'css',
                  context: {
                    H5: true,
                    'APP-PLUS': false,
                    'MP-QQ': false,
                    'MP-WEIXIN': false,
                    'MP-BAIDU': false,
                    'MP-ALIPAY': false,
                    'MP-TOUTIAO': false,
                    MP: false,
                    APP: false,
                    'APP-PLUS-NVUE': false,
                    APP_PLUS_NVUE: false,
                    'APP-VUE': false,
                    APP_VUE: false,
                    'APP-NVUE': false,
                    APP_NVUE: false,
                    APP_PLUS: false,
                    MP_QQ: false,
                    MP_WEIXIN: false,
                    MP_BAIDU: false,
                    MP_ALIPAY: false,
                    MP_TOUTIAO: false
                  }
                }
              }
            ]
          },
          /* config.module.rule('scss').rule('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              {
                loader: 'D:\\study\\self_learn\\js_learn_code\\uni\\demo\\my-project\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\h5-vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: 'D:\\study\\self_learn\\js_learn_code\\uni\\demo\\my-project\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\webpack-preprocess-loader',
                options: {
                  type: 'css',
                  context: {
                    H5: true,
                    'APP-PLUS': false,
                    'MP-QQ': false,
                    'MP-WEIXIN': false,
                    'MP-BAIDU': false,
                    'MP-ALIPAY': false,
                    'MP-TOUTIAO': false,
                    MP: false,
                    APP: false,
                    'APP-PLUS-NVUE': false,
                    APP_PLUS_NVUE: false,
                    'APP-VUE': false,
                    APP_VUE: false,
                    'APP-NVUE': false,
                    APP_NVUE: false,
                    APP_PLUS: false,
                    MP_QQ: false,
                    MP_WEIXIN: false,
                    MP_BAIDU: false,
                    MP_ALIPAY: false,
                    MP_TOUTIAO: false
                  }
                }
              },
              {
                loader: 'D:\\study\\self_learn\\js_learn_code\\uni\\demo\\my-project\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: 'D:\\study\\self_learn\\js_learn_code\\uni\\demo\\my-project\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: false,
                  config: {
                    path: 'D:\\study\\self_learn\\js_learn_code\\uni\\demo\\my-project\\postcss.config.js'
                  }
                }
              },
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: false,
                  sassOptions: {
                    outputStyle: 'nested'
                  },
                  prependData: '\n$uni-color-primary: #007aff;\n$uni-color-success: #4cd964;\n$uni-color-warning: #f0ad4e;\n$uni-color-error: #dd524d;\n\n$uni-text-color: #333;//基本色\n$uni-text-color-inverse: #fff;//反色\n$uni-text-color-grey: #999;//辅助灰色，如加载更多的提示信息\n$uni-text-color-placeholder: #808080;\n$uni-text-color-disable: #c0c0c0;\n\n$uni-bg-color: #ffffff;\n$uni-bg-color-grey: #f8f8f8;\n$uni-bg-color-hover: #f1f1f1;//点击状态颜色\n$uni-bg-color-mask: rgba(0, 0, 0, 0.4);//遮罩颜色\n\n$uni-border-color: #c8c7cc;\n\n\n$uni-font-size-sm: 24rpx;\n$uni-font-size-base: 28rpx;\n$uni-font-size-lg: 32rpx;\n\n$uni-img-size-sm: 40rpx;\n$uni-img-size-base: 52rpx;\n$uni-img-size-lg: 80rpx;\n\n$uni-border-radius-sm: 4rpx;\n$uni-border-radius-base: 6rpx;\n$uni-border-radius-lg: 12rpx;\n$uni-border-radius-circle: 50%;\n\n$uni-spacing-row-sm: 10px;\n$uni-spacing-row-base: 20rpx;\n$uni-spacing-row-lg: 30rpx;\n\n$uni-spacing-col-sm: 8rpx;\n$uni-spacing-col-base: 16rpx;\n$uni-spacing-col-lg: 24rpx;\n\n$uni-opacity-disabled: 0.3; // 组件禁用态的透明度\n\n$uni-color-title: #2C405A; // 文章标题颜色\n$uni-font-size-title: 40rpx;\n$uni-color-subtitle: #555555; // 二级标题颜色\n$uni-font-size-subtitle: 36rpx;\n$uni-color-paragraph: #3F536E; // 文章段落颜色\n$uni-font-size-paragraph: 30rpx;\n\n  @import "@/uni.scss";'
                }
              },
              {
                loader: 'D:\\study\\self_learn\\js_learn_code\\uni\\demo\\my-project\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\webpack-preprocess-loader',
                options: {
                  type: 'css',
                  context: {
                    H5: true,
                    'APP-PLUS': false,
                    'MP-QQ': false,
                    'MP-WEIXIN': false,
                    'MP-BAIDU': false,
                    'MP-ALIPAY': false,
                    'MP-TOUTIAO': false,
                    MP: false,
                    APP: false,
                    'APP-PLUS-NVUE': false,
                    APP_PLUS_NVUE: false,
                    'APP-VUE': false,
                    APP_VUE: false,
                    'APP-NVUE': false,
                    APP_NVUE: false,
                    APP_PLUS: false,
                    MP_QQ: false,
                    MP_WEIXIN: false,
                    MP_BAIDU: false,
                    MP_ALIPAY: false,
                    MP_TOUTIAO: false
                  }
                }
              }
            ]
          },
          /* config.module.rule('scss').rule('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              {
                loader: 'D:\\study\\self_learn\\js_learn_code\\uni\\demo\\my-project\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\h5-vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: 'D:\\study\\self_learn\\js_learn_code\\uni\\demo\\my-project\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\webpack-preprocess-loader',
                options: {
                  type: 'css',
                  context: {
                    H5: true,
                    'APP-PLUS': false,
                    'MP-QQ': false,
                    'MP-WEIXIN': false,
                    'MP-BAIDU': false,
                    'MP-ALIPAY': false,
                    'MP-TOUTIAO': false,
                    MP: false,
                    APP: false,
                    'APP-PLUS-NVUE': false,
                    APP_PLUS_NVUE: false,
                    'APP-VUE': false,
                    APP_VUE: false,
                    'APP-NVUE': false,
                    APP_NVUE: false,
                    APP_PLUS: false,
                    MP_QQ: false,
                    MP_WEIXIN: false,
                    MP_BAIDU: false,
                    MP_ALIPAY: false,
                    MP_TOUTIAO: false
                  }
                }
              },
              {
                loader: 'D:\\study\\self_learn\\js_learn_code\\uni\\demo\\my-project\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              {
                loader: 'D:\\study\\self_learn\\js_learn_code\\uni\\demo\\my-project\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: false,
                  config: {
                    path: 'D:\\study\\self_learn\\js_learn_code\\uni\\demo\\my-project\\postcss.config.js'
                  }
                }
              },
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: false,
                  sassOptions: {
                    outputStyle: 'nested'
                  },
                  prependData: '\n$uni-color-primary: #007aff;\n$uni-color-success: #4cd964;\n$uni-color-warning: #f0ad4e;\n$uni-color-error: #dd524d;\n\n$uni-text-color: #333;//基本色\n$uni-text-color-inverse: #fff;//反色\n$uni-text-color-grey: #999;//辅助灰色，如加载更多的提示信息\n$uni-text-color-placeholder: #808080;\n$uni-text-color-disable: #c0c0c0;\n\n$uni-bg-color: #ffffff;\n$uni-bg-color-grey: #f8f8f8;\n$uni-bg-color-hover: #f1f1f1;//点击状态颜色\n$uni-bg-color-mask: rgba(0, 0, 0, 0.4);//遮罩颜色\n\n$uni-border-color: #c8c7cc;\n\n\n$uni-font-size-sm: 24rpx;\n$uni-font-size-base: 28rpx;\n$uni-font-size-lg: 32rpx;\n\n$uni-img-size-sm: 40rpx;\n$uni-img-size-base: 52rpx;\n$uni-img-size-lg: 80rpx;\n\n$uni-border-radius-sm: 4rpx;\n$uni-border-radius-base: 6rpx;\n$uni-border-radius-lg: 12rpx;\n$uni-border-radius-circle: 50%;\n\n$uni-spacing-row-sm: 10px;\n$uni-spacing-row-base: 20rpx;\n$uni-spacing-row-lg: 30rpx;\n\n$uni-spacing-col-sm: 8rpx;\n$uni-spacing-col-base: 16rpx;\n$uni-spacing-col-lg: 24rpx;\n\n$uni-opacity-disabled: 0.3; // 组件禁用态的透明度\n\n$uni-color-title: #2C405A; // 文章标题颜色\n$uni-font-size-title: 40rpx;\n$uni-color-subtitle: #555555; // 二级标题颜色\n$uni-font-size-subtitle: 36rpx;\n$uni-color-paragraph: #3F536E; // 文章段落颜色\n$uni-font-size-paragraph: 30rpx;\n\n  @import "@/uni.scss";'
                }
              },
              {
                loader: 'D:\\study\\self_learn\\js_learn_code\\uni\\demo\\my-project\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\webpack-preprocess-loader',
                options: {
                  type: 'css',
                  context: {
                    H5: true,
                    'APP-PLUS': false,
                    'MP-QQ': false,
                    'MP-WEIXIN': false,
                    'MP-BAIDU': false,
                    'MP-ALIPAY': false,
                    'MP-TOUTIAO': false,
                    MP: false,
                    APP: false,
                    'APP-PLUS-NVUE': false,
                    APP_PLUS_NVUE: false,
                    'APP-VUE': false,
                    APP_VUE: false,
                    'APP-NVUE': false,
                    APP_NVUE: false,
                    APP_PLUS: false,
                    MP_QQ: false,
                    MP_WEIXIN: false,
                    MP_BAIDU: false,
                    MP_ALIPAY: false,
                    MP_TOUTIAO: false
                  }
                }
              }
            ]
          },
          /* config.module.rule('scss').rule('normal') */
          {
            use: [
              {
                loader: 'D:\\study\\self_learn\\js_learn_code\\uni\\demo\\my-project\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\h5-vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: 'D:\\study\\self_learn\\js_learn_code\\uni\\demo\\my-project\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\webpack-preprocess-loader',
                options: {
                  type: 'css',
                  context: {
                    H5: true,
                    'APP-PLUS': false,
                    'MP-QQ': false,
                    'MP-WEIXIN': false,
                    'MP-BAIDU': false,
                    'MP-ALIPAY': false,
                    'MP-TOUTIAO': false,
                    MP: false,
                    APP: false,
                    'APP-PLUS-NVUE': false,
                    APP_PLUS_NVUE: false,
                    'APP-VUE': false,
                    APP_VUE: false,
                    'APP-NVUE': false,
                    APP_NVUE: false,
                    APP_PLUS: false,
                    MP_QQ: false,
                    MP_WEIXIN: false,
                    MP_BAIDU: false,
                    MP_ALIPAY: false,
                    MP_TOUTIAO: false
                  }
                }
              },
              {
                loader: 'D:\\study\\self_learn\\js_learn_code\\uni\\demo\\my-project\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: 'D:\\study\\self_learn\\js_learn_code\\uni\\demo\\my-project\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: false,
                  config: {
                    path: 'D:\\study\\self_learn\\js_learn_code\\uni\\demo\\my-project\\postcss.config.js'
                  }
                }
              },
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: false,
                  sassOptions: {
                    outputStyle: 'nested'
                  },
                  prependData: '\n$uni-color-primary: #007aff;\n$uni-color-success: #4cd964;\n$uni-color-warning: #f0ad4e;\n$uni-color-error: #dd524d;\n\n$uni-text-color: #333;//基本色\n$uni-text-color-inverse: #fff;//反色\n$uni-text-color-grey: #999;//辅助灰色，如加载更多的提示信息\n$uni-text-color-placeholder: #808080;\n$uni-text-color-disable: #c0c0c0;\n\n$uni-bg-color: #ffffff;\n$uni-bg-color-grey: #f8f8f8;\n$uni-bg-color-hover: #f1f1f1;//点击状态颜色\n$uni-bg-color-mask: rgba(0, 0, 0, 0.4);//遮罩颜色\n\n$uni-border-color: #c8c7cc;\n\n\n$uni-font-size-sm: 24rpx;\n$uni-font-size-base: 28rpx;\n$uni-font-size-lg: 32rpx;\n\n$uni-img-size-sm: 40rpx;\n$uni-img-size-base: 52rpx;\n$uni-img-size-lg: 80rpx;\n\n$uni-border-radius-sm: 4rpx;\n$uni-border-radius-base: 6rpx;\n$uni-border-radius-lg: 12rpx;\n$uni-border-radius-circle: 50%;\n\n$uni-spacing-row-sm: 10px;\n$uni-spacing-row-base: 20rpx;\n$uni-spacing-row-lg: 30rpx;\n\n$uni-spacing-col-sm: 8rpx;\n$uni-spacing-col-base: 16rpx;\n$uni-spacing-col-lg: 24rpx;\n\n$uni-opacity-disabled: 0.3; // 组件禁用态的透明度\n\n$uni-color-title: #2C405A; // 文章标题颜色\n$uni-font-size-title: 40rpx;\n$uni-color-subtitle: #555555; // 二级标题颜色\n$uni-font-size-subtitle: 36rpx;\n$uni-color-paragraph: #3F536E; // 文章段落颜色\n$uni-font-size-paragraph: 30rpx;\n\n  @import "@/uni.scss";'
                }
              },
              {
                loader: 'D:\\study\\self_learn\\js_learn_code\\uni\\demo\\my-project\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\webpack-preprocess-loader',
                options: {
                  type: 'css',
                  context: {
                    H5: true,
                    'APP-PLUS': false,
                    'MP-QQ': false,
                    'MP-WEIXIN': false,
                    'MP-BAIDU': false,
                    'MP-ALIPAY': false,
                    'MP-TOUTIAO': false,
                    MP: false,
                    APP: false,
                    'APP-PLUS-NVUE': false,
                    APP_PLUS_NVUE: false,
                    'APP-VUE': false,
                    APP_VUE: false,
                    'APP-NVUE': false,
                    APP_NVUE: false,
                    APP_PLUS: false,
                    MP_QQ: false,
                    MP_WEIXIN: false,
                    MP_BAIDU: false,
                    MP_ALIPAY: false,
                    MP_TOUTIAO: false
                  }
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('sass') */
      {
        test: /\.sass$/,
        oneOf: [
          /* config.module.rule('sass').rule('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              {
                loader: 'D:\\study\\self_learn\\js_learn_code\\uni\\demo\\my-project\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\h5-vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: 'D:\\study\\self_learn\\js_learn_code\\uni\\demo\\my-project\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\webpack-preprocess-loader',
                options: {
                  type: 'css',
                  context: {
                    H5: true,
                    'APP-PLUS': false,
                    'MP-QQ': false,
                    'MP-WEIXIN': false,
                    'MP-BAIDU': false,
                    'MP-ALIPAY': false,
                    'MP-TOUTIAO': false,
                    MP: false,
                    APP: false,
                    'APP-PLUS-NVUE': false,
                    APP_PLUS_NVUE: false,
                    'APP-VUE': false,
                    APP_VUE: false,
                    'APP-NVUE': false,
                    APP_NVUE: false,
                    APP_PLUS: false,
                    MP_QQ: false,
                    MP_WEIXIN: false,
                    MP_BAIDU: false,
                    MP_ALIPAY: false,
                    MP_TOUTIAO: false
                  }
                }
              },
              {
                loader: 'D:\\study\\self_learn\\js_learn_code\\uni\\demo\\my-project\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              {
                loader: 'D:\\study\\self_learn\\js_learn_code\\uni\\demo\\my-project\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: false,
                  config: {
                    path: 'D:\\study\\self_learn\\js_learn_code\\uni\\demo\\my-project\\postcss.config.js'
                  }
                }
              },
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: false,
                  sassOptions: {
                    outputStyle: 'nested',
                    indentedSyntax: true
                  },
                  prependData: '\n$uni-color-primary: #007aff;\n$uni-color-success: #4cd964;\n$uni-color-warning: #f0ad4e;\n$uni-color-error: #dd524d;\n\n$uni-text-color: #333;//基本色\n$uni-text-color-inverse: #fff;//反色\n$uni-text-color-grey: #999;//辅助灰色，如加载更多的提示信息\n$uni-text-color-placeholder: #808080;\n$uni-text-color-disable: #c0c0c0;\n\n$uni-bg-color: #ffffff;\n$uni-bg-color-grey: #f8f8f8;\n$uni-bg-color-hover: #f1f1f1;//点击状态颜色\n$uni-bg-color-mask: rgba(0, 0, 0, 0.4);//遮罩颜色\n\n$uni-border-color: #c8c7cc;\n\n\n$uni-font-size-sm: 24rpx;\n$uni-font-size-base: 28rpx;\n$uni-font-size-lg: 32rpx;\n\n$uni-img-size-sm: 40rpx;\n$uni-img-size-base: 52rpx;\n$uni-img-size-lg: 80rpx;\n\n$uni-border-radius-sm: 4rpx;\n$uni-border-radius-base: 6rpx;\n$uni-border-radius-lg: 12rpx;\n$uni-border-radius-circle: 50%;\n\n$uni-spacing-row-sm: 10px;\n$uni-spacing-row-base: 20rpx;\n$uni-spacing-row-lg: 30rpx;\n\n$uni-spacing-col-sm: 8rpx;\n$uni-spacing-col-base: 16rpx;\n$uni-spacing-col-lg: 24rpx;\n\n$uni-opacity-disabled: 0.3; // 组件禁用态的透明度\n\n$uni-color-title: #2C405A; // 文章标题颜色\n$uni-font-size-title: 40rpx;\n$uni-color-subtitle: #555555; // 二级标题颜色\n$uni-font-size-subtitle: 36rpx;\n$uni-color-paragraph: #3F536E; // 文章段落颜色\n$uni-font-size-paragraph: 30rpx;\n\n  @import "@/uni.scss";'
                }
              },
              {
                loader: 'D:\\study\\self_learn\\js_learn_code\\uni\\demo\\my-project\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\webpack-preprocess-loader',
                options: {
                  type: 'css',
                  context: {
                    H5: true,
                    'APP-PLUS': false,
                    'MP-QQ': false,
                    'MP-WEIXIN': false,
                    'MP-BAIDU': false,
                    'MP-ALIPAY': false,
                    'MP-TOUTIAO': false,
                    MP: false,
                    APP: false,
                    'APP-PLUS-NVUE': false,
                    APP_PLUS_NVUE: false,
                    'APP-VUE': false,
                    APP_VUE: false,
                    'APP-NVUE': false,
                    APP_NVUE: false,
                    APP_PLUS: false,
                    MP_QQ: false,
                    MP_WEIXIN: false,
                    MP_BAIDU: false,
                    MP_ALIPAY: false,
                    MP_TOUTIAO: false
                  }
                }
              }
            ]
          },
          /* config.module.rule('sass').rule('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              {
                loader: 'D:\\study\\self_learn\\js_learn_code\\uni\\demo\\my-project\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\h5-vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: 'D:\\study\\self_learn\\js_learn_code\\uni\\demo\\my-project\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\webpack-preprocess-loader',
                options: {
                  type: 'css',
                  context: {
                    H5: true,
                    'APP-PLUS': false,
                    'MP-QQ': false,
                    'MP-WEIXIN': false,
                    'MP-BAIDU': false,
                    'MP-ALIPAY': false,
                    'MP-TOUTIAO': false,
                    MP: false,
                    APP: false,
                    'APP-PLUS-NVUE': false,
                    APP_PLUS_NVUE: false,
                    'APP-VUE': false,
                    APP_VUE: false,
                    'APP-NVUE': false,
                    APP_NVUE: false,
                    APP_PLUS: false,
                    MP_QQ: false,
                    MP_WEIXIN: false,
                    MP_BAIDU: false,
                    MP_ALIPAY: false,
                    MP_TOUTIAO: false
                  }
                }
              },
              {
                loader: 'D:\\study\\self_learn\\js_learn_code\\uni\\demo\\my-project\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: 'D:\\study\\self_learn\\js_learn_code\\uni\\demo\\my-project\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: false,
                  config: {
                    path: 'D:\\study\\self_learn\\js_learn_code\\uni\\demo\\my-project\\postcss.config.js'
                  }
                }
              },
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: false,
                  sassOptions: {
                    outputStyle: 'nested',
                    indentedSyntax: true
                  },
                  prependData: '\n$uni-color-primary: #007aff;\n$uni-color-success: #4cd964;\n$uni-color-warning: #f0ad4e;\n$uni-color-error: #dd524d;\n\n$uni-text-color: #333;//基本色\n$uni-text-color-inverse: #fff;//反色\n$uni-text-color-grey: #999;//辅助灰色，如加载更多的提示信息\n$uni-text-color-placeholder: #808080;\n$uni-text-color-disable: #c0c0c0;\n\n$uni-bg-color: #ffffff;\n$uni-bg-color-grey: #f8f8f8;\n$uni-bg-color-hover: #f1f1f1;//点击状态颜色\n$uni-bg-color-mask: rgba(0, 0, 0, 0.4);//遮罩颜色\n\n$uni-border-color: #c8c7cc;\n\n\n$uni-font-size-sm: 24rpx;\n$uni-font-size-base: 28rpx;\n$uni-font-size-lg: 32rpx;\n\n$uni-img-size-sm: 40rpx;\n$uni-img-size-base: 52rpx;\n$uni-img-size-lg: 80rpx;\n\n$uni-border-radius-sm: 4rpx;\n$uni-border-radius-base: 6rpx;\n$uni-border-radius-lg: 12rpx;\n$uni-border-radius-circle: 50%;\n\n$uni-spacing-row-sm: 10px;\n$uni-spacing-row-base: 20rpx;\n$uni-spacing-row-lg: 30rpx;\n\n$uni-spacing-col-sm: 8rpx;\n$uni-spacing-col-base: 16rpx;\n$uni-spacing-col-lg: 24rpx;\n\n$uni-opacity-disabled: 0.3; // 组件禁用态的透明度\n\n$uni-color-title: #2C405A; // 文章标题颜色\n$uni-font-size-title: 40rpx;\n$uni-color-subtitle: #555555; // 二级标题颜色\n$uni-font-size-subtitle: 36rpx;\n$uni-color-paragraph: #3F536E; // 文章段落颜色\n$uni-font-size-paragraph: 30rpx;\n\n  @import "@/uni.scss";'
                }
              },
              {
                loader: 'D:\\study\\self_learn\\js_learn_code\\uni\\demo\\my-project\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\webpack-preprocess-loader',
                options: {
                  type: 'css',
                  context: {
                    H5: true,
                    'APP-PLUS': false,
                    'MP-QQ': false,
                    'MP-WEIXIN': false,
                    'MP-BAIDU': false,
                    'MP-ALIPAY': false,
                    'MP-TOUTIAO': false,
                    MP: false,
                    APP: false,
                    'APP-PLUS-NVUE': false,
                    APP_PLUS_NVUE: false,
                    'APP-VUE': false,
                    APP_VUE: false,
                    'APP-NVUE': false,
                    APP_NVUE: false,
                    APP_PLUS: false,
                    MP_QQ: false,
                    MP_WEIXIN: false,
                    MP_BAIDU: false,
                    MP_ALIPAY: false,
                    MP_TOUTIAO: false
                  }
                }
              }
            ]
          },
          /* config.module.rule('sass').rule('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              {
                loader: 'D:\\study\\self_learn\\js_learn_code\\uni\\demo\\my-project\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\h5-vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: 'D:\\study\\self_learn\\js_learn_code\\uni\\demo\\my-project\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\webpack-preprocess-loader',
                options: {
                  type: 'css',
                  context: {
                    H5: true,
                    'APP-PLUS': false,
                    'MP-QQ': false,
                    'MP-WEIXIN': false,
                    'MP-BAIDU': false,
                    'MP-ALIPAY': false,
                    'MP-TOUTIAO': false,
                    MP: false,
                    APP: false,
                    'APP-PLUS-NVUE': false,
                    APP_PLUS_NVUE: false,
                    'APP-VUE': false,
                    APP_VUE: false,
                    'APP-NVUE': false,
                    APP_NVUE: false,
                    APP_PLUS: false,
                    MP_QQ: false,
                    MP_WEIXIN: false,
                    MP_BAIDU: false,
                    MP_ALIPAY: false,
                    MP_TOUTIAO: false
                  }
                }
              },
              {
                loader: 'D:\\study\\self_learn\\js_learn_code\\uni\\demo\\my-project\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              {
                loader: 'D:\\study\\self_learn\\js_learn_code\\uni\\demo\\my-project\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: false,
                  config: {
                    path: 'D:\\study\\self_learn\\js_learn_code\\uni\\demo\\my-project\\postcss.config.js'
                  }
                }
              },
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: false,
                  sassOptions: {
                    outputStyle: 'nested',
                    indentedSyntax: true
                  },
                  prependData: '\n$uni-color-primary: #007aff;\n$uni-color-success: #4cd964;\n$uni-color-warning: #f0ad4e;\n$uni-color-error: #dd524d;\n\n$uni-text-color: #333;//基本色\n$uni-text-color-inverse: #fff;//反色\n$uni-text-color-grey: #999;//辅助灰色，如加载更多的提示信息\n$uni-text-color-placeholder: #808080;\n$uni-text-color-disable: #c0c0c0;\n\n$uni-bg-color: #ffffff;\n$uni-bg-color-grey: #f8f8f8;\n$uni-bg-color-hover: #f1f1f1;//点击状态颜色\n$uni-bg-color-mask: rgba(0, 0, 0, 0.4);//遮罩颜色\n\n$uni-border-color: #c8c7cc;\n\n\n$uni-font-size-sm: 24rpx;\n$uni-font-size-base: 28rpx;\n$uni-font-size-lg: 32rpx;\n\n$uni-img-size-sm: 40rpx;\n$uni-img-size-base: 52rpx;\n$uni-img-size-lg: 80rpx;\n\n$uni-border-radius-sm: 4rpx;\n$uni-border-radius-base: 6rpx;\n$uni-border-radius-lg: 12rpx;\n$uni-border-radius-circle: 50%;\n\n$uni-spacing-row-sm: 10px;\n$uni-spacing-row-base: 20rpx;\n$uni-spacing-row-lg: 30rpx;\n\n$uni-spacing-col-sm: 8rpx;\n$uni-spacing-col-base: 16rpx;\n$uni-spacing-col-lg: 24rpx;\n\n$uni-opacity-disabled: 0.3; // 组件禁用态的透明度\n\n$uni-color-title: #2C405A; // 文章标题颜色\n$uni-font-size-title: 40rpx;\n$uni-color-subtitle: #555555; // 二级标题颜色\n$uni-font-size-subtitle: 36rpx;\n$uni-color-paragraph: #3F536E; // 文章段落颜色\n$uni-font-size-paragraph: 30rpx;\n\n  @import "@/uni.scss";'
                }
              },
              {
                loader: 'D:\\study\\self_learn\\js_learn_code\\uni\\demo\\my-project\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\webpack-preprocess-loader',
                options: {
                  type: 'css',
                  context: {
                    H5: true,
                    'APP-PLUS': false,
                    'MP-QQ': false,
                    'MP-WEIXIN': false,
                    'MP-BAIDU': false,
                    'MP-ALIPAY': false,
                    'MP-TOUTIAO': false,
                    MP: false,
                    APP: false,
                    'APP-PLUS-NVUE': false,
                    APP_PLUS_NVUE: false,
                    'APP-VUE': false,
                    APP_VUE: false,
                    'APP-NVUE': false,
                    APP_NVUE: false,
                    APP_PLUS: false,
                    MP_QQ: false,
                    MP_WEIXIN: false,
                    MP_BAIDU: false,
                    MP_ALIPAY: false,
                    MP_TOUTIAO: false
                  }
                }
              }
            ]
          },
          /* config.module.rule('sass').rule('normal') */
          {
            use: [
              {
                loader: 'D:\\study\\self_learn\\js_learn_code\\uni\\demo\\my-project\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\h5-vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: 'D:\\study\\self_learn\\js_learn_code\\uni\\demo\\my-project\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\webpack-preprocess-loader',
                options: {
                  type: 'css',
                  context: {
                    H5: true,
                    'APP-PLUS': false,
                    'MP-QQ': false,
                    'MP-WEIXIN': false,
                    'MP-BAIDU': false,
                    'MP-ALIPAY': false,
                    'MP-TOUTIAO': false,
                    MP: false,
                    APP: false,
                    'APP-PLUS-NVUE': false,
                    APP_PLUS_NVUE: false,
                    'APP-VUE': false,
                    APP_VUE: false,
                    'APP-NVUE': false,
                    APP_NVUE: false,
                    APP_PLUS: false,
                    MP_QQ: false,
                    MP_WEIXIN: false,
                    MP_BAIDU: false,
                    MP_ALIPAY: false,
                    MP_TOUTIAO: false
                  }
                }
              },
              {
                loader: 'D:\\study\\self_learn\\js_learn_code\\uni\\demo\\my-project\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: 'D:\\study\\self_learn\\js_learn_code\\uni\\demo\\my-project\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: false,
                  config: {
                    path: 'D:\\study\\self_learn\\js_learn_code\\uni\\demo\\my-project\\postcss.config.js'
                  }
                }
              },
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: false,
                  sassOptions: {
                    outputStyle: 'nested',
                    indentedSyntax: true
                  },
                  prependData: '\n$uni-color-primary: #007aff;\n$uni-color-success: #4cd964;\n$uni-color-warning: #f0ad4e;\n$uni-color-error: #dd524d;\n\n$uni-text-color: #333;//基本色\n$uni-text-color-inverse: #fff;//反色\n$uni-text-color-grey: #999;//辅助灰色，如加载更多的提示信息\n$uni-text-color-placeholder: #808080;\n$uni-text-color-disable: #c0c0c0;\n\n$uni-bg-color: #ffffff;\n$uni-bg-color-grey: #f8f8f8;\n$uni-bg-color-hover: #f1f1f1;//点击状态颜色\n$uni-bg-color-mask: rgba(0, 0, 0, 0.4);//遮罩颜色\n\n$uni-border-color: #c8c7cc;\n\n\n$uni-font-size-sm: 24rpx;\n$uni-font-size-base: 28rpx;\n$uni-font-size-lg: 32rpx;\n\n$uni-img-size-sm: 40rpx;\n$uni-img-size-base: 52rpx;\n$uni-img-size-lg: 80rpx;\n\n$uni-border-radius-sm: 4rpx;\n$uni-border-radius-base: 6rpx;\n$uni-border-radius-lg: 12rpx;\n$uni-border-radius-circle: 50%;\n\n$uni-spacing-row-sm: 10px;\n$uni-spacing-row-base: 20rpx;\n$uni-spacing-row-lg: 30rpx;\n\n$uni-spacing-col-sm: 8rpx;\n$uni-spacing-col-base: 16rpx;\n$uni-spacing-col-lg: 24rpx;\n\n$uni-opacity-disabled: 0.3; // 组件禁用态的透明度\n\n$uni-color-title: #2C405A; // 文章标题颜色\n$uni-font-size-title: 40rpx;\n$uni-color-subtitle: #555555; // 二级标题颜色\n$uni-font-size-subtitle: 36rpx;\n$uni-color-paragraph: #3F536E; // 文章段落颜色\n$uni-font-size-paragraph: 30rpx;\n\n  @import "@/uni.scss";'
                }
              },
              {
                loader: 'D:\\study\\self_learn\\js_learn_code\\uni\\demo\\my-project\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\webpack-preprocess-loader',
                options: {
                  type: 'css',
                  context: {
                    H5: true,
                    'APP-PLUS': false,
                    'MP-QQ': false,
                    'MP-WEIXIN': false,
                    'MP-BAIDU': false,
                    'MP-ALIPAY': false,
                    'MP-TOUTIAO': false,
                    MP: false,
                    APP: false,
                    'APP-PLUS-NVUE': false,
                    APP_PLUS_NVUE: false,
                    'APP-VUE': false,
                    APP_VUE: false,
                    'APP-NVUE': false,
                    APP_NVUE: false,
                    APP_PLUS: false,
                    MP_QQ: false,
                    MP_WEIXIN: false,
                    MP_BAIDU: false,
                    MP_ALIPAY: false,
                    MP_TOUTIAO: false
                  }
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('less') */
      {
        test: /\.less$/,
        oneOf: [
          /* config.module.rule('less').rule('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              {
                loader: 'D:\\study\\self_learn\\js_learn_code\\uni\\demo\\my-project\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\h5-vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: 'D:\\study\\self_learn\\js_learn_code\\uni\\demo\\my-project\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\webpack-preprocess-loader',
                options: {
                  type: 'css',
                  context: {
                    H5: true,
                    'APP-PLUS': false,
                    'MP-QQ': false,
                    'MP-WEIXIN': false,
                    'MP-BAIDU': false,
                    'MP-ALIPAY': false,
                    'MP-TOUTIAO': false,
                    MP: false,
                    APP: false,
                    'APP-PLUS-NVUE': false,
                    APP_PLUS_NVUE: false,
                    'APP-VUE': false,
                    APP_VUE: false,
                    'APP-NVUE': false,
                    APP_NVUE: false,
                    APP_PLUS: false,
                    MP_QQ: false,
                    MP_WEIXIN: false,
                    MP_BAIDU: false,
                    MP_ALIPAY: false,
                    MP_TOUTIAO: false
                  }
                }
              },
              {
                loader: 'D:\\study\\self_learn\\js_learn_code\\uni\\demo\\my-project\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              {
                loader: 'D:\\study\\self_learn\\js_learn_code\\uni\\demo\\my-project\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: false,
                  config: {
                    path: 'D:\\study\\self_learn\\js_learn_code\\uni\\demo\\my-project\\postcss.config.js'
                  }
                }
              },
              {
                loader: 'less-loader',
                options: {
                  sourceMap: false
                }
              },
              {
                loader: 'D:\\study\\self_learn\\js_learn_code\\uni\\demo\\my-project\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\webpack-preprocess-loader',
                options: {
                  type: 'css',
                  context: {
                    H5: true,
                    'APP-PLUS': false,
                    'MP-QQ': false,
                    'MP-WEIXIN': false,
                    'MP-BAIDU': false,
                    'MP-ALIPAY': false,
                    'MP-TOUTIAO': false,
                    MP: false,
                    APP: false,
                    'APP-PLUS-NVUE': false,
                    APP_PLUS_NVUE: false,
                    'APP-VUE': false,
                    APP_VUE: false,
                    'APP-NVUE': false,
                    APP_NVUE: false,
                    APP_PLUS: false,
                    MP_QQ: false,
                    MP_WEIXIN: false,
                    MP_BAIDU: false,
                    MP_ALIPAY: false,
                    MP_TOUTIAO: false
                  }
                }
              }
            ]
          },
          /* config.module.rule('less').rule('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              {
                loader: 'D:\\study\\self_learn\\js_learn_code\\uni\\demo\\my-project\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\h5-vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: 'D:\\study\\self_learn\\js_learn_code\\uni\\demo\\my-project\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\webpack-preprocess-loader',
                options: {
                  type: 'css',
                  context: {
                    H5: true,
                    'APP-PLUS': false,
                    'MP-QQ': false,
                    'MP-WEIXIN': false,
                    'MP-BAIDU': false,
                    'MP-ALIPAY': false,
                    'MP-TOUTIAO': false,
                    MP: false,
                    APP: false,
                    'APP-PLUS-NVUE': false,
                    APP_PLUS_NVUE: false,
                    'APP-VUE': false,
                    APP_VUE: false,
                    'APP-NVUE': false,
                    APP_NVUE: false,
                    APP_PLUS: false,
                    MP_QQ: false,
                    MP_WEIXIN: false,
                    MP_BAIDU: false,
                    MP_ALIPAY: false,
                    MP_TOUTIAO: false
                  }
                }
              },
              {
                loader: 'D:\\study\\self_learn\\js_learn_code\\uni\\demo\\my-project\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: 'D:\\study\\self_learn\\js_learn_code\\uni\\demo\\my-project\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: false,
                  config: {
                    path: 'D:\\study\\self_learn\\js_learn_code\\uni\\demo\\my-project\\postcss.config.js'
                  }
                }
              },
              {
                loader: 'less-loader',
                options: {
                  sourceMap: false
                }
              },
              {
                loader: 'D:\\study\\self_learn\\js_learn_code\\uni\\demo\\my-project\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\webpack-preprocess-loader',
                options: {
                  type: 'css',
                  context: {
                    H5: true,
                    'APP-PLUS': false,
                    'MP-QQ': false,
                    'MP-WEIXIN': false,
                    'MP-BAIDU': false,
                    'MP-ALIPAY': false,
                    'MP-TOUTIAO': false,
                    MP: false,
                    APP: false,
                    'APP-PLUS-NVUE': false,
                    APP_PLUS_NVUE: false,
                    'APP-VUE': false,
                    APP_VUE: false,
                    'APP-NVUE': false,
                    APP_NVUE: false,
                    APP_PLUS: false,
                    MP_QQ: false,
                    MP_WEIXIN: false,
                    MP_BAIDU: false,
                    MP_ALIPAY: false,
                    MP_TOUTIAO: false
                  }
                }
              }
            ]
          },
          /* config.module.rule('less').rule('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              {
                loader: 'D:\\study\\self_learn\\js_learn_code\\uni\\demo\\my-project\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\h5-vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: 'D:\\study\\self_learn\\js_learn_code\\uni\\demo\\my-project\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\webpack-preprocess-loader',
                options: {
                  type: 'css',
                  context: {
                    H5: true,
                    'APP-PLUS': false,
                    'MP-QQ': false,
                    'MP-WEIXIN': false,
                    'MP-BAIDU': false,
                    'MP-ALIPAY': false,
                    'MP-TOUTIAO': false,
                    MP: false,
                    APP: false,
                    'APP-PLUS-NVUE': false,
                    APP_PLUS_NVUE: false,
                    'APP-VUE': false,
                    APP_VUE: false,
                    'APP-NVUE': false,
                    APP_NVUE: false,
                    APP_PLUS: false,
                    MP_QQ: false,
                    MP_WEIXIN: false,
                    MP_BAIDU: false,
                    MP_ALIPAY: false,
                    MP_TOUTIAO: false
                  }
                }
              },
              {
                loader: 'D:\\study\\self_learn\\js_learn_code\\uni\\demo\\my-project\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              {
                loader: 'D:\\study\\self_learn\\js_learn_code\\uni\\demo\\my-project\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: false,
                  config: {
                    path: 'D:\\study\\self_learn\\js_learn_code\\uni\\demo\\my-project\\postcss.config.js'
                  }
                }
              },
              {
                loader: 'less-loader',
                options: {
                  sourceMap: false
                }
              },
              {
                loader: 'D:\\study\\self_learn\\js_learn_code\\uni\\demo\\my-project\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\webpack-preprocess-loader',
                options: {
                  type: 'css',
                  context: {
                    H5: true,
                    'APP-PLUS': false,
                    'MP-QQ': false,
                    'MP-WEIXIN': false,
                    'MP-BAIDU': false,
                    'MP-ALIPAY': false,
                    'MP-TOUTIAO': false,
                    MP: false,
                    APP: false,
                    'APP-PLUS-NVUE': false,
                    APP_PLUS_NVUE: false,
                    'APP-VUE': false,
                    APP_VUE: false,
                    'APP-NVUE': false,
                    APP_NVUE: false,
                    APP_PLUS: false,
                    MP_QQ: false,
                    MP_WEIXIN: false,
                    MP_BAIDU: false,
                    MP_ALIPAY: false,
                    MP_TOUTIAO: false
                  }
                }
              }
            ]
          },
          /* config.module.rule('less').rule('normal') */
          {
            use: [
              {
                loader: 'D:\\study\\self_learn\\js_learn_code\\uni\\demo\\my-project\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\h5-vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: 'D:\\study\\self_learn\\js_learn_code\\uni\\demo\\my-project\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\webpack-preprocess-loader',
                options: {
                  type: 'css',
                  context: {
                    H5: true,
                    'APP-PLUS': false,
                    'MP-QQ': false,
                    'MP-WEIXIN': false,
                    'MP-BAIDU': false,
                    'MP-ALIPAY': false,
                    'MP-TOUTIAO': false,
                    MP: false,
                    APP: false,
                    'APP-PLUS-NVUE': false,
                    APP_PLUS_NVUE: false,
                    'APP-VUE': false,
                    APP_VUE: false,
                    'APP-NVUE': false,
                    APP_NVUE: false,
                    APP_PLUS: false,
                    MP_QQ: false,
                    MP_WEIXIN: false,
                    MP_BAIDU: false,
                    MP_ALIPAY: false,
                    MP_TOUTIAO: false
                  }
                }
              },
              {
                loader: 'D:\\study\\self_learn\\js_learn_code\\uni\\demo\\my-project\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: 'D:\\study\\self_learn\\js_learn_code\\uni\\demo\\my-project\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: false,
                  config: {
                    path: 'D:\\study\\self_learn\\js_learn_code\\uni\\demo\\my-project\\postcss.config.js'
                  }
                }
              },
              {
                loader: 'less-loader',
                options: {
                  sourceMap: false
                }
              },
              {
                loader: 'D:\\study\\self_learn\\js_learn_code\\uni\\demo\\my-project\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\webpack-preprocess-loader',
                options: {
                  type: 'css',
                  context: {
                    H5: true,
                    'APP-PLUS': false,
                    'MP-QQ': false,
                    'MP-WEIXIN': false,
                    'MP-BAIDU': false,
                    'MP-ALIPAY': false,
                    'MP-TOUTIAO': false,
                    MP: false,
                    APP: false,
                    'APP-PLUS-NVUE': false,
                    APP_PLUS_NVUE: false,
                    'APP-VUE': false,
                    APP_VUE: false,
                    'APP-NVUE': false,
                    APP_NVUE: false,
                    APP_PLUS: false,
                    MP_QQ: false,
                    MP_WEIXIN: false,
                    MP_BAIDU: false,
                    MP_ALIPAY: false,
                    MP_TOUTIAO: false
                  }
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('stylus') */
      {
        test: /\.styl(us)?$/,
        oneOf: [
          /* config.module.rule('stylus').rule('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              {
                loader: 'D:\\study\\self_learn\\js_learn_code\\uni\\demo\\my-project\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\h5-vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: 'D:\\study\\self_learn\\js_learn_code\\uni\\demo\\my-project\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\webpack-preprocess-loader',
                options: {
                  type: 'css',
                  context: {
                    H5: true,
                    'APP-PLUS': false,
                    'MP-QQ': false,
                    'MP-WEIXIN': false,
                    'MP-BAIDU': false,
                    'MP-ALIPAY': false,
                    'MP-TOUTIAO': false,
                    MP: false,
                    APP: false,
                    'APP-PLUS-NVUE': false,
                    APP_PLUS_NVUE: false,
                    'APP-VUE': false,
                    APP_VUE: false,
                    'APP-NVUE': false,
                    APP_NVUE: false,
                    APP_PLUS: false,
                    MP_QQ: false,
                    MP_WEIXIN: false,
                    MP_BAIDU: false,
                    MP_ALIPAY: false,
                    MP_TOUTIAO: false
                  }
                }
              },
              {
                loader: 'D:\\study\\self_learn\\js_learn_code\\uni\\demo\\my-project\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              {
                loader: 'D:\\study\\self_learn\\js_learn_code\\uni\\demo\\my-project\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: false,
                  config: {
                    path: 'D:\\study\\self_learn\\js_learn_code\\uni\\demo\\my-project\\postcss.config.js'
                  }
                }
              },
              {
                loader: 'stylus-loader',
                options: {
                  sourceMap: false,
                  preferPathResolver: 'webpack'
                }
              },
              {
                loader: 'D:\\study\\self_learn\\js_learn_code\\uni\\demo\\my-project\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\webpack-preprocess-loader',
                options: {
                  type: 'css',
                  context: {
                    H5: true,
                    'APP-PLUS': false,
                    'MP-QQ': false,
                    'MP-WEIXIN': false,
                    'MP-BAIDU': false,
                    'MP-ALIPAY': false,
                    'MP-TOUTIAO': false,
                    MP: false,
                    APP: false,
                    'APP-PLUS-NVUE': false,
                    APP_PLUS_NVUE: false,
                    'APP-VUE': false,
                    APP_VUE: false,
                    'APP-NVUE': false,
                    APP_NVUE: false,
                    APP_PLUS: false,
                    MP_QQ: false,
                    MP_WEIXIN: false,
                    MP_BAIDU: false,
                    MP_ALIPAY: false,
                    MP_TOUTIAO: false
                  }
                }
              }
            ]
          },
          /* config.module.rule('stylus').rule('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              {
                loader: 'D:\\study\\self_learn\\js_learn_code\\uni\\demo\\my-project\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\h5-vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: 'D:\\study\\self_learn\\js_learn_code\\uni\\demo\\my-project\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\webpack-preprocess-loader',
                options: {
                  type: 'css',
                  context: {
                    H5: true,
                    'APP-PLUS': false,
                    'MP-QQ': false,
                    'MP-WEIXIN': false,
                    'MP-BAIDU': false,
                    'MP-ALIPAY': false,
                    'MP-TOUTIAO': false,
                    MP: false,
                    APP: false,
                    'APP-PLUS-NVUE': false,
                    APP_PLUS_NVUE: false,
                    'APP-VUE': false,
                    APP_VUE: false,
                    'APP-NVUE': false,
                    APP_NVUE: false,
                    APP_PLUS: false,
                    MP_QQ: false,
                    MP_WEIXIN: false,
                    MP_BAIDU: false,
                    MP_ALIPAY: false,
                    MP_TOUTIAO: false
                  }
                }
              },
              {
                loader: 'D:\\study\\self_learn\\js_learn_code\\uni\\demo\\my-project\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: 'D:\\study\\self_learn\\js_learn_code\\uni\\demo\\my-project\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: false,
                  config: {
                    path: 'D:\\study\\self_learn\\js_learn_code\\uni\\demo\\my-project\\postcss.config.js'
                  }
                }
              },
              {
                loader: 'stylus-loader',
                options: {
                  sourceMap: false,
                  preferPathResolver: 'webpack'
                }
              },
              {
                loader: 'D:\\study\\self_learn\\js_learn_code\\uni\\demo\\my-project\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\webpack-preprocess-loader',
                options: {
                  type: 'css',
                  context: {
                    H5: true,
                    'APP-PLUS': false,
                    'MP-QQ': false,
                    'MP-WEIXIN': false,
                    'MP-BAIDU': false,
                    'MP-ALIPAY': false,
                    'MP-TOUTIAO': false,
                    MP: false,
                    APP: false,
                    'APP-PLUS-NVUE': false,
                    APP_PLUS_NVUE: false,
                    'APP-VUE': false,
                    APP_VUE: false,
                    'APP-NVUE': false,
                    APP_NVUE: false,
                    APP_PLUS: false,
                    MP_QQ: false,
                    MP_WEIXIN: false,
                    MP_BAIDU: false,
                    MP_ALIPAY: false,
                    MP_TOUTIAO: false
                  }
                }
              }
            ]
          },
          /* config.module.rule('stylus').rule('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              {
                loader: 'D:\\study\\self_learn\\js_learn_code\\uni\\demo\\my-project\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\h5-vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: 'D:\\study\\self_learn\\js_learn_code\\uni\\demo\\my-project\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\webpack-preprocess-loader',
                options: {
                  type: 'css',
                  context: {
                    H5: true,
                    'APP-PLUS': false,
                    'MP-QQ': false,
                    'MP-WEIXIN': false,
                    'MP-BAIDU': false,
                    'MP-ALIPAY': false,
                    'MP-TOUTIAO': false,
                    MP: false,
                    APP: false,
                    'APP-PLUS-NVUE': false,
                    APP_PLUS_NVUE: false,
                    'APP-VUE': false,
                    APP_VUE: false,
                    'APP-NVUE': false,
                    APP_NVUE: false,
                    APP_PLUS: false,
                    MP_QQ: false,
                    MP_WEIXIN: false,
                    MP_BAIDU: false,
                    MP_ALIPAY: false,
                    MP_TOUTIAO: false
                  }
                }
              },
              {
                loader: 'D:\\study\\self_learn\\js_learn_code\\uni\\demo\\my-project\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              {
                loader: 'D:\\study\\self_learn\\js_learn_code\\uni\\demo\\my-project\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: false,
                  config: {
                    path: 'D:\\study\\self_learn\\js_learn_code\\uni\\demo\\my-project\\postcss.config.js'
                  }
                }
              },
              {
                loader: 'stylus-loader',
                options: {
                  sourceMap: false,
                  preferPathResolver: 'webpack'
                }
              },
              {
                loader: 'D:\\study\\self_learn\\js_learn_code\\uni\\demo\\my-project\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\webpack-preprocess-loader',
                options: {
                  type: 'css',
                  context: {
                    H5: true,
                    'APP-PLUS': false,
                    'MP-QQ': false,
                    'MP-WEIXIN': false,
                    'MP-BAIDU': false,
                    'MP-ALIPAY': false,
                    'MP-TOUTIAO': false,
                    MP: false,
                    APP: false,
                    'APP-PLUS-NVUE': false,
                    APP_PLUS_NVUE: false,
                    'APP-VUE': false,
                    APP_VUE: false,
                    'APP-NVUE': false,
                    APP_NVUE: false,
                    APP_PLUS: false,
                    MP_QQ: false,
                    MP_WEIXIN: false,
                    MP_BAIDU: false,
                    MP_ALIPAY: false,
                    MP_TOUTIAO: false
                  }
                }
              }
            ]
          },
          /* config.module.rule('stylus').rule('normal') */
          {
            use: [
              {
                loader: 'D:\\study\\self_learn\\js_learn_code\\uni\\demo\\my-project\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\h5-vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: 'D:\\study\\self_learn\\js_learn_code\\uni\\demo\\my-project\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\webpack-preprocess-loader',
                options: {
                  type: 'css',
                  context: {
                    H5: true,
                    'APP-PLUS': false,
                    'MP-QQ': false,
                    'MP-WEIXIN': false,
                    'MP-BAIDU': false,
                    'MP-ALIPAY': false,
                    'MP-TOUTIAO': false,
                    MP: false,
                    APP: false,
                    'APP-PLUS-NVUE': false,
                    APP_PLUS_NVUE: false,
                    'APP-VUE': false,
                    APP_VUE: false,
                    'APP-NVUE': false,
                    APP_NVUE: false,
                    APP_PLUS: false,
                    MP_QQ: false,
                    MP_WEIXIN: false,
                    MP_BAIDU: false,
                    MP_ALIPAY: false,
                    MP_TOUTIAO: false
                  }
                }
              },
              {
                loader: 'D:\\study\\self_learn\\js_learn_code\\uni\\demo\\my-project\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: 'D:\\study\\self_learn\\js_learn_code\\uni\\demo\\my-project\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: false,
                  config: {
                    path: 'D:\\study\\self_learn\\js_learn_code\\uni\\demo\\my-project\\postcss.config.js'
                  }
                }
              },
              {
                loader: 'stylus-loader',
                options: {
                  sourceMap: false,
                  preferPathResolver: 'webpack'
                }
              },
              {
                loader: 'D:\\study\\self_learn\\js_learn_code\\uni\\demo\\my-project\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\webpack-preprocess-loader',
                options: {
                  type: 'css',
                  context: {
                    H5: true,
                    'APP-PLUS': false,
                    'MP-QQ': false,
                    'MP-WEIXIN': false,
                    'MP-BAIDU': false,
                    'MP-ALIPAY': false,
                    'MP-TOUTIAO': false,
                    MP: false,
                    APP: false,
                    'APP-PLUS-NVUE': false,
                    APP_PLUS_NVUE: false,
                    'APP-VUE': false,
                    APP_VUE: false,
                    'APP-NVUE': false,
                    APP_NVUE: false,
                    APP_PLUS: false,
                    MP_QQ: false,
                    MP_WEIXIN: false,
                    MP_BAIDU: false,
                    MP_ALIPAY: false,
                    MP_TOUTIAO: false
                  }
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('js') */
      {
        test: /\.m?jsx?$/,
        exclude: [
          function () { /* omitted long function */ }
        ],
        use: [
          {
            loader: 'babel-loader'
          },
          {
            loader: 'D:\\study\\self_learn\\js_learn_code\\uni\\demo\\my-project\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\webpack-preprocess-loader',
            options: {
              type: 'js',
              context: {
                H5: true,
                'APP-PLUS': false,
                'MP-QQ': false,
                'MP-WEIXIN': false,
                'MP-BAIDU': false,
                'MP-ALIPAY': false,
                'MP-TOUTIAO': false,
                MP: false,
                APP: false,
                'APP-PLUS-NVUE': false,
                APP_PLUS_NVUE: false,
                'APP-VUE': false,
                APP_VUE: false,
                'APP-NVUE': false,
                APP_NVUE: false,
                APP_PLUS: false,
                MP_QQ: false,
                MP_WEIXIN: false,
                MP_BAIDU: false,
                MP_ALIPAY: false,
                MP_TOUTIAO: false
              }
            }
          }
        ]
      },
      {
        test: 'D:\\study\\self_learn\\js_learn_code\\uni\\demo\\my-project\\src\\pages.json',
        use: [
          {
            loader: 'babel-loader'
          },
          {
            loader: '@dcloudio/webpack-uni-pages-loader'
          }
        ],
        type: 'javascript/auto'
      },
      {
        resourceQuery: /vue&type=template/,
        use: [
          {
            loader: 'D:\\study\\self_learn\\js_learn_code\\uni\\demo\\my-project\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\webpack-preprocess-loader',
            options: {
              type: 'html',
              context: {
                H5: true,
                'APP-PLUS': false,
                'MP-QQ': false,
                'MP-WEIXIN': false,
                'MP-BAIDU': false,
                'MP-ALIPAY': false,
                'MP-TOUTIAO': false,
                MP: false,
                APP: false,
                'APP-PLUS-NVUE': false,
                APP_PLUS_NVUE: false,
                'APP-VUE': false,
                APP_VUE: false,
                'APP-NVUE': false,
                APP_NVUE: false,
                APP_PLUS: false,
                MP_QQ: false,
                MP_WEIXIN: false,
                MP_BAIDU: false,
                MP_ALIPAY: false,
                MP_TOUTIAO: false
              }
            }
          }
        ]
      },
      {
        resourceQuery: /vue&type=script/,
        use: [
          {
            loader: 'D:\\study\\self_learn\\js_learn_code\\uni\\demo\\my-project\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\webpack-preprocess-loader',
            options: {
              type: 'js',
              context: {
                H5: true,
                'APP-PLUS': false,
                'MP-QQ': false,
                'MP-WEIXIN': false,
                'MP-BAIDU': false,
                'MP-ALIPAY': false,
                'MP-TOUTIAO': false,
                MP: false,
                APP: false,
                'APP-PLUS-NVUE': false,
                APP_PLUS_NVUE: false,
                'APP-VUE': false,
                APP_VUE: false,
                'APP-NVUE': false,
                APP_NVUE: false,
                APP_PLUS: false,
                MP_QQ: false,
                MP_WEIXIN: false,
                MP_BAIDU: false,
                MP_ALIPAY: false,
                MP_TOUTIAO: false
              }
            }
          }
        ]
      },
      {
        test: 'D:\\study\\self_learn\\js_learn_code\\uni\\demo\\my-project\\src\\main.js',
        use: [
          {
            loader: 'wrap-loader',
            options: {
              before: [
                'import \'uni-pages\';import \'uni-h5\';import \'@dcloudio/uni-stat\';'
              ]
            }
          }
        ]
      },
      {
        test: /App\.vue$/,
        use: {
          loader: 'wrap-loader',
          options: {
            before: [
              '<template><App :keepAliveInclude="keepAliveInclude"/></template>'
            ]
          }
        }
      },
      {
        resourceQuery: /vue&type=script/,
        use: [
          {
            loader: 'D:\\study\\self_learn\\js_learn_code\\uni\\demo\\my-project\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\webpack-uni-app-loader\\using-components'
          }
        ]
      },
      {
        resourceQuery: /vue&type=template/,
        use: [
          {
            loader: 'D:\\study\\self_learn\\js_learn_code\\uni\\demo\\my-project\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\webpack-uni-app-loader\\filter-modules-template.js'
          },
          {
            loader: '@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta'
          }
        ]
      },
      {
        resourceQuery: [
          /lang=wxs/,
          /blockType=wxs/
        ],
        use: [
          {
            loader: 'D:\\study\\self_learn\\js_learn_code\\uni\\demo\\my-project\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\webpack-uni-filter-loader'
          }
        ]
      }
    ]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          name: 'chunk-vendors',
          test: /[\\\/]node_modules[\\\/]/,
          priority: -10,
          chunks: 'initial'
        },
        common: {
          name: 'chunk-common',
          minChunks: 2,
          priority: -20,
          chunks: 'initial',
          reuseExistingChunk: true
        }
      }
    },
    minimizer: [
      {
        options: {
          test: /\.m?js(\?.*)?$/i,
          chunkFilter: () => true,
          warningsFilter: () => true,
          extractComments: false,
          sourceMap: true,
          cache: true,
          cacheKeys: defaultCacheKeys => defaultCacheKeys,
          parallel: false,
          include: undefined,
          exclude: undefined,
          minify: undefined,
          terserOptions: {
            compress: {
              arrows: false,
              collapse_vars: false,
              comparisons: false,
              computed_props: false,
              hoist_funs: false,
              hoist_props: false,
              hoist_vars: false,
              inline: false,
              loops: false,
              negate_iife: false,
              properties: false,
              reduce_funcs: false,
              reduce_vars: false,
              switches: false,
              toplevel: false,
              typeofs: false,
              booleans: true,
              if_return: true,
              sequences: true,
              unused: true,
              conditionals: true,
              dead_code: true,
              evaluate: true
            },
            mangle: {
              safari10: true
            }
          }
        }
      }
    ]
  },
  plugins: [
    /* config.plugin('vue-loader') */
    new VueLoaderPlugin(),
    /* config.plugin('define') */
    new DefinePlugin(
      {
        'process.env': {
          NODE_ENV: '"development"',
          VUE_APP_INDEX_CSS_HASH: '"439536fb"',
          VUE_APP_PLATFORM: '"h5"',
          BASE_URL: '"/h5/"'
        }
      }
    ),
    /* config.plugin('case-sensitive-paths') */
    new CaseSensitivePathsPlugin(),
    /* config.plugin('friendly-errors') */
    new FriendlyErrorsWebpackPlugin(
      {
        additionalTransformers: [
          function () { /* omitted long function */ }
        ],
        additionalFormatters: [
          function () { /* omitted long function */ }
        ]
      }
    ),
    /* config.plugin('html-index') */
    new HtmlWebpackPlugin(
      {
        templateParameters: function () { /* omitted long function */ },
        chunks: [
          'chunk-vendors',
          'chunk-common',
          'index'
        ],
        template: 'D:\\study\\self_learn\\js_learn_code\\uni\\demo\\my-project\\src\\template.h5.html',
        filename: 'index.html',
        title: 'hello uni-app',
        baseUrl: '/h5/'
      }
    ),
    /* config.plugin('uni-define') */
    new (require('D:\\study\\self_learn\\js_learn_code\\uni\\demo\\my-project\\node_modules\\webpack\\lib\\DefinePlugin.js'))(
      {
        'process.env.UNI_ENV': '"h5"'
      }
    ),
    {
      patterns: [
        {
          from: 'D:\\study\\self_learn\\js_learn_code\\uni\\demo\\my-project\\src\\static',
          to: 'D:\\study\\self_learn\\js_learn_code\\uni\\demo\\my-project\\dist\\dev\\h5\\static',
          ignore: [
            'app-plus/**/*',
            'mp-qq/**/*',
            'mp-weixin/**/*',
            'mp-baidu/**/*',
            'mp-alipay/**/*',
            'mp-toutiao/**/*'
          ]
        },
        {
          from: 'D:\\study\\self_learn\\js_learn_code\\uni\\demo\\my-project\\node_modules\\@dcloudio\\uni-h5\\dist\\index.css',
          to: 'static',
          transform: function () { /* omitted long function */ }
        },
        {
          from: 'D:\\study\\self_learn\\js_learn_code\\uni\\demo\\my-project\\node_modules\\@dcloudio\\uni-h5\\dist\\index.css',
          to: 'static\\[name].439536fb.[ext]',
          transform: function () { /* omitted long function */ }
        },
        {
          from: 'D:\\study\\self_learn\\js_learn_code\\uni\\demo\\my-project\\src\\hybrid\\html',
          to: 'D:\\study\\self_learn\\js_learn_code\\uni\\demo\\my-project\\dist\\dev\\h5\\hybrid\\html'
        }
      ],
      options: {}
    },
    {
      definitions: {
        'wx.nextTick': [
          '@dcloudio/uni-mp-weixin/dist/mp.js',
          'nextTick'
        ],
        Page: [
          '@dcloudio/uni-mp-weixin/dist/mp.js',
          'Page'
        ],
        Component: [
          '@dcloudio/uni-mp-weixin/dist/mp.js',
          'Component'
        ],
        Behavior: [
          '@dcloudio/uni-mp-weixin/dist/mp.js',
          'Behavior'
        ],
        getDate: [
          '@dcloudio/uni-mp-weixin/dist/wxs.js',
          'getDate'
        ],
        getRegExp: [
          '@dcloudio/uni-mp-weixin/dist/wxs.js',
          'getRegExp'
        ]
      }
    },
    {
      content: '\n        <script>\n        (function () {\r\n  var userAgent = navigator.userAgent\r\n  window.addEventListener(\'resize\', function () {\r\n    if (navigator.userAgent !== userAgent) {\n      /* eslint-disable no-undef */\r\n      location.reload()\r\n    }\r\n  })\r\n})()\n\n        </script>\n        '
    }
  ],
  entry: {
    index: [
      'D:\\study\\self_learn\\js_learn_code\\uni\\demo\\my-project\\src\\main.js'
    ]
  },
  performance: {
    assetFilter: function () { /* omitted long function */ }
  },
  devtool: 'source-map'
}
