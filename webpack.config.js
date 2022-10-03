const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const FixStyleOnlyEntriesPlugin = require('webpack-fix-style-only-entries');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const path = require('path');

module.exports = {
	mode: 'development',
	entry: {
        'index': './src/js/index.js',
        './components/App': './src/js/components/App.vue',
        './components/Header': './src/js/components/Header.vue',
        './components/Content': './src/js/components/Content.vue',
        './components/CardList': './src/js/components/CardList.vue',
        './components/Card': './src/js/components/Card.vue',
        'index.css': './src/scss/style.scss',
    },  
    output: {
        //出力するファイル名
        filename: 'js/[name].js',
        path: path.resolve(__dirname, 'public/')
    },
	module: {
		rules: [
            {
                test: /\.(png|jpg|gif|svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            //nameは画像名、extは拡張子
                            name: 'images/[name].[ext]',
                            outputPath: 'images', //出力先
                            PublicPath: './images' //htmlから読み込まれる
                        }
                    },
                ]
            },
			{
                // ローダーの処理対象ファイル
				test: /\.s[ac]ss$/i,
                // ローターの処理対象となるディレクトリ
                include: path.resolve(__dirname, 'src/scss'),
				use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    {
                        loader: "css-loader",
                    },
                    {
					    loader: 'sass-loader',
                    }
				],
			},
            {
                //ローダーの対象
                test: /\.vue$/,
                loader: "vue-loader"
            },

		],
	},
    resolve: {
        extensions: [".js", ".vue"],
        alias: {
            vue$: "vue/dist/vue.esm.js",
            '@': path.resolve('src'),
        }
    },
	plugins: [
		new MiniCssExtractPlugin({
			filename: 'css/style.css'
		}),
		new FixStyleOnlyEntriesPlugin(),
        new VueLoaderPlugin(),
	],
};