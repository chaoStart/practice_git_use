import React, { memo } from 'react'
import './index.less'
import * as echarts from 'echarts'
import { useAsyncEffect } from 'ahooks'
const APCPerformanceMonitor = memo(() => {
    // useAsyncEffect(async () => {
    //     chartInit()
    // })
    const chartInit = () => {
        let mychart = echarts.init(document.getElementById('APCImg'));
        function generateData(totalNum, bigvalue, smallvalue, color) {
            let dataArr = [];
            for (var i = 0; i < totalNum; i++) {
                if (i % 2 === 0) {
                    dataArr.push({
                        name: (i + 1).toString(),
                        value: bigvalue,
                        itemStyle: {
                            borderRadius: 10,
                            borderColor: color,
                            borderWidth: 3,
                            color: color,
                        },
                    });
                } else {
                    dataArr.push({
                        name: (i + 1).toString(),
                        value: smallvalue,
                        itemStyle: {
                            borderRadius: 100,
                            borderWidth: 2,
                            color: "rgba(0,0,0,0)",
                        },
                    });
                }
            }
            return dataArr;
        }
        let dolitData = generateData(120, 7, 20, "rgb(126,190,255)");
        let option;
        option = {
            title: [
                {
                    text: "已完成",
                    x: "center",
                    top: "55%",
                    textStyle: {
                        color: "#FFFFFF",
                        fontSize: 10,
                        fontWeight: "100",
                    },
                },
                {
                    text: "75%",
                    x: "center",
                    y: "center",
                    textStyle: {
                        fontSize: "10",
                        color: "#FFFFFF",
                        fontFamily: "DINAlternate-Bold, DINAlternate",
                        foontWeight: "600",
                    },
                },
            ],
            polar: {
                radius: ["42%", "52%"],
                center: ["50%", "50%"],
            },
            angleAxis: {
                max: 100,
                show: false,
            },
            radiusAxis: {
                type: "category",
                show: true,
                axisLabel: {
                    show: false,
                },
                axisLine: {
                    show: false,
                },
                axisTick: {
                    show: false,
                },
            },
            // legend: {},
            grid: {
                top: '0%',
                bottom: '0%',
                left: '0%',
                right: '0%',
                containLabel: true,
            },
            series: [
                {
                    name: "",
                    type: "bar",
                    roundCap: false,
                    barWidth: 10,
                    showBackground: true,
                    backgroundStyle: {
                        color: "rgba(0, 42, 140, 0.3)",
                    },
                    data: [70],
                    coordinateSystem: "polar",

                    itemStyle: {
                        normal: {
                            shadowBlur: 15,   // 图形阴影的模糊大小。该属性配合 shadowColor,shadowOffsetX, shadowOffsetY 一起设置图形的阴影效果
                            shadowOffsetX: -0, // 阴影水平方向上的偏移距离
                            shadowOffsetY: 0, // 阴影垂直方向上的偏移距离
                            shadowColor: 'rgba(155,0,255,1)', // 阴影颜色
                            //    shadowColor: 'rgba(255,0,244,0.8)', // 阴影颜色
                            color: {
                                type: 'radial',         // 径向渐变
                                x: 0,       // 圆心坐标（中心）
                                y: 1,
                                r: 1,           // 半径长度
                                colorStops: [
                                    {
                                        offset: 0,
                                        color: 'rgba(0,255,0,1)'        // offset：坐标为0处的颜色
                                    }, {
                                        offset: 1,
                                        color: 'rgba(144,250,255,1)'        // offset：坐标为1处的颜色
                                    },
                                ],
                            }
                        },
                    },
                    labelLine: {
                        normal: {
                            show: false,
                        },
                        emphasis: {
                            show: true,
                        }
                    },
                },
                {
                    name: "",
                    type: "pie",
                    //   roundCap: true,
                    zlevel: 4,
                    silent: true,
                    radius: ["60%", "59%"],
                    label: {
                        normal: {
                            show: false,
                        },
                    },
                    labelLine: {
                        normal: {
                            show: false,
                        },
                    },
                    data: dolitData,
                },
                {
                    name: "",
                    type: "pie",
                    startAngle: 80,
                    radius: ["38%"],
                    hoverAnimation: false,
                    center: ["50%", "50%"],
                    itemStyle: {
                        color: "rgba(66, 66, 66, .1)",
                        borderWidth: 1,
                        borderColor: "#5269EE",

                    },
                    data: [100],
                },
                {
                    name: "",
                    type: "pie",
                    startAngle: 80,
                    radius: ["52%", "51%"],
                    hoverAnimation: false,
                    center: ["50%", "50%"],
                    label: {
                        normal: {
                            show: false,
                        },
                    },
                    labelLine: {
                        normal: {
                            show: false,
                        },
                    },
                    itemStyle: {
                        normal: {
                            shadowBlur: 1,   // 图形阴影的模糊大小。该属性配合 shadowColor,shadowOffsetX, shadowOffsetY 一起设置图形的阴影效果
                            shadowOffsetX: -0, // 阴影水平方向上的偏移距离
                            shadowOffsetY: 0, // 阴影垂直方向上的偏移距离
                            shadowColor: 'rgba(155,0,255,1)', // 阴影颜色
                            color: "rgba(159, 211, 255, 1)",
                        },
                        borderWidth: 0,
                        borderColor: "rgba(159, 211, 255, 1)",
                    },
                    data: [100],
                },
            ],
        };
        mychart.setOption(option);
        window.addEventListener('resize', () => {
            mychart.resize();
        })
    }
    return (
        <div className="APCcontent">
            <div id="APCImg">
                <span className="totalRes">优</span>
                {/* <span className="totalNumber">89</span> */}
            </div>
            <div className="indicatorContent">
                <div className="contentItem">
                    <i className="biaoji"></i>
                    <span className="APCitem">投运率</span>
                    <span className="APCNumber">13%</span>
                </div>
                <div className="contentItem">
                    <i className="biaoji"></i>
                    <span className="APCitem">稳定运行时长</span>
                    <span className="APCNumber">30天</span>
                </div>
                <div className="contentItem">
                    <i className="biaoji"></i>
                    <span className="APCitem">平稳率</span>
                    <span className="APCNumber">98%</span>
                </div>
            </div>
        </div>
    )
})

export default APCPerformanceMonitor