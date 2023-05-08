import React, { memo } from 'react'
import * as echarts from 'echarts'
import { useAsyncEffect } from 'ahooks'
const EnergyIndicator = memo(() => {
    useAsyncEffect(async () => {
        chartInit()
    });
    const chartInit1 = () => {
        let mychart = echarts.init(document.getElementById('energyIndicator'));
        let dataX = ['水', '电', '天然气', '煤炭']
        let productionLoad = [45, 14, 50, 39];
        let option;
        option = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'none',
                },
                formatter: function (params) {
                    return (
                        dataX[params[0].dataIndex] +
                        '<br> 日计划产量' +
                        productionLoad[params[0].dataIndex] +
                        '' +
                        '<br> 日实时产量' +
                        productionLoad[params[0].dataIndex]
                    );
                },
            },
            grid: {
                top: '22%',
                bottom: '0%',
                left: '1%',
                right: '0%',
                containLabel: true,
                height: '79%',
            },
            // legend: {
            //     data: ['日计划产量', '日实时产量'],
            //     right: '10',
            //     top: '10',
            //     textStyle: {
            //         // padding: [4, 0, 0, 0],
            //         color: '33FFFF',
            //         fontSize: 15
            //     },
            //     itemWidth: 15,
            //     itemHeight: 10,
            //     itemGap: 25,
            // },
            xAxis: {
                type: 'category',
                data: dataX,
                axisLine: {
                    lineStyle: {
                        color: 'rgba(66, 192, 255, .3)',
                    },
                },
                axisLabel: {
                    rotate: 0,
                    textStyle: {
                        color: '#33FFFF',
                        fontSize: 15,
                    },
                },
            },

            yAxis: [
                {
                    type: 'value',
                    splitLine: {
                        show: false,
                    },
                    axisLabel: {
                        textStyle: {
                            color: '#5FBBEB',
                            fontSize: 15,
                        },
                    },
                    axisLine: {
                        lineStyle: {
                            fontSize: 24,
                            color: 'rgba(66, 192, 255, .3)',
                        },
                    },
                },
            ],
            series: [
                {
                    name: '日计划产量',
                    type: 'bar',
                    barWidth: '12px',
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                {
                                    offset: 0,
                                    // color: '#29acff',
                                    color: '#0AA0F6',
                                },
                                {
                                    offset: 1,
                                    // color: '#4bdfff',
                                    color: '#71F6FF ',
                                },
                            ]),
                            // barBorderRadius: 6,
                        },
                    },
                    data: productionLoad,
                },
                // {
                //     name: '日实时产量',
                //     type: 'bar',
                //     barWidth: '12px',
                //     itemStyle: {
                //         normal: {
                //             color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                //                 {
                //                     offset: 0,
                //                     // color: '#29acff',
                //                     color: '#00B66F',
                //                 },
                //                 {
                //                     offset: 1,
                //                     // color: '#4bdfff',
                //                     color: '#90FFDC',
                //                 },
                //             ]),
                //             barBorderRadius: 6,
                //         },
                //     },
                //     data: productionLoad,
                // },
            ],
        };
        mychart.setOption(option);
        window.addEventListener('resize', () => {
            mychart.resize();
        })
    }
    const chartInit2 = (data) => {
        let mychart = echarts.init(document.getElementById('energyIndicator'));
        let option;
        option = {
            // xAxis: {
            //     type: 'time',
            //     // 去掉网格线
            //     splitLine: {
            //         show: false
            //     },
            //     //去掉x轴刻度线
            //     axisTick: {
            //         show: false
            //     },
            //     // 坐标轴文本颜色
            //     axisLable: {
            //         textStyle: {
            //             color: '#00CCFF'
            //         }
            //     },
            //     //刻度线标签颜色
            //     axisLine: {
            //         lineStyle: {
            //             color: '#00CCFF', // 颜色
            //         }
            //     },
            // },
            // yAxis: {
            //     type: 'value',
            //     // 坐标自适应
            //     scale: true,
            //     splitLine: {
            //         show: false
            //     },
            //     axisLable: {
            //         textStyle: {
            //             color: '#00CCFF'
            //         }
            //     },
            //     axisLine: {
            //         lineStyle: {
            //             color: '#00CCFF', // 颜色
            //         }
            //     }
            // },
            xAxis: {
                type: 'category',
                // data: ['4-21:7:29:10', '4-21:7:29:20', '4-21:7:29:30', '4-21:7:29:40', '4-21:7:29:50', '4-21:7:30:00', '4-21:7:30:10', '4-21:7:30:20', '4-21:7:30:30', '4-21:7:30:40', '4-21:7:30:50', '4-21:7:31:00', '4-21:7:31:10', '4-21:7:31:20', '4-21:7:31:30', '4-21:7:31:40', '4-21:7:31:50', '4-21:7:32:00', '4-21:7:32:10', '4-21:7:32:20'],
                data: ['7:15', '7:30', '7:45', '8:00', '8:15', '8:30', '8:45', '9:00', '9:15', '9:30',],
                // 去掉网格线
                splitLine: {
                    show: false
                },
                //去掉x轴刻度线
                axisTick: {
                    show: false
                },
                // 坐标轴文本颜色
                axisLable: {
                    textStyle: {
                        color: '#00CCFF'
                    }
                },
                axisLabel: { fontSize: 12, },
                //刻度线标签颜色
                axisLine: {
                    lineStyle: {
                        color: '#00CCFF', // 颜色
                    }
                },
            },
            yAxis: {
                type: 'value',
                show: true,
                // 坐标自适应
                scale: true,
                splitLine: {
                    show: true,
                    lineStyle: {
                        type: 'dashed',
                        width: 0.59,
                        color: '#6997B0'
                    }
                },
                axisLable: {
                    textStyle: {
                        color: '#00CCFF'
                    }
                },
                axisLabel: { fontSize: 12, },
                axisLine: {
                    lineStyle: {
                        color: '#00CCFF', // 颜色81
                    }
                },
                name: "单位（%）",
                nameTextStyle: {
                    color: "#00CCFF",
                    nameLocation: "start",
                },
            },
            tooltip: {
                trigger: 'axis'
            },
            grid: {
                top: '20%',
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            series: [
                {
                    name: '1',
                    // data: data,
                    data: [81, 89.9, 85.6, 80.2, 84.7, 85.5, 84.8, 80.1, 85.4, 89.8],
                    type: 'line',
                    smooth: true,
                    symbolSize: 0,// 折线点大小
                    areaStyle: {
                        //折线区域的背景渐变颜色
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            {
                                offset: 0, color: '#00CCFF' // 0% 处的颜色
                            }, {
                                offset: 0.15, color: 'rgba(0,204,255,0.7)' // 15% 处的颜色
                            }, {
                                offset: 1, color: 'rgba(1,22,52,0)' // 100% 处的颜色
                            }
                        ]),
                    },
                    itemStyle: {
                        normal: {
                            // 点的颜色
                            color: "#fff",
                            fontSize: 14,
                            lineStyle: {
                                //折线宽度
                                width: 3,
                                //折线颜色
                                color: '#00CCFF'
                            },
                        },
                        emphasis: {
                            //鼠标经过时折点小圆圈样式
                            borderColor: "rgba(0,196,132,0.2)",
                            borderWidth: 10,
                        },
                    },
                },
            ],

        }
        mychart.setOption(option);
        window.addEventListener('resize', () => {
            mychart.resize();
        })
    }
    const chartInit = (data) => {
        let mychart = echarts.init(document.getElementById('energyIndicator'));
        let option;
        option = {
            // backgroundColor: '#0E2A43',
            grid: {
                top: '0%',
                bottom: '0%',
                left: '1%',
                right: '7%',
                containLabel: true,
            },
            tooltip: {
                show: "true",
                trigger: 'axis',
                axisPointer: { // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            xAxis: {
                type: 'value',
                axisTick: { show: false },
                axisLine: {
                    show: false,
                    lineStyle: {
                        color: '#fff',
                    }
                },
                splitLine: {
                    show: false
                },
                axisLabel: {
                    formatter: '{value}',
                }
            },
            yAxis: [
                {
                    type: 'category',
                    // axisTick: { show: false },
                    axisLine: {
                        // show: false,
                        lineStyle: {
                            color: '#fff',
                        }
                    },
                    data: ['上下料料库', '地轨', '六轴机器人', '卡爪库', '米克朗数控机床', '清洁工具']
                },
            ],
            series: [
                {
                    name: '装置能耗',
                    type: 'bar',
                    // yAxisIndex: 1,
                    itemStyle: {
                        normal: {
                            show: true,
                            color: '#277ace',
                            barBorderRadius: 50,
                            borderWidth: 0,
                            borderColor: '#333',
                        }
                    },
                    barGap: '0%',
                    barCategoryGap: '50%',
                    data: [389.21, 13729, 2098, 4316.8, 17269.4, 23211.6]
                },
            ]
        };
        mychart.setOption(option);
        window.addEventListener('resize', () => {
            mychart.resize();
        })
    }

    return (
        <div id="energyIndicator" style={{ width: '100%', height: '100%' }}></div>
    )
})

export default EnergyIndicator