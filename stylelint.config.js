export default {
    extends: ['stylelint-config-standard', 'stylelint-config-standard-vue'],
    overrides: [
        {
            files: ['**/*.vue'],
            customSyntax: 'postcss-html'
        },
        {
            files: ['**/*.scss'],
            customSyntax: 'postcss-scss'
        }
    ],
    rules: {
        // 这里可以覆盖或添加你自定义的规则
        // 例如：允许空文件
        'no-empty-source': true,
        // 关闭空行规则（按需）
        'declaration-empty-line-before': null,
        'unit-allowed-list': ['px']
    }
}
