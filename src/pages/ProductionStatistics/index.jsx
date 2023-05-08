import React, { memo, useEffect } from 'react'
// import './index.less'
import * as echarts from "echarts";
import O2 from '../../assets/img/氧气.svg';
import DMOpurity from '../../assets/img/产品纯度.svg'
import H2 from '../../assets/img/氢气.svg'
import productionyield from '../../assets/img/DMO产量.svg'
import CO from "../../assets/img/一氧化碳.svg"

const ProductionStatistics = memo(() => {
    useEffect(() => {
        chartInit()
    }, [])
    const chartInit = () => {
        var app = {};
        var chartDom = document.getElementById('main');
        var myChart = echarts.init(chartDom);
        var option;
        option = {
            legend: {
                left: 'center',
                width: '250px',
                textStyle: {
                    color: 'white',
                    fontSize: '10px'
                }
            },
            grid: {
                top: '20%',
                bottom: '0%',
                left: '2%',
                right: '0%',
                containLabel: true,
                // height: '95%',
            },
            tooltip: {},
            dataset: {
                dimensions: ['product', '数控车床', '数控铣床', '机器人'],
                source: [
                    { product: '17:11:47', 数控车床: 43.3, 数控铣床: 85.8, 机器人: 93.7 },
                    { product: '17:11:51', 数控车床: 83.1, 数控铣床: 73.4, 机器人: 55.1 },
                    { product: '17:11:55', 数控车床: 86.4, 数控铣床: 65.2, 机器人: 82.5 },
                    { product: '17:12:03', 数控车床: 72.4, 数控铣床: 53.9, 机器人: 39.1 }
                ]
            },
            xAxis: {
                type: 'category',
                axisLabel: {
                    //x轴文字的配置
                    show: true,
                    textStyle: {
                        color: 'white',
                        margin: 15
                    }
                },
                axisTick: {
                    show: true
                },
                splitLine: {
                    //分割线配置
                    show: false,
                    lineStyle: {
                        color: 'white'
                    }
                },
                axisLine: {
                    //x轴线的颜色以及宽度
                    show: true,
                    lineStyle: {
                        color: 'white',
                        width: 1,
                        type: 'solid'
                    }
                },
            },
            yAxis: {
                axisLabel: {
                    //y轴文字的配置
                    textStyle: {
                        color: 'white',
                        margin: 15
                    }
                },
                axisTick: {
                    show: false,
                },
                axisLine: {
                    //y轴线的颜色以及宽度
                    // show: true,
                    show: false,
                    lineStyle: {
                        color: 'rgb(37, 86, 121)',
                        width: 1,
                        type: 'solid'
                    }
                },
                splitLine: {
                    //分割线配置
                    show: true,
                    lineStyle: {
                        // color: 'rgb(126, 165, 189)',
                        color: 'white',
                        type: 'dashed'
                    }
                }
            },
            series: [
                {
                    type: 'bar',
                    itemStyle: {
                        normal: {
                            //这里是颜色
                            color: 'red'
                        }
                    }
                },
                {
                    type: 'bar',
                    itemStyle: {
                        normal: {
                            //这里是颜色
                            color: 'rgb(53, 71, 86)'
                        }
                    }
                },
                {
                    type: 'bar',
                }]
        };
        option && myChart.setOption(option);
        window.addEventListener('resize', () => {
            myChart.resize();
        })
    }
    return (
        <div id='main' style={{ width: '100%', height: '100%' }}>
            {/* <div id='main' style={{ width: '100%', height: '100%', backgroundColor: 'pink' }}> */}
        </div>
    )
})
export default ProductionStatistics