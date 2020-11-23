<template>
  <highcharts
      :options="stackedColumnChart"
  >
  </highcharts>
</template>

<script>
import { Chart } from 'highcharts-vue';
import Highcharts from 'highcharts';
import exporting from 'highcharts/modules/exporting';

exporting(Highcharts);

export default {
  name: "ChartStackedColumn",
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
        for (let j = 0; j < 11; j++) {
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
    stackedColumnChart() {
      let series = [];
      series = this.getData(this.accessories, this.max, this.min);

      const {inverse, info, primary, danger, warning, success, textColor} = this.appConfig.colors;
      const chartColors = this.appConfig.colors;
      const {axisColor} = chartColors;

      let xAxis = {};
      let years = this.titleText.split("~",2);
      let startYear = parseInt(years[0]);
      let categories= [];

      for (let i=0; i<11; i++) {
        categories.push(startYear + i);
      }
      categories = categories.reverse();

      xAxis = {
        categories,
        labels: {
          style: {
            color: axisColor
          }
        }
      };

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
          column: {
            stacking: 'normal',
          },
        },
        colors: [primary, success, danger, warning, info, inverse],
        series
      };
    },
  }
}
</script>
