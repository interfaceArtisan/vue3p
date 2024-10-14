<template>
    <div class="container">
        <header class="header">
            <h1>可视化展板-ECharts</h1>
            <div class="show-time">当前时间：{{ time }}</div>
        </header>
        <div class="main-box">
            <div class="column">
                <Panel title="柱形图-就业行业">
                    <template #chart>
                        <div ref="barEmployment" class="chart-employment"></div>
                    </template>
                </Panel>
                <Panel title="柱形图-就业行业">
                    <template #chart>
                        <div ref="barEmployment2" class="chart-employment"></div>
                    </template>
                </Panel>
                <Panel title="柱形图-就业行业">
                    <template #chart>
                        <div ref="barEmployment3" class="chart-employment"></div>
                    </template>
                </Panel>
            </div>
            <div class="column">
                <div class="number">
                    <div class="count">
                        <span class="digit-demand">123</span>
                        <span class="digit-supply">456</span>
                    </div>
                    <div class="title">
                        <span class="title-demand">需求人数</span>
                        <span class="title-supply">供应人数</span>
                    </div>
                </div>
                <div class="map">
                    <div ref="chinaMap" class="chart"></div>
                    <div class="map1"></div>
                    <div class="map2"></div>
                    <div class="map3"></div>
                </div>
            </div>
            <div class="column">
                <Panel title="柱形图-技能掌握">
                    <template #chart>
                        <div ref="barEmployment" class="chart-employment"></div>
                    </template>
                </Panel>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import Panel from '../components/Panel.vue'
import { onMounted, ref } from 'vue'
import * as echarts from 'echarts'

const chinaMap = ref()
let time = ref('')
const updateTime = () => {
    clearTimeout(t)
    time.value = new Date().toLocaleString().replace(/\//g, '-')
    t = setTimeout(updateTime, 1000)
}
let t = setTimeout(updateTime, 1000)

// 左一的柱状图
const barEmployment = ref<HTMLDivElement>()
onMounted(() => {
    const employmentChart = echarts.init(barEmployment.value)
    employmentChart.setOption({
        xAxis: {
            type: 'category',
            data: ['旅游业', '电商业', '餐饮业', '服务业-长文本长文本长文本', '其他1', '其他2'],
            axisLine: {
                show: false,
                lineStyle: {
                    color: 'rgba(255, 255, 255, .5)', // x轴颜色
                    width: 1
                }
            },
            axisTick: {
                alignWithLabel: true,
                lineStyle: {
                    color: 'rgba(255, 255, 255, .5)', // x轴刻度盘颜色
                }
            },
            axisLabel: {
                color: 'rgba(255, 255, 255, .6)',
                fontSize: 12,
                width: 50,
                overflow: 'truncate',
                // showMinLabel: true,
            },
            splitLine: { // 分隔线，分割x轴，这里设置为不显示
                show: false,
                lineStyle: {
                    color: 'rgba(255, 255, 255, .2)'
                }
                
            }
        },
        yAxis: {
            type: 'value',
            axisLine: {
                show: true,
                lineStyle: {
                    color: 'rgba(255, 255, 255, .1)', // y轴颜色
                    width: 1
                }
            },
            splitLine: { // 分隔线，分割y轴
                lineStyle: {
                    color: 'rgba(255, 255, 255, .1)'
                }
                
            },
            axisLabel: {
                color: 'rgba(255, 255, 255, .6)',
                fontSize: 12
            },
            
        },
        series: [{
            data: [120, 200, 150, 80, 700, 1110],
            type: 'bar',
            showBackground: true,
            backgroundStyle: {
                color: 'rgba(180, 180, 180, 0.2)'
            },
            itemStyle: {
                borderRadius: [8, 8, 0, 0]
            },
            barWidth: '50%'
        }],
        color: '#2f89cf',
        grid: {
            left: "0%",
            top: "10px",
            right: "0%",
            bottom: "0%",
            containLabel: true
        },
        tooltip: {
            trigger: "axis",
            axisPointer: {
                // 坐标轴指示器，坐标轴触发有效
                type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
            }
        },
    })

    // 监听窗口大小变化, 这里需要添加throttle
    window.addEventListener("resize", () => {
        employmentChart.resize()
    })
    const myChart = echarts.init(chinaMap.value)
    myChart.setOption({
        backgroundColor: '#404a59',
        title: {
            text: 'ECharts 入门示例'
        },
        tooltip: {},
        xAxis: {
            data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [
            {
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
            }
        ]
        });
})

</script>

<style lang="less">
@font-face {
  font-family: electronicFont;
  src: url(../font/DS-DIGIT.TTF);
}
// 设置边框border
.clipborder(@borderpos1, @borderpos2, @width: .125rem, @heiht: .125rem) {
    content: '';
    position: absolute;
    @{borderpos1}: 0;
    @{borderpos2}: 0;
    width: @width;
    height: @heiht;
    border-@{borderpos1}: .025rem solid #02a6b5;
    border-@{borderpos2}: .025rem solid #02a6b5;
}
.container {
    width: 100%;
    height: 100%;
    background: url(../assets/images/bg.jpg) no-repeat center top;
    background-size: 100% 100%;
}
.header {
    position: relative;
    background: url(../assets/images/head_bg.png) no-repeat;
    h1 {
        height: 100px;
        text-align: center;
        color: #fff;
        font-size: 38px;
        line-height: 100px;
    }
    .show-time {
        position: absolute;
        right: 30px;
        top: 0;
        color: rgba(255, 255, 255, .7);
        font-size: 20px;
        line-height: 100px;
    }
}

.main-box {
    padding: .125rem .125rem 0;
    display: flex;
    .column {
        flex: 3;
        &:nth-child(2) {
            margin: 0 .125rem 15px;
            flex: 5;
        }
        .panel {
            position: relative;
            height: 3.875rem;
            padding: 0 .1875rem .5rem;
            margin-bottom: .1875rem;
            border: 1px solid rgba(25, 186, 139, .17);
            background: url(../assets/images/line.png) rgba(255, 255, 255, .04);
            &::before {
                .clipborder(left, top);
            }
            &::after {
                .clipborder(right, top);
            }
            
            h2 {
                height: 48px;
                line-height: 48px;
                text-align: center;
                font-size: 20px;
                font-weight: 400;
                color: #fff;
            }
            .panel-footer {
                position: absolute;
                bottom: 0;
                width: 100%;
                left: 0;
                &::before {
                    .clipborder(left, bottom);
                }
                &::after {
                    .clipborder(right, bottom);
                }
            }
        }

        .number {
            padding: 15px;
            background: rgba(101, 132, 226, .05);
            font-family: electronicFont;
            .count {
                position: relative;
                display: flex;
                align-items: center;
                border: .0125rem solid rgba(25, 186, 139, .27);
                height: 1rem;
                padding: .05rem 0;
                font-size: .875rem;
                line-height: 1rem;
                color: #ffeb7b;
                text-align: center;
                font-weight: bold;
                &::before {
                    .clipborder(left, top, .375rem, .125rem)
                }
                &::after {
                    .clipborder(right, bottom, .375rem, .125rem)
                }
                .digit-demand {
                    position: relative;
                    flex: 1;
                    &::after {
                        content: '';
                        position: absolute;
                        width: .0125rem;
                        height: 50%;
                        background: rgba(25, 186, 139, .17);
                        right: 0;
                        top: 25%;
                    }
                }
                .digit-supply {
                    flex: 1;
                }
            }
            .title {
                display: flex;
                margin-top: .125rem;
                color: rgba(255, 255, 255, .7);
                font-size: .225rem;
                text-align: center;
                .title-demand {
                    flex: 1;
                }
                .title-supply {
                    flex: 1;
                }
            }

        }
    }
    
}

.map {
    position: relative;
    height: 11.425rem;

    .chart {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 5;
        height: 11.425rem;
        width: 100%;
        background-color: pink;
    }
    .map1,
    .map2,
    .map3 {
        position: absolute;
        width: 6.475rem;
        height: 6.475rem;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: url(../assets/images/map.png) no-repeat;
        background-size: 100% 100%;
        opacity: 0.3;
    }
    .map2 {
        width: 7.075rem;
        height: 7.075rem;
        background-image: url(../assets/images/jt.png);
        animation: rotate1 10s linear reverse infinite;
    }
    .map3 { 
        width: 8.0375rem;
        height: 8.0375rem;
        background-image: url(../assets/images/lbx.png);
        animation: rotate1 15s linear infinite;
        opacity: 0.6;
    }

    @keyframes rotate1 {
        from {
            transform: translate(-50%, -50%) rotate(0deg);
        }
        to {
            transform: translate(-50%, -50%) rotate(360deg);
        }
        
    }
}

</style>