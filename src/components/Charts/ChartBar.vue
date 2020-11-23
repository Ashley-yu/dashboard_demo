<template>
  <highcharts
      :options="barChart"
  >
  </highcharts>
</template>

<script>
import { Chart } from 'highcharts-vue';
import Highcharts from 'highcharts';
import exporting from 'highcharts/modules/exporting';

exporting(Highcharts);

export default {
  name: "ChartBar",
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

        if (this.showType === 'month') {
          for (let j = 0; j < 12; j++) {
            randomData.push([
              Math.floor(Math.random()*(max-min+1))+min
            ])
          }
        } else if (this.showType === 'year') {
          for (let j = 0; j < 11; j++) {
            randomData.push([
              Math.floor(Math.random()*(max-min+1))+min
            ])
          }
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
    barChart() {
      let series = [];
      series = this.getData(this.accessories, this.max, this.min);

      let xAxis = {};
      if (this.showType === 'month') {
        xAxis = {
          categories: ['12月', '11月', '10月', '9月', '8月', '7月', '6月', '5月', '4月', '3月', '2月', '1月'],
          labels: {
            style: {
              color: axisColor
            }
          }
        };
      } else if (this.showType === 'year') {
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
      }

      const {inverse, info, primary, danger, warning, success, textColor} = this.appConfig.colors;
      const chartColors = this.appConfig.colors;
      const {axisColor} = chartColors;

      return {
        chart: {
          type: 'bar',
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
          bar: {
            dataLabels: {
              enabled: false,
            }
          },
          series: {
            pointWidth: 20,
          },
        },
        colors: [primary, success, danger, warning, info, inverse],
        series
      };
    },
  }
}
</script>
