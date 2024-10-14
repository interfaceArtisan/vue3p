<template>
  <div ref="echartsRef" class="chart-container"></div>
</template>

<script lang="ts" setup>
import * as echarts from 'echarts'
import '../assets/china'
import { geoCoordMap } from '../assets/geoMap'
import { onMounted, ref } from 'vue'

const echartsRef = ref()
const initChart = async () => {
  console.log('initChart')
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(echartsRef.value)
  // 绘制图表

  // 获取中国地图的json数据
  /* const chinaJson = await fetch(
    'https://geo.datav.aliyun.com/areas_v3/bound/100000_full.json'
  ).then((res) => res.json())

  echarts.registerMap('china', chinaJson)
  console.log('chinaJson:', chinaJson)

//  模拟一些数据
const mockData = chinaJson.features.map((v) => ({
    name: v.properties.name,
    value: [Math.round(Math.random() * 1000), Math.round(Math.random() * 1000)],
}))
console.log('mockData:', mockData) */

  // 模拟数据
  const mockData = []
  for (let [name] of Object.entries(geoCoordMap)) {
    mockData.push({
      name,
      value: Math.floor(Math.random() * 10000),
    })
  }
  let scatterData = []
  for (let [name, value] of Object.entries(geoCoordMap)) {
    scatterData.push({
      name,
      value: [...value, Math.round(Math.random() * 1000)], // value前两项需为经纬度，第三项为数据
    })
  }
  let option = {
    geo: {
      map: 'china',
      scaleLimit: { // 设置放大缩小的比例
        min: 0.5,
        max: 5
      },

      label: {
        show: true, // 显示省份
        color: '#f00',
      },
      roam: true,
      itemStyle: {
        areaColor: '#e7e8ea', // 地图每一块的背景色
      },
      select: {
        itemStyle: {
          areaColor: '#f00', // 选中时的颜色
        },
      },
      emphasis: {
        label: {
          color: '#f00', // 鼠标悬浮时的字体颜色
          show: true,
        },
        itemStyle: {
          areaColor: 'pink', // 鼠标悬浮时的背景颜色
        },
      },
      colorBy: 'data',
      tooltip: {
        borderColor: '#ff7570',
        textStyle: {
          color: '#999',
          textBorderWidth: 5
        }
      }
    },
    title: {
      text: '中国地图',
      textAlign: 'auto',
      left: 'center',
      top: '20px',
    },
    tooltip: {
      trigger: 'item',
      // borderColor: 'pink',
    },
    series: [
      {
        type: 'map',
        map: 'china', // 引入地图数据s
        layoutCenter: ['50%', '50%'],
        layoutSize: '100%',

        geoIndex: 0,

        // colorBy: 'data', // 以数据的大小，tooltip生成不同的颜色边框，如果设置了tooltip的borderColor，那么会覆盖这个设置（好像时这样）
        name: '省份随机数据',
        data: mockData,

      },
      {
        type: 'scatter',

        tooltip: {
          trigger: 'item',
          borderColor: 'blue',
          formatter: (params: { data: { name: string; value: number[] } }) => {
            return `${params.data.name}<br/>${params.data.value[2]}`
          },
        },
        coordinateSystem: 'geo',
        symbol: 'pin',
        symbolSize: [15, 15],
        label: {
          show: true,
          color: '#000',
          formatter(val: { value: number[] }) {
            return val.value[2]
          },
          position: 'bottom',
        },
        itemStyle: {
          color: '#1E90FF', //标志颜色
        },
        data: scatterData,
      },
    ],
  }
  myChart.setOption(option)

  myChart.on('click', function (params) {
    console.log(params)
  })
}

onMounted(() => {
  initChart()
})
</script>

<style lang="less" scoped>
.chart-container {
  width: 100%;
  height: 100%;
}
</style>
