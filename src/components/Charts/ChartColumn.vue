<template>
  <highcharts
      :options="columnChart"
  >
  </highcharts>
</template>

<script>
import { Chart } from 'highcharts-vue';
import Highcharts from 'highcharts';
import exporting from 'highcharts/modules/exporting';

exporting(Highcharts);

export default {
  name: "ChartColumn",
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
  },
  components: {
    highcharts: Chart
  },
  methods: {
    getData(accessories, max, min) {
      const data = [];

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

      return data;
    },
  },
  computed: {
    columnChart() {
      let series = [];
      series = this.getData(this.accessories, this.max, this.min);

      const {inverse, info, primary, danger, warning, success, textColor} = this.appConfig.colors;
      const chartColors = this.appConfig.colors;
      const {axisColor} = chartColors;

      return {
        chart: {
          type: 'column',
          height: 500,
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
        xAxis: {
          categories: ['12月', '11月', '10月', '9月', '8月', '7月', '6月', '5月', '4月', '3月', '2月', '1月'],
          labels: {
            style: {
              color: axisColor
            }
          }
        },
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
        colors: [primary, success, danger, warning, info, inverse],
        series
      };
    },
  }
}
</script>
