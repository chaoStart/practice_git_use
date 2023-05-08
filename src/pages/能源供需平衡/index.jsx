import React, { memo, useState } from 'react'
import * as echarts from 'echarts'
import { useAsyncEffect } from 'ahooks'
import moment from 'moment'
import API from '../../api/request'
import { getToken } from '../../util/TokenAction'
import { timeFormatter } from '../../util/time_formatter'
const EnergySupply_demand = memo((props) => {
    let DMO_Reactor_Yield_Data = [];
    const [token, settoken] = useState(getToken())
    useAsyncEffect(async () => {
        chartInit();
    });
    const chartInit = (DMO_Reactor_Yield_Data) => {
        echarts.init(document.getElementById('energySupply_demand')).dispose();
        // console.log('hahaha', props);
        let mychart = echarts.init(document.getElementById('energySupply_demand'));
        let dataX = [
            moment(new Date()).subtract(8, 'days').format("MM-DD"),
            moment(new Date()).subtract(7, 'days').format("MM-DD"),
            moment(new Date()).subtract(6, 'days').format("MM-DD"),
            moment(new Date()).subtract(5, 'days').format("MM-DD"),
            moment(new Date()).subtract(4, 'days').format("MM-DD"),
            moment(new Date()).subtract(3, 'days').format("MM-DD"),
            moment(new Date()).subtract(2, 'days').format("MM-DD"),
            moment(new Date()).subtract(1, 'days').format("MM-DD"),
        ]
        let productionLoad = [76.555, 76.654, 76.742, 76.820, 76.807, 76.719, 76.591, 76.607, 76.588];
        let productionLoad1 = [50, 20, 55, 41, 45, 50, 42, 38, 46];
        let productionLoad2 = [25, 26, 60, 48, 55, 60, 52, 48, 63];
        let productionLoad3 = [60, 35, 45, 65, 12, 35, 75, 60, 56];
        let option;
        if (props.type === '车间一') {
            option = {
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow',
                    }
                },
                grid: {
                    top: '6%',
                    bottom: '0%',
                    left: '1%',
                    right: '0%',
                    containLabel: true,
                    height: '95%',
                },
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
                            fontSize: 12,
                        },
                    },
                },

                yAxis: [
                    {
                        name: "kmol/h",
                        nameTextStyle: {
                            color: "#00CCFF",
                            nameLocation: "start",
                        },
                        type: 'value',
                        splitLine: {
                            show: false,
                        },
                        axisLabel: {
                            textStyle: {
                                color: '#5FBBEB',
                                fontSize: 15,
                            },
                            // formatter: '{value}kmol/h'
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
                        // name: '能源供给',
                        type: 'bar',
                        barWidth: '10px',
                        itemStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                    // {
                                    //     offset: 0,
                                    //     // color: '#29acff',
                                    //     color: '#006CFF',
                                    // },
                                    {
                                        offset: 0,
                                        // color: '#4bdfff',
                                        color: '#ffa800 ',
                                    },
                                ]),
                                barBorderRadius: 2,
                            },
                        },
                        data: productionLoad,
                    },
                ],
            };
        } else if (props.type === '车间二') {
            option = {
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow',
                    },
                    // formatter: function (params) {
                    //     return (
                    //         dataX[params[0].dataIndex] +
                    //         '<br> 能源供给' +
                    //         productionLoad[params[0].dataIndex] +
                    //         '' +
                    //         '<br> 能源需求' +
                    //         productionLoad[params[0].dataIndex]
                    //     );
                    // },
                },
                grid: {
                    top: '6%',
                    bottom: '0%',
                    left: '1%',
                    right: '0%',
                    containLabel: true,
                    height: '95%',
                },
                // grid: {
                //     top: '20%',
                //     left: '3%',
                //     right: '4%',
                //     bottom: '3%',
                //     containLabel: true
                // },
                // legend: {
                //     data: ['能源供给', '能源需求'],
                //     right: '0',
                //     top: '0',
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
                            fontSize: 12,
                        },
                    },
                },

                yAxis: [
                    {
                        name: "kmol/h",
                        nameTextStyle: {
                            color: "#00CCFF",
                            nameLocation: "start",
                        },
                        type: 'value',
                        splitLine: {
                            show: false,
                        },
                        axisLabel: {
                            textStyle: {
                                color: '#5FBBEB',
                                fontSize: 15,
                            },
                            // formatter: '{value}kmol/h'
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
                        // name: '能源供给',
                        type: 'bar',
                        barWidth: '10px',
                        itemStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                    // {
                                    //     offset: 0,
                                    //     // color: '#29acff',
                                    //     color: '#006CFF',
                                    // },
                                    {
                                        offset: 0,
                                        // color: '#4bdfff',
                                        color: '#ffa800 ',
                                    },
                                ]),
                                barBorderRadius: 2,
                            },
                        },
                        data: productionLoad1,
                    },
                ],
            };
        } else if (props.type === '车间三') {
            option = {
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow',
                    },
                },
                grid: {
                    top: '6%',
                    bottom: '0%',
                    left: '1%',
                    right: '0%',
                    containLabel: true,
                    height: '95%',
                },
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
                            fontSize: 12,
                        },
                    },
                },

                yAxis: [
                    {
                        name: "kmol/h",
                        nameTextStyle: {
                            color: "#00CCFF",
                            nameLocation: "start",
                        },
                        type: 'value',
                        splitLine: {
                            show: false,
                        },
                        axisLabel: {
                            textStyle: {
                                color: '#5FBBEB',
                                fontSize: 15,
                            },
                            // formatter: '{value}kmol/h'
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
                        // name: '能源供给',
                        type: 'bar',
                        barWidth: '10px',
                        itemStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                    // {
                                    //     offset: 0,
                                    //     // color: '#29acff',
                                    //     color: '#006CFF',
                                    // },
                                    {
                                        offset: 0,
                                        // color: '#4bdfff',
                                        color: '#ffa800 ',
                                    },
                                ]),
                                barBorderRadius: 2,
                            },
                        },
                        data: productionLoad2,
                    },
                ],
            };
        } else if (props.type === '车间四') {
            option = {
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow',
                    },
                },
                grid: {
                    top: '6%',
                    bottom: '0%',
                    left: '1%',
                    right: '0%',
                    containLabel: true,
                    height: '95%',
                },
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
                            fontSize: 12,
                        },
                    },
                },

                yAxis: [
                    {
                        name: "kmol/h",
                        nameTextStyle: {
                            color: "#00CCFF",
                            nameLocation: "start",
                        },
                        type: 'value',
                        splitLine: {
                            show: false,
                        },
                        axisLabel: {
                            textStyle: {
                                color: '#5FBBEB',
                                fontSize: 15,
                            },
                            // formatter: '{value}kmol/h'
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
                        // name: '能源供给',
                        type: 'bar',
                        barWidth: '10px',
                        itemStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                    // {
                                    //     offset: 0,
                                    //     // color: '#29acff',
                                    //     color: '#006CFF',
                                    // },
                                    {
                                        offset: 0,
                                        // color: '#4bdfff',
                                        color: '#ffa800 ',
                                    },
                                ]),
                                barBorderRadius: 2,
                            },
                        },
                        data: productionLoad3,
                    },
                ],
            };
        }
        mychart.setOption(option);
        window.addEventListener('resize', () => {
            mychart.resize();
        })
    }
    return (
        <div id="energySupply_demand" style={{ width: '100%', height: '100%' }}></div>
    )
})

export default EnergySupply_demand