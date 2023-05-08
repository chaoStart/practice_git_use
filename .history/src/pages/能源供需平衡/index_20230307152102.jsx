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
        dataInit();
    });
    const dataInit = async () => {
        if (props.type === '日收率') {
            chartInit()
        } else {
            const objName = 'j_jinliu.data_total/DMO_Reactor_Yield_Data';
            const serviceName = 'j_jinliu.getPropertyHistoryValues';
            const startTime = moment().subtract(90, 'minutes').utc().format();
            const endTime = moment().utc().format();
            const params = { startTime, endTime };
            await API({
                method: 'post',
                headers: {
                    // 'Authorization': `Bearer ${token}`,
                    'Authorization': 'Bearer 420ebd73-cadc-4b69-8b08-ad4a2a2058b3',
                    'Content-Type': 'application/json'
                },
                data: JSON.stringify(
                    {
                        "path": objName,
                        "service": serviceName,
                        "params": params,
                        "version": "V2"
                    }
                )
            }).then(res => {
                const resultData = res.data.data;
                // console.log('resultData', resultData);
                for (let j = 0; j < resultData.length; j++) {
                    DMO_Reactor_Yield_Data.push({
                        name: moment(resultData[j][0]).utcOffset(8)
                            .format('YYYY-MM-DD HH:mm:ss'),
                        value: [
                            moment(resultData[j][0]).utcOffset(8)
                                .format('YYYY-MM-DD HH:mm:ss'),
                            resultData[j][1]
                        ]
                    })
                }
                // console.log('DMO_Reactor_Yield_Data', DMO_Reactor_Yield_Data);
                chartInit(DMO_Reactor_Yield_Data)
            })
        }

    }
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
            // moment(new Date()).format("YYYY-MM-DD")
            // moment(new Date()).format('MM-DD')
        ]
        let productionLoad = [76.555, 76.654, 76.742, 76.820, 76.807, 76.719, 76.591, 76.607, 76.588];
        // let productionLoad1 = [50, 20, 55, 41, 45, 50, 42, 38, 46];
        let option;
        if (props.type === '日收率') {
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
                        data: productionLoad,
                    },
                    // {
                    //     name: '能源需求',
                    //     type: 'bar',
                    //     barWidth: '10px',
                    //     itemStyle: {
                    //         normal: {
                    //             color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    //                 // {
                    //                 //     offset: 0,
                    //                 //     // color: '#29acff',
                    //                 //     color: '#00B66F',
                    //                 // },
                    //                 {
                    //                     offset: 1,
                    //                     // color: '#4bdfff',
                    //                     color: '#FFEB00 ',
                    //                 },
                    //             ]),
                    //             // barBorderRadius: 2,
                    //         },
                    //     },
                    //     data: productionLoad1,
                    // },
                ],
            };
        } else {
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
                    type: 'time',
                    // data: ['4-21:7:29:10', '4-21:7:29:20', '4-21:7:29:30', '4-21:7:29:40', '4-21:7:29:50', '4-21:7:30:00', '4-21:7:30:10', '4-21:7:30:20', '4-21:7:30:30', '4-21:7:30:40', '4-21:7:30:50', '4-21:7:31:00', '4-21:7:31:10', '4-21:7:31:20', '4-21:7:31:30', '4-21:7:31:40', '4-21:7:31:50', '4-21:7:32:00', '4-21:7:32:10', '4-21:7:32:20'],
                    // data: ['7:15', '7:30', '7:45', '8:00', '8:15', '8:30', '8:45', '9:00', '9:15', '9:30',],
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
                            color: '#00CCFF',
                            fontSize: 10
                        }
                    },
                    axisLabel: {
                        fontSize: 12,
                        // formatter: function (params) {
                        //     return timeFormatter(params)
                        // }
                    },
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
                        // nameLocation: "start",
                    },
                    nameLocation: "end"
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: "shadow",
                    },
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
                        data: DMO_Reactor_Yield_Data,
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
                                borderColor: "#ffa800",
                                borderWidth: 10,
                            },
                        },
                    },
                ],

            }
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