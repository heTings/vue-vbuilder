import js from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'
import vueEslintParser from 'vue-eslint-parser'
import tsParser from '@typescript-eslint/parser'
import simpleImportSort from 'eslint-plugin-simple-import-sort'

export default [
    {
        files: ['**/*.{ts,vue}'],
        rules: {
            ...js.configs.recommended.rules,
            ...pluginVue.configs['flat/recommended'].rules,
            'no-console': 'error',
            'simple-import-sort/imports': 'error'
        },
        languageOptions: {
            parser: vueEslintParser,
            parserOptions: {
                parser: tsParser
            }
        },
        plugins: {
            'simple-import-sort': simpleImportSort
        }
    }
]
