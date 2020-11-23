<template>
  <highcharts
      :options="donutChart"
  >
  </highcharts>
</template>

<script>
import { Chart } from 'highcharts-vue';
import Highcharts from 'highcharts';
import exporting from 'highcharts/modules/exporting';

exporting(Highcharts);

export default {
  name: "ChartDonut",
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
    seriesName: {
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
    getData(accessories) {
      const data = [];
      for (let i = 0; i < accessories.length; i += 1) {
        data.push({
          label: accessories[i],
          data: Math.floor(Math.random() * 100) + 1,
        });
      }
      return data;
    },
  },
  computed: {
    donutChart() {
      let analysisData = '';
      const {primary, success, danger, warning, info, inverse} = this.appConfig.colors;

      analysisData = this.getData(this.accessories);

      let series = [
        {
          name: this.seriesName,
          data: analysisData.map(s => {
            return {
              name: s.label,
              y: s.data
            }
          })
        }
      ];
      return {
        chart: {
          type: 'pie',
          height: 300,
        },
        credits: {
          enabled: false
        },
        title: {
          text: this.titleText,
        },
        plotOptions: {
          pie: {
            dataLabels: {
              enabled: false
            },
            borderColor: null,
            showInLegend: true,
            innerSize: '40%',
            size: '100%',
            states: {
              hover: {
                halo: {
                  size: 8
                }
              }
            }
          }
        },
        colors: [primary, success, danger, warning, info, inverse],
        legend: {
          itemStyle: {
            color: '#495057',
            fontWeight: 100,
            fontFamily: 'Montserrat'
          },
          itemMarginBottom: 5,
          symbolRadius: 0
        },
        exporting: {
          buttons: {
            contextButton: {
              menuItems: ['downloadPNG', 'downloadJPEG', 'downloadPDF']
            }
          }
        },
        navigation: {
          buttonOptions: {
            enabled: true,
          }
        },
        series
      };
    },
  }
}
</script>
