// const color = ['#37A2DA', '#32C5E9', '#67E0E3', '#9FE6B8', '#FFDB5C', '#ff9f7f', '#fb7293', '#E062AE', '#E690D1', '#e7bcf3', '#9d96f5', '#8378EA', '#96BFFF']
let color = ['rgba(28, 45, 66, 0.22)', 'rgba(250, 100, 0, 1)', '#e69d87', '#8dc1a9', '#ea7e53', '#eedd78', '#73a373', '#73b9bc', '#7289ab', '#91ca8c', '#f49f42']
const title = {
  text: '',
  subtext: ''
}
const tooltip = {
  trigger: 'axis',
  confine: true
}
// const toolbox = {
//   show: true,
//   itemSize: 17,
//   itemGap: 15,
//   showTitle: false,
//   top: 10,
//   feature: {
//     mark: { show: true },
//     magicType: {
//       show: true,
//       type: ['line', 'bar', 'stack', 'tiled'],
//       title: {
//         'line': '线图',
//         'bar': '柱图',
//         'stack': '堆叠',
//         'tiled': '平铺'
//       }
//     },
//     restore: { show: true },
//     saveAsImage: { show: true }
//   }
// }
const grid = {
  left: 0,
  right: 10,
  bottom: 90,
  containLabel: true
}
let line = {
  color,
  title,
  tooltip,
  // toolbox,
  grid,
  legend: {
    bottom: 10,
    data: [],
    formatter: parseLegend
  },
  calculable: false,
  xAxis: [
    {
      axisLine: {
        lineStyle: {
          color: '#dcdcdc'
        }
      },
      axisTick: {
        show: true
      },
      axisLabel: {
        textStyle: {
          color: '#5a5a5a'
        }
      },
      type: 'category',
      boundaryGap: false,
      data: []
    }
  ],
  yAxis: [
    {
      splitLine: {
        lineStyle: {
          color: '#e7e7e7'
        }
      },
      axisLine: {
        show: false,
        lineStyle: {
          color: '#dcdcdc'
        }
      },
      axisTick: {
        show: false
      },
      type: 'value',
      axisLabel: {
        formatter: '{value}',
        textStyle: {
          color: '#5a5a5a' // 坐标轴刻度文字
        }
      }
    }
  ],
  series: [
    {
      name: '',
      type: 'line',
      smooth: true,
      symbol: 'circle',
      symbolSize: 6,
      data: []
    }
  ]
}
let bar = {
  color,
  title,
  tooltip,
  // toolbox,
  grid,
  legend: {
    bottom: 10,
    itemWidth: 18,
    data: [],
    formatter: parseLegend
  },
  calculable: false,
  xAxis: [
    {
      axisLine: {
        lineStyle: {
          color: '#dcdcdc'
        }
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        textStyle: {
          color: '#5a5a5a'
        }
      },
      type: 'category',
      boundaryGap: true,
      data: []
    }
  ],
  yAxis: [
    {
      // name: '$',
      splitLine: {
        lineStyle: {
          color: '#e7e7e7'
        }
      },
      axisLine: {
        show: false,
        lineStyle: {
          color: '#dcdcdc'
        }
      },
      axisTick: {
        show: false
      },
      type: 'value',
      axisLabel: {
        formatter: '{value}',
        textStyle: {
          color: '#5a5a5a' // 坐标轴刻度文字
        }
      }
    }
  ],
  series: [
    {
      name: '',
      type: 'bar',
      stack: '1',
      barMaxWidth: '50%',
      data: []
    }
  ]
}

let pie = {
  // 饼
  color,
  title: {
    text: '',
    subtext: ''
  },
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b} : {c} ({d}%)'
  },
  legend: {
    bottom: 10,
    itemWidth: 18,
    data: [],
    formatter: parseLegend
  },
  calculable: false,
  series: [
    {
      name: '',
      type: 'pie',
      radius: ['45%', '65%'],
      center: ['50%', '55%'],
      data: [] // {value:335, name:'直接访问'},
    }
  ]
}

let radar = {
  title: {
    text: null
  },
  legend: {
    bottom: 10,
    data: ['Your state', 'Next level anchor status']
  },
  color,
  tooltip: {
    confine: true,
    enterable: true
  },
  // 图表的位置
  grid: {
    position: 'center'
  },
  radar: {
    // shape: 'circle',
    splitNumber: 3,
    axisLine: {
      lineStyle: {
        color: 'rgba(0,0,0,.07)'
      }
    },
    name: {
      textStyle: {
        color: '#333',
        backgroundColor: 'transparent',
        fontSize: 12,
        fontWeight: 'bold',
        lineHeight: 16
      },
      // formatter (value, indicator) {
      //   return value + '\n' + '{b|Beat 68% of}' + '\n' + '{b|anchors}'
      // },
      rich: {
        a: {
          color: '#333',
          fontWeight: 'bold'
        },
        b: {
          color: '#99A9BD',
          fontWeight: 'normal'
        }
      }
    },
    indicator: [
      { name: 'Activity', max: 100 },
      { name: 'Interactive', max: 100 },
      { name: 'Data', max: 100 },
      { name: 'Earnings', max: 100 },
      { name: 'Violations', max: 100 }
    ],
    radius: 70,
    // 雷达图背景的颜色，在这儿随便设置了一个颜色，完全不透明度为0，就实现了透明背景
    splitArea: {
      show: true,
      areaStyle: {
        color: 'rgba(0,0,0,0.03)' // 图表背景的颜色
      }
    },
    splitLine: {
      show: true,
      lineStyle: {
        width: 1,
        color: 'rgba(131,141,158,.1)' // 设置网格的颜色
      }
    }
  },
  series: [{
    type: 'radar',
    symbol: 'circle', // 拐点的样式，还可以取值'rect','angle'等
    symbolSize: 4, // 拐点的大小
    // areaStyle: {normal: {}},
    data: [
      {
        value: [],
        name: 'Next level anchor status',
        areaStyle: {
          normal: {
            color: 'rgba(28, 45, 66, 0.15)' // 选择区域颜色
          }
        }
      },
      {
        value: [],
        name: 'Your state',
        areaStyle: {
          normal: {
            color: 'rgba(250, 100, 0, 0.54)' // 选择区域颜色
          }
        }
      }
    ]
  }]
}

function parseLegend (name) {
  return name.length > 20 ? name.substring(0, 20) + '...' : name
}

export default {
  radar
  // line,
  // bar,
  // pie
}
