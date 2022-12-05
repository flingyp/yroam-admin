<template>
  <div
    :ref="
      el => {
        // @ts-ignore
        chartRef = el
      }
    "
    class="inline-block m-[1rem]"
    :style="{ width: width + 'px', height: height + 'px' }"
  ></div>
</template>

<script setup lang="ts">
  import { ref, watchEffect } from 'vue'
  import { useSystemConfigStore } from '@store/index'
  import { ThemeModeType } from '@configs'
  import { echartInstance, ECOption } from './EchartImport'

  defineOptions({ name: 'EchartContainer' })

  const props = defineProps<{
    config: ECOption
    width: number
    height: number
  }>()

  const chartRef = ref<Element>()

  let chartInstance: echartInstance.ECharts | null = null

  const SystemConfigStore = useSystemConfigStore()

  function initChart(theme: ThemeModeType) {
    return echartInstance.init(chartRef.value as HTMLElement, theme === 'DARK' ? 'dark' : 'light')
  }

  function mountedChart() {
    if (chartInstance) {
      chartInstance.dispose()
    }

    chartInstance = initChart(SystemConfigStore.ThemeMode)

    // 修改图表背景色统一为透明（深色模式的默认背景色与系统的背景色不搭）
    const chartOption = props.config
    chartOption.backgroundColor = 'transparent'

    chartInstance.setOption(chartOption)
  }

  function chartResize() {
    if (chartInstance) {
      chartInstance.resize()
    }
  }

  watchEffect(() => {
    if (chartRef.value) {
      mountedChart()
    }
  })

  window.addEventListener('resize', () => {
    chartResize()
  })
</script>
