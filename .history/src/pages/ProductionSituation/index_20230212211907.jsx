import React, { memo } from 'react'
import * as echarts from 'echarts'
import moment from 'moment'
import { useAsyncEffect } from 'ahooks'
const ProductionSituation = memo(() => {
    useAsyncEffect(async () => {
        chartInit()
    });
    const chartInit = () => {
        let mychart = echarts.init(document.getElementById('productionSituation'));
        let dataX = [
            moment(new Date()).subtract(8, 'days').format("YYYY-MM-DD"),
            moment(new Date()).subtract(7, 'days').format("YYYY-MM-DD"),
            moment(new Date()).subtract(6, 'days').format("YYYY-MM-DD"),
            moment(new Date()).subtract(5, 'days').format("YYYY-MM-DD"),
            moment(new Date()).subtract(4, 'days').format("YYYY-MM-DD"),
            moment(new Date()).subtract(3, 'days').format("YYYY-MM-DD"),
            moment(new Date()).subtract(2, 'days').format("YYYY-MM-DD"),
            moment(new Date()).subtract(1, 'days').format("YYYY-MM-DD"),
            // moment(new Date()).format("YYYY-MM-DD")
            // moment(new Date()).format('YYYY-MM-DD')
        ]
        let productionLoad = [5.68, 5.79, 5.31, 5.76, 5.54, 5.72, 5.62, 5.41];
        let productionLoad2 = [6.02, 5.49, 5.88, 6.12, 5.51, 5.89, 5.42, 5.97];
        let option;
        option = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'none',
                },
                // formatter: function (params) {
                //     return (
                //         dataX[params[0].dataIndex] +
                //         '<br> 日计划产量' +
                //         productionLoad[params[0].dataIndex] +
                //         '' +
                //         '<br> 日实时产量' +
                //         productionLoad[params[0].dataIndex]
                //     );
                // },
            },
            grid: {
                top: '20%',
                bottom: '0%',
                left: '1%',
                right: '0%',
                containLabel: true,
                // height: '95%',
            },
            legend: {
                data: ['日计划产量', '日实时产量'],
                right: '-4',
                top: '0',
                textStyle: {
                    // padding: [4, 0, 0, 0],
                    color: '33FFFF',
                    fontSize: 15
                },
                itemWidth: 15,
                itemHeight: 10,
                itemGap: 25,
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
                    name: "单位（吨）",
                    nameTextStyle: {
                        color: "#00CCFF",
                        nameLocation: "start",
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
                                    color: '#006CFF',
                                },
                                {
                                    offset: 1,
                                    // color: '#4bdfff',
                                    color: '#29D5FF',
                                },
                            ]),
                            barBorderRadius: 2,
                        },
                    },
                    data: productionLoad,
                },
                {
                    name: '日实时产量',
                    type: 'bar',
                    barWidth: '12px',
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                {
                                    offset: 0,
                                    // color: '#29acff',
                                    color: '#00B66F',
                                },
                                {
                                    offset: 1,
                                    // color: '#4bdfff',
                                    color: '#90FFDC',
                                },
                            ]),
                            barBorderRadius: 2,
                        },
                    },
                    data: productionLoad,
                },
            ],
        };
        mychart.setOption(option);
        window.addEventListener('resize', () => {
            mychart.resize();
        })
    }
    return (
        <div id="productionSituation" style={{ width: '100%', height: '100%' }}></div>
    )
})

export default ProductionSituation