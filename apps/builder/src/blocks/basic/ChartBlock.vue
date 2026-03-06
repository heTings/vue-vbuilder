<template>
    <div class="chart">
        <ChartRenderer :blockInfo="blockInfo" />
    </div>
</template>
<script setup lang="ts">
import ChartRenderer from '@/components/ChartRenderer/ChartRenderer.vue'
import type { ChartBlockInfo } from '@/types/block'

defineProps<{
    blockInfo: ChartBlockInfo
}>()
</script>

<style scoped>
.chart {
    width: 100%;
}
</style>
