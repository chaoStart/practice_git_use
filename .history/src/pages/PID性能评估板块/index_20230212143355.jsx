import React, { memo } from 'react'
// import './index.less'
import * as echarts from 'echarts'
import { useAsyncEffect } from 'ahooks'
const PIDPerformanceEvaluation = memo(() => {
    useAsyncEffect(async () => {
        chartInit()
    })
    const chartInit = () => {
        let mytrChart = echarts.init(document.getElementById("trChart"));
        mytrChart.setOption({
            tooltip: {
                trigger: "axis",
                axisPointer: {
                    type: "shadow",
                },
            },
            legend: {
                data: [
                    // {
                    //     name: "上升时间",
                    //     textStyle: {
                    //         //文字样式
                    //         color: "#00FFFF",
                    //         fontSize: "11",
                    //     },
                    // },
                    {
                        name: "峰值时间",
                        textStyle: {
                            //文字样式
                            color: "#8B78F6",
                            fontSize: "11",
                        },
                    },
                    {
                        name: "调节时间",
                        textStyle: {
                            //文字样式
                            color: "#FFC64F",
                            fontSize: "11",
                        },
                    },
                ],
                right: '10%',
                top: '0%'
            },
            grid: {
                top: '20%',
                bottom: '0%',
                left: '2%',
                right: '0%',
                containLabel: true,
                // height: '95%',
            },
            xAxis: [
                {
                    type: "category",
                    data: [
                        "脱醇塔温度控制回路",
                        "脱水塔温度控制回路",
                        "脱酯塔温度控制回路",
                        // '反应器控制回路',
                    ],
                    // 坐标轴文本颜色
                    axisLable: {
                        textStyle: {
                            color: "#00CCFF",
                            fontSize: "28px",
                        },
                    },
                    //刻度线标签颜色
                    axisLine: {
                        lineStyle: {
                            color: "#00CCFF", // 颜色
                        },
                    },
                },
            ],
            yAxis: [
                {
                    type: "value",
                    // 坐标轴文本颜色
                    axisLable: {
                        textStyle: {
                            color: "#00CCFF",
                        },
                    },
                    //刻度线标签颜色
                    axisLine: {
                        lineStyle: {
                            color: "#00CCFF", // 颜色
                        },
                    },
                    splitLine: {
                        show: true,
                        lineStyle: {
                            type: 'dashed',
                            width: 1.59,
                            color: '#6997B0'
                        }
                    },
                    name: "  单位（hr）",
                    nameTextStyle: {
                        color: "#00CCFF",
                        nameLocation: "start",
                    },
                    // axisLabel: {
                    //     formatter: '{value}S'
                    // }
                },
            ],
            series: [
                // {
                //     name: "上升时间",
                //     barWidth: 15,
                //     type: "bar",
                //     itemStyle: {
                //         normal: {
                //             //折线颜色
                //             color: "#00FFFF",
                //         },
                //     },
                //     emphasis: {
                //         focus: "series",
                //     },
                //     data: [320, 332, 301, 334, 390, 330],
                // },
                {
                    name: "峰值时间",
                    barWidth: 15,
                    type: "bar",
                    emphasis: {
                        focus: "series",
                    },
                    itemStyle: {
                        normal: {
                            //折线颜色
                            color: "#8B78F6",
                        },
                    },
                    data: [0.28, 0.19, 0.24],
                },
                {
                    name: "调节时间",
                    type: "bar",
                    barWidth: 15,
                    emphasis: {
                        focus: "series",
                    },
                    itemStyle: {
                        normal: {
                            //折线颜色
                            color: "#FFC64F",
                        },
                    },
                    data: [4.19, 1.33, 3.84],
                },
            ],
        });
        window.addEventListener('resize', () => {
            mytrChart.resize();
        })
    };
    return (
        <div id="trChart" style={{ width: '100%', height: '100%' }}></div>
    )
})

export default PIDPerformanceEvaluation