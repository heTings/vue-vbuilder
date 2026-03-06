import js from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'
import vueEslintParser from 'vue-eslint-parser'
import tsParser from '@typescript-eslint/parser'
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import globals from 'globals'

export default [
    // 配置全局变量
    {
        languageOptions: {
            globals: {
                ...globals.browser, // 浏览器
                // ...globals.node,    // node 环境

                // vue 3 组合式 api 定义事件
                computed: 'readonly',
                defineEmits: 'readonly',
                defineExpose: 'readonly',
                defineProps: 'readonly',
                onMounted: 'readonly',
                onUnmounted: 'readonly',
                reactive: 'readonly',
                ref: 'readonly'
            }
        }
    },
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
