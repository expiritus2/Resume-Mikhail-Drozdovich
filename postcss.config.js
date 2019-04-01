module.exports = ({file, option, env}) => ({
    parser: file.extname === '.sss' ? 'sugarss' : false,
    plugins: {
        'postcss-cssnext': {},
        cssnano: env === 'production' ? {} : false,
    }
});