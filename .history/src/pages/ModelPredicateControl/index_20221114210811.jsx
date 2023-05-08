import React, { memo, useState, useEffect } from 'react'
import * as echarts from 'echarts'
import moment from 'moment'
import API from '../../api/request'
/**?
 * @调用supos服务的封装函数
 */
function callService(objName, serviceName, params, callback) {
    scriptUtil.excuteScriptService(
        {
            objName,
            serviceName,
            version: "V2",
            params,
        },
        (res) => callback(res)
    );
}
// const oneDay = 24 * 3600 * 1000;
let currentdata;
/**?
 * @根据不同的参数返回当前值
 */
function randomData(propName) {
    // now = new Date(+now + oneDay);
    const value = currentdata; //
    // console.log('randomData', randomData());
    return {
        name: moment().format('YYYY-MM-DD HH:mm:ss'),
        value: [
            moment().format('YYYY-MM-DD HH:mm:ss'),
            value[propName]
        ],
    };
}
const ModelPredictiveControl = memo(() => {
    const productConcentrationCurrent = [];//甲醇产品浓度实际值
    const productConcentrationSetvalue = [];//甲醇产品浓度设定值
    const temperatureCurrent = [];//精馏塔温度实际值
    const temperatureSetvalue = [];//精馏塔温度设定值
    const LiquidLevelCurrent = [];//塔釜液位实际值
    const LiquidLevelSetvalue = [];//塔釜液位设定值
    let mychart3;
    useEffect(() => {
        dataInit()
    });
    // setInterval(() => {
    //     const objName = 'zhangxuedong_zhangxuedong.Template_830/Instance_831';
    //     const serviceName = 'zhangxuedong_zhangxuedong.getPropertyValue';
    //     const params = {};
    //     callService(objName, serviceName, params, res => {
    //         if (res.code === 200) {
    //             currentdata = res.data;
    //             // console.log('currentdata', currentdata);
    //             temperatureCurrent.shift();// 每次更新删除数组中的第一个
    //             LiquidLevelCurrent.shift();
    //             productConcentrationCurrent.shift();
    //             temperatureCurrent.push(randomData('/zhangxuedong_zhangxuedong/Template_830/Instance_831/zhangxuedong_zhangxuedong/TICCOL11'));// 在数组最后补上最新你值
    //             LiquidLevelCurrent.push(randomData('/zhangxuedong_zhangxuedong/Template_830/Instance_831/zhangxuedong_zhangxuedong/LICCOL11'));
    //             productConcentrationCurrent.push(randomData('/zhangxuedong_zhangxuedong/Template_830/Instance_831/zhangxuedong_zhangxuedong/XICCOL11'));
    //             // 数据进行刷新，曲线也随之刷新
    //             mychart1.setOption({
    //                 series: [
    //                     {
    //                         data: productConcentrationCurrent,
    //                     },
    //                 ],
    //             });
    //             mychart2.setOption({
    //                 series: [
    //                     {
    //                         data: temperatureCurrent,
    //                     },
    //                 ],
    //             });
    //             mychart3.setOption({
    //                 series: [
    //                     {
    //                         data: LiquidLevelCurrent,
    //                     },
    //                 ],
    //             });
    //         }
    //     });
    // }, 3000)
    const dataInit = async () => {
        const objName = 'zhangxuedong_zhangxuedong.Template_830/Instance_831';
        const serviceName = 'zhangxuedong_zhangxuedong.getPropertyHistoryValues';
        const startTime = moment().subtract(1, 'hours').utc().format();
        const endTime = moment().utc().format();
        const params = { startTime, endTime, variable1: 'TICCOL11', variable2: 'LICCOL11', variable3: 'XICCOL11' }
        await API({
            method: 'post',
            headers: {
                'Authorization': 'Bearer 63793332-761f-44de-afe7-15089e14fbf4',
                'User-Agent': 'apifox/1.0.0 (https://www.apifox.cn)',
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
            const resultData = res.data;
            console.log('resultData', resultData);
            let apsData1 = resultData[0].datas;// 获得第一个参数的数据
            let apsData2 = resultData[1]['datas'];// 获得第二个参数的数据
            let apsData3 = resultData[2].datas;// 获得第二个参数的数据
            // let apsData3 = resultData[2].datas;// 获得第一个参数的数据
            console.log('apsData2', apsData2);
            for (let j = 0; j < apsData2.length; j++) {
                LiquidLevelCurrent.push({
                    name: moment(apsData2[j][0]).utcOffset(8)
                        .format('YYYY-MM-DD HH:mm:ss'),
                    value: [
                        moment(apsData2[j][0]).utcOffset(8)
                            .format('YYYY-MM-DD HH:mm:ss'),
                        apsData2[j][1]
                    ]
                })
            }

            // console.log('[  ] >', feedsetvalue, feedcurrent, bsxyield)
            console.log('LiquidLevelCurrent', LiquidLevelCurrent);
            chartInit(LiquidLevelCurrent)
        })
        // callService(objName, serviceName, params, res => {
        //     if (res.code == 200) {
        //         const resultData = res.data;
        //         console.log('resultData', resultData);
        //         let apsData1 = resultData[0].datas;// 获得第一个参数的数据
        //         let apsData2 = resultData[1].datas;// 获得第二个参数的数据
        //         let apsData3 = resultData[2].datas;// 获得第二个参数的数据
        //         // let apsData3 = resultData[2].datas;// 获得第一个参数的数据
        //         for (let j = 0; j < apsData2.length; j++) {
        //             LiquidLevelCurrent.push({
        //                 name: moment(apsData2[j][0]).utcOffset(8)
        //                     .format('YYYY-MM-DD HH:mm:ss'),
        //                 value: [
        //                     moment(apsData2[j][0]).utcOffset(8)
        //                         .format('YYYY-MM-DD HH:mm:ss'),
        //                     apsData2[j][1]
        //                 ]
        //             })
        //         }
        //     }
        //     // console.log('[  ] >', feedsetvalue, feedcurrent, bsxyield)
        //     chartInit(temperatureCurrent, LiquidLevelCurrent, productConcentrationCurrent)
        // })
    }
    const chartInit = (LiquidLevelCurrent) => {
        mychart3 = echarts.init(document.getElementById('chart3'));
        let option3 = {
            xAxis: {
                type: 'time',
                // data: ['4-21:7:29:10', '4-21:7:29:20', '4-21:7:29:30', '4-21:7:29:40', '4-21:7:29:50', '4-21:7:30:00', '4-21:7:30:10', '4-21:7:30:20', '4-21:7:30:30', '4-21:7:30:40', '4-21:7:30:50', '4-21:7:31:00', '4-21:7:31:10', '4-21:7:31:20', '4-21:7:31:30', '4-21:7:31:40', '4-21:7:31:50', '4-21:7:32:00', '4-21:7:32:10', '4-21:7:32:20'],
                // data: ['4-21:7:15', '4-21:7:30', '4-21:7:45', '4-21:8:00', '4-21:8:15', '4-21:8:30', '4-21:8:45', '4-21:9:00', '4-21:9:15', '4-21:9:30',],
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
                axisLabel: { fontSize: 16, },
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
                        width: 1.59,
                        color: '#6997B0'
                    }
                },
                axisLable: {
                    textStyle: {
                        color: '#00CCFF'
                    }
                },
                axisLabel: { fontSize: 16, },
                axisLine: {
                    lineStyle: {
                        color: '#00CCFF', // 颜色
                    }
                },
                // min: 125,
                // max: 130
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                left: 'center', //位置
                icon: "circle",//形状  类型包括 circle，rect,line，roundRect，triangle，diamond，pin，arrow，none
                itemWidth: 15,  // 设置宽度
                itemHeight: 15, // 设置高度
                itemGap: 20, // 设置间距
                // itemStyle: {
                //   color: '#00CCFF'
                // },
                data: [
                    {
                        name: '精馏塔回流罐液位实际值',
                        textStyle: {
                            //文字样式
                            color: "#00CCFF",
                            fontSize: "22"
                        },
                        itemStyle: {
                            color: '#00CCFF'
                        }
                    },
                    {
                        name: '精馏塔回流罐液位设定值',
                        textStyle: {
                            //文字样式
                            color: "#F2DA04",
                            fontSize: "22"
                        },
                        itemStyle: {
                            color: '#F2DA04'
                        }
                    }
                ]
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            series: [
                {
                    name: '精馏塔回流罐液位实际值',
                    // data: [845, 845.1, 845, 844.7, 845.6, 845, 844, 845, 845.3, 845, 844.8, 845, 845.5, 845, 844.8, 845, 845.4, 845, 844.4],
                    // data: [845, 845.4, 844.9, 844.7, 845.6, 845.2, 843.7, 845, 845.5, 844.9, 844.8, 845, 845.5, 845, 844.8, 845, 845.4, 845, 844.4],
                    // data: [850.4, 849.9, 850.6, 850.2, 849.7, 850.5, 849.8, 850.1, 850.4, 849.8],
                    data: LiquidLevelCurrent,
                    type: 'line',
                    smooth: true,
                    symbolSize: 0,// 折线点大小
                    // areaStyle: {
                    //   //折线区域的背景渐变颜色
                    //   color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    //     {
                    //       offset: 0, color: '#00CCFF' // 0% 处的颜色
                    //     }, {
                    //       offset: 0.15, color: 'rgba(0,204,255,0.7)' // 15% 处的颜色
                    //     }, {
                    //       offset: 1, color: 'rgba(1,22,52,0)' // 100% 处的颜色
                    //     }
                    //   ]),
                    // },
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
                // {
                //     name: '进料量设定值',
                //     // data: [850, 850, 850, 850, 850, 850, 850, 850, 850, 850],
                //     data: feedsetvalue,
                //     type: 'line',
                //     step: 'start',
                //     // smooth: true,
                //     symbolSize: 0,// 折线点大小
                //     // areaStyle: {
                //     //     //折线区域的背景渐变颜色
                //     //     color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                //     //         {
                //     //             offset: 0, color: '#00CCFF' // 0% 处的颜色
                //     //         }, {
                //     //             offset: 0.15, color: 'rgba(0,204,255,0.7)' // 15% 处的颜色
                //     //         }, {
                //     //             offset: 1, color: 'rgba(1,22,52,0)' // 100% 处的颜色
                //     //         }
                //     //     ]),
                //     // },
                //     itemStyle: {
                //         normal: {
                //             // 点的颜色
                //             color: "#fff",
                //             fontSize: 14,
                //             lineStyle: {
                //                 //折线宽度
                //                 width: 3,
                //                 //折线颜色
                //                 color: '#F2DA04'
                //             },
                //         },
                //         emphasis: {
                //             //鼠标经过时折点小圆圈样式
                //             borderColor: "rgba(0,196,132,0.2)",
                //             borderWidth: 10,
                //         },
                //     },
                // },
            ],

        }
        mychart3.setOption(option3);
        window.addEventListener('resize', () => {
            mychart3.resize();
        })
    }
    return (
        <div id="chart3" style={{ width: '100%', height: '100%' }}></div>
    )
})

export default ModelPredictiveControl