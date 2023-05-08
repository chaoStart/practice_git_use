// 生成虚线 饼图数据
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
        //   normal: {
        //       borderRadius: 1,
        //     color: color,
        //     borderWidth: 10,
        //   },
        },
      });
    } else {
      dataArr.push({
        name: (i + 1).toString(),
        value: smallvalue,
        itemStyle: {
          borderRadius: 100,
        // borderColor: '#fff',
        
        borderWidth: 2,
        color: "rgba(0,0,0,0)",
        //   normal: {
        //     color: "rgba(0,0,0,0)",
        //     // borderRadius: 100,
        //     borderWidth: 10,
        //   },
        },
      });
    }
  }
  return dataArr;
}

let dolitData = generateData(120, 7, 20, "rgb(126,190,255)");
option = {
  title: [
    {
      text: "已完成",
      x: "center",
      top: "55%",
      textStyle: {
        color: "#FFFFFF",
        fontSize: 16,
        fontWeight: "100",
      },
    },
    {
      text: "75%",
      x: "center",
      y: "center",
      textStyle: {
        fontSize: "60",
        color: "#FFFFFF",
        fontFamily: "DINAlternate-Bold, DINAlternate",
        foontWeight: "600",
      },
    },
  ],
  backgroundColor: "#111",
  polar: {
    radius: ["42%", "48%"],
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
        //   color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
        // //   color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
        //     {
        //       offset: 0,
        //       color: "rgba(0,255,100,1)",
        //     },
        //     {
        //       offset: 1,
        //       color: "rgba(144,250,255,1)",
        //     },
        //   ]),
        },
      },
      labelLine: {
          normal: {
            show: false,
          },
           emphasis: {
          show: true,}
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
        // itemStyle: {
            // borderRadius: 100,
            // width:10,
        // borderColor: '#fff',
        // borderWidth: 1,
        // normal: {
        //     color: "rgba(255,0,0,0.8)",
        //     // borderRadius: 100,
        //     // borderColor: "#c800ff", // 虚线颜色
        //     borderWidth: 2,
        //   },
    //   },
        // itemStyle: {
        //   borderRadius: 10,
        // borderColor: '#fff',
        // borderWidth: 2,
        //   normal: {
        //     color: "rgba(0,0,0,0)",
        //     // borderRadius: 100,
        //     borderWidth: 10,
        //   },
        // },
    //   startAngle: 80,
    //   radius: ["56%"],
    //   hoverAnimation: false,
    //   center: ["50%", "50%"],
    //   itemStyle: {
    //       borderRadius: 100,
    //         borderColor: '#fff',
    //     borderWidth: 2,
    //     // color: "rgba(66, 66, 66, .1)",
    //     // borderWidth: 1,
    //     // borderColor: "#5269EE",
    //     // normal: {
    //     //   color: "rgba(255, 255, 255, 0.1)",
    //     //   borderType: "dotted", //dotted 虚线
    //     //   borderColor: "#c800ff", // 虚线颜色
    //     //   borderWidth: 10, // 虚线宽度
    //     // },
    //   },
    //   data: dolitData,
        // data: [100],
        
    },
    {
      name: "",
      type: "pie",
      startAngle: 80,
      radius: ["38%"],
      hoverAnimation: false,
      center: ["50%", "50%"],
      //   labelLine: {
      //     show: true
      //   },
      itemStyle: {
        color: "rgba(66, 66, 66, .1)",
        borderWidth: 1,
        borderColor: "#5269EE",
        // normal: {
        //   lineStyle: {
        //     width: 2,
        //     type: "dotted", //'dotted'虚线 'solid'实线
        //   },
        // },
      },
      data: [100],
    },
    {
      name: "",
      type: "pie",
      startAngle: 80,
      radius: ["52%","51%"],
      hoverAnimation: false,
      center: ["50%", "50%"],
      //   labelLine: {
      //     show: true
      //   },
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
myChart.setOption(option, true);