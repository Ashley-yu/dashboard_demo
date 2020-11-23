<template>
  <highcharts
      :options="lineChart"
  >
  </highcharts>
</template>

<script>
import { Chart } from 'highcharts-vue';
import Highcharts from 'highcharts';
import exporting from 'highcharts/modules/exporting';

exporting(Highcharts);

export default {
  name: "ChartLine",
  props: {
    titleText: {
      type: String,
      default: () => {
        return "";
      }
    },
    accessories: {
      type: Array,
      default: () => {
        return [];
      }
    },
    max: {
      type: Number,
      default: () => {
        return 0;
      }
    },
    min: {
      type: Number,
      default: () => {
        return 0;
      }
    },
    showType: {
      type: String,
      default: () => {
        return "";
      }
    }
  },
  components: {
    highcharts: Chart
  },
  methods: {
    getData(accessories, max, min) {
      const data = [];

      if (this.showType === 'day') {
        const year = parseInt(this.titleText.toString().substring(0,4));
        const month = parseInt(this.titleText.toString().substring(5,8));

        for (let i = 0; i < accessories.length; i += 1) {
          let randomData = [];
          for (let j = 1; j < 31; j++) {
            randomData.push([
              Date.UTC(year, month, j), Math.floor(Math.random()*(max-min+1))+min
            ])
          }

          data.push({
            name: accessories[i],
            data: randomData,
          });
        }
      }
      else if (this.showType === 'month') {
        for (let i = 0; i < accessories.length; i += 1) {
          let randomData = [];
          for (let j = 0; j < 12; j++) {
            randomData.push([
              Math.floor(Math.random()*(max-min+1))+min
            ])
          }

          data.push({
            name: accessories[i],
            data: randomData,
          });
        }
      }

      return data;
    },
  },
  computed: {
    lineChart() {
      let series = [];
      series = this.getData(this.accessories, this.max, this.min);

      let xAxis = {};
      if (this.showType === 'day') {
        xAxis = {
          type: 'datetime',
              dateTimeLabelFormats: {
            day: '%d',
          },
          labels: {
            style: {
              color: axisColor
            }
          }
        }
      } else if (this.showType === 'month') {
        xAxis = {
          categories: ['12月', '11月', '10月', '9月', '8月', '7月', '6月', '5月', '4月', '3月', '2月', '1月'],
          labels: {
            style: {
              color: axisColor
            }
          }
        }
      }

      const {inverse, info, primary, danger, warning, success, textColor} = this.appConfig.colors;
      const chartColors = this.appConfig.colors;
      const {axisColor} = chartColors;

      return {
        chart: {
          type: 'spline',
          height: 420,
        },
        exporting: {
          buttons: {
            contextButton: {
              menuItems: ['downloadPNG', 'downloadJPEG', 'downloadPDF']
            }
          }
        },
        title: {
          text: this.titleText,
          style: {
            color: textColor
          }
        },
        credits: {
          enabled: false
        },
        xAxis,
        yAxis: {
          min: 0,
          title: {
            enabled: false,
          },
          labels: {
            style: {
              color: axisColor
            }
          },
        },
        legend: {
          enabled: true,
        },
        plotOptions: {
          series: {
            lineWidth: 2,
            shadow: true,
            marker: {
              enabled: false,
              symbol: 'circle',
            }
          }
        },
        colors: [primary, success, danger, warning, info, inverse],
        series
      };
    },
  }
}
</script>
