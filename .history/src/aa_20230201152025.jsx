import React, { Component } from 'react'
import * as echarts from '../extensions/echarts.v5.3.1.min';
export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Radius: [['19%', '20%'], ['39%', '40%'], ['69%', '70%'], ['89%', '90%']],
            result: null,
            positioninital: {
                left: '-200px',
                top: '60px'
            }
        }
    };
    // componentDidMount = () => {
    //     this.ChartInit()
    // }
    ChartInit = () => {
        var chartDom = document.getElementById('main1');
        var myChart = echarts.init(chartDom);
        var option;
        option = {
            tooltip: {
                trigger: 'item1'
            },
            // legend: {
            //   top: '5%',
            //   left: 'center'
            // },
            series: [
                {
                    name: '我驱动器',
                    type: 'pie',
                    // radius: ['29%', '30%'],
                    radius: this.state.Radius[0],
                    avoidLabelOverlap: true,
                    itemStyle: {
                        borderRadius: 10,
                        color: 'red',
                        borderColor: 'red',
                        borderWidth: 2
                    },
                    label: {
                        show: true,
                        position: 'center'
                    },
                    emphasis: {
                        label: {
                            // show: true,
                            // fontSize: '40',
                            color: 'red'
                            // fontWeight: 'bold'
                        }
                    },
                    labelLine: {
                        // show: false
                        show: true
                    },
                    data: [{ value: 148 }]
                }
            ]
        };
        option && myChart.setOption(option);

        var chartDom2 = document.getElementById('main2');
        var myChart2 = echarts.init(chartDom2);
        var option2;
        option2 = {
            tooltip: {
                trigger: 'item'
            },
            series: [
                {
                    name: 'Access From',
                    type: 'pie',
                    radius: this.state.Radius[1],
                    // avoidLabelOverlap: false,
                    itemStyle: {
                        borderRadius: 10,
                        color: 'orange',
                        borderColor: 'orange',
                        borderWidth: 2
                    },
                    label: {
                        show: true,
                        position: 'center'
                    },
                    emphasis: {
                        label: {
                            // show: true,
                            // fontSize: '40',
                            color: 'red'
                            // fontWeight: 'bold'
                        }
                    },
                    labelLine: {
                        // show: false
                        show: true
                    },
                    data: [{ value: 1048 }]
                }
            ]
        };
        option2 && myChart2.setOption(option2);

        var chartDom3 = document.getElementById('main3');
        var myChart3 = echarts.init(chartDom3);
        var option3;
        option3 = {
            tooltip: {
                trigger: 'item'
            },
            // legend: {
            //   top: '5%',
            //   left: 'center'
            // },
            series: [
                {
                    name: '财产损失',
                    type: 'pie',
                    radius: this.state.Radius[2],
                    // avoidLabelOverlap: false,
                    itemStyle: {
                        borderRadius: 10,
                        color: 'yellow',
                        borderColor: 'yellow',
                        borderWidth: 2
                    },
                    label: {
                        show: true,
                        position: 'center'
                    },
                    emphasis: {
                        label: {
                            // show: true,
                            // fontSize: '40',
                            color: 'red'
                            // fontWeight: 'bold'
                        }
                    },
                    labelLine: {
                        // show: false
                        show: true
                    },
                    data: [{ value: 608 }]
                }
            ]
        };
        option3 && myChart3.setOption(option3);

        var chartDom4 = document.getElementById('main4');
        var myChart4 = echarts.init(chartDom4);
        var option4;
        option4 = {
            tooltip: {
                trigger: 'item'
            },
            // legend: {
            //   top: '5%',
            //   left: 'center'
            // },
            series: [
                {
                    // name: 'Access From',
                    type: 'pie',
                    radius: this.state.Radius[3],
                    avoidLabelOverlap: true,
                    itemStyle: {
                        borderRadius: 10,
                        color: 'blue',
                        borderColor: 'blue',
                        borderWidth: 2
                    },
                    label: {
                        show: true,
                        position: 'center'
                    },
                    emphasis: {
                        label: {
                            // show: true,
                            // fontSize: '40',
                            color: 'red'
                            // fontWeight: 'bold'
                        }
                    },
                    labelLine: {
                        // show: false
                        show: true
                    },
                    data: [
                        // { value:'最大爆炸范围'}
                        { value: 0 }
                    ]
                }
            ]
        };
        option4 && myChart4.setOption(option4);

    }
    componentDidUpdate = () => {
        // console.log('hh')
        window.addEventListener("message", (event) => {
            // console.log('a')
            if (event.data.code) {
                const initResult = Object.values(event.data.params).map((item) => {
                    return Math.ceil(item);
                }).reduce((prev, item) => {
                    prev.push([`${item}%`, `${item + 1}%`]);
                    return prev
                }, []);
                console.log('[ initResult ] >', initResult[0])
                const coordinateResult = Object.values(event.data.coordinate);
                console.log('[ coordinateResult ] >', coordinateResult)
                // console.log('initResult', initResult, typeof initResult[0])
                this.setState({ Radius: initResult });
                this.ChartInit()
                this.myFunction(coordinateResult[0], coordinateResult[1])
            }
        }, true)
    }
    myFunction = (data1, data2) => {
        var text = data1;
        var text1 = data2;
        this.setState({
            positioninital: { left: text + 'px', top: text1 + 'px' }
        })
    };
    render() {
        return (
            <div className='bg0' >
                <div className='position_direction' style={this.state.positioninital}>
                    <div id='main1' style={{ width: '50vw', height: '50vh', position: 'absolute' }}>

                    </div>
                    <div id='main2' style={{ width: '50vw', height: '50vh', position: 'absolute' }}>

                    </div>
                    <div id='main3' style={{ width: '50vw', height: '50vh', position: 'absolute' }}>

                    </div>
                    {/* <div id='main4' style={{ width: '50vw', height: '50vh', position: 'absolute', top: '150px ', left: '150px' }} > */}
                    <div id='main4' style={{ width: '50vw', height: '50vh', position: 'absolute' }} >

                    </div>
                </div>
            </div>
        )
    }
}
let css = document.createElement('style');
css.innerHTML = `
.bg0{
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction:column;
  flex-wrap:  wrap ;
  justify-content:space-around;
  align-items: center ;
  overflow:hidden

}
.position_direction{
  width: 45vw;
  height: 45vh;
  position: relative;
}
`
document.getElementsByTagName('head')[0].appendChild(css)

