import React, { memo, useEffect } from 'react'
import * as echarts from 'echarts'
const Optimization = memo(() => {
    let mychart;
    useEffect(() => {
        chartInit()
    })
    const chartInit = () => {
        mychart = echarts.init(document.getElementById('Unit-optimization'));
        let option = {
            // title: {
            //     text: '2019年销售水量和主营业务收入对比',
            //     textStyle: {
            //         align: 'center',
            //         color: '#fff',
            //         fontSize: 20,
            //     },
            //     top: '3%',
            //     left: '10%',
            // },
            // backgroundColor: '#0f375f',
            // grid: {
            //     top: "25%",
            //     bottom: "10%"//也可设置left和right设置距离来控制图表的大小
            // },
            grid: {
                top: '0%',
                left: '3%',
                right: '2%',
                bottom: '0%',
                containLabel: true
            },
            tooltip: {
                trigger: "axis",
                axisPointer: {
                    type: "shadow",
                    label: {
                        show: true
                    }
                }
            },
            legend: {
                data: ["回流比", '塔顶温度', '进料量'],
                top: "0%",
                textStyle: {
                    color: "#ffffff"
                }
            },
            xAxis: {
                data: [
                    "14:00",
                    "14:30",
                    "15:00",
                    "15:30",
                    "16:00",
                    "16:30",
                    "17:00",
                    "17:30",
                ],
                axisLine: {
                    show: true, //隐藏X轴轴线
                    lineStyle: {
                        color: '#01FCE3'
                    }
                },
                axisTick: {
                    show: true //隐藏X轴刻度
                },
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: "#ebf8ac" //X轴文字颜色
                    }
                },

            },
            yAxis: [
                {
                    type: "value",
                    name: "亿元",
                    nameTextStyle: {
                        color: "#ebf8ac"
                    },
                    splitLine: {
                        show: false
                    },
                    axisTick: {
                        show: true
                    },
                    axisLine: {
                        show: true,
                        lineStyle: {
                            color: '#FFFFFF'
                        }
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: "#ebf8ac"
                        }
                    },

                },
                {
                    type: "value",
                    name: "同比",
                    nameTextStyle: {
                        color: "#ebf8ac"
                    },
                    position: "right",
                    splitLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    axisLine: {
                        show: false
                    },
                    axisLabel: {
                        show: true,
                        formatter: "{value} %", //右侧Y轴文字显示
                        textStyle: {
                            color: "#ebf8ac"
                        }
                    }
                },
                {
                    type: "value",
                    gridIndex: 0,
                    min: 50,
                    max: 100,
                    splitNumber: 8,
                    splitLine: {
                        show: false
                    },
                    axisLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        show: false
                    },
                    splitArea: {
                        show: true,
                        areaStyle: {
                            color: ["rgba(250,250,250,0.0)", "rgba(250,250,250,0.05)"]
                        }
                    }
                }
            ],
            series: [
                {
                    name: "回流比",
                    type: "line",
                    yAxisIndex: 1, //使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用
                    smooth: true, //平滑曲线显示
                    showAllSymbol: true, //显示所有图形。
                    symbol: "circle", //标记的图形为实心圆
                    symbolSize: 10, //标记的大小
                    itemStyle: {
                        //折线拐点标志的样式
                        color: "#058cff"
                    },
                    lineStyle: {
                        color: "#058cff"
                    },
                    areaStyle: {
                        color: "rgba(5,140,255, 0.2)"
                    },
                    data: [4.2, 3.8, 4.8, 3.5, 2.9, 2.8, 3, 5]
                },
                {
                    name: "塔顶温度",
                    type: "line",
                    yAxisIndex: 1, //使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用
                    smooth: true, //平滑曲线显示
                    showAllSymbol: true, //显示所有图形。
                    symbol: "circle", //标记的图形为实心圆
                    symbolSize: 10, //标记的大小
                    itemStyle: {
                        //折线拐点标志的样式
                        color: "#058cff"
                    },
                    lineStyle: {
                        color: "#058cff"
                    },
                    areaStyle: {
                        color: "rgba(5,140,255, 0.2)"
                    },
                    data: [7.2, 6.8, 7.8, 6.5, 4.9, 4.8, 7, 9]
                },
                {
                    name: "进料量",
                    type: "bar",
                    barWidth: 15,
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: "#b3ff00"
                            },
                            {
                                offset: 1,
                                color: "#a4ec46"
                            }
                            ])
                        }
                    },
                    data: [4.2, 3.8, 4.8, 3.5, 2.9, 2.8, 3, 5]
                },
            ]
        };
        mychart.setOption(option);
        window.addEventListener('resize', () => {
            mychart.resize();
        })
    }

    return (
        <div id='Unit-optimization' style={{ width: '100%', height: '100%' }}></div>
    )
})

export default Optimization