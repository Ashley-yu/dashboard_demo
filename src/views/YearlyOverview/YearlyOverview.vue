<template>
  <div class="dashboard-page">
    <h1 class="page-title">每月總覽</h1>
    <b-row>
      <b-col >
        <div class="pb-xlg h-100">
          <Widget class="mb-0">
            <div class="d-flex justify-content-center align-items-center flex-column mb-lg">
              <h5>查詢年份</h5>
              <datepicker
                  :calendar-button-icon="'fa fa-calendar-o'"
                  :language="zh"
                  :minimumView="'year'"
                  :maximumView="'year'"
                  format="yyyy"
                  calendar-button
                  bootstrap-styling
                  v-model="year"
                  class="mt"
              >
              </datepicker>
            </div>
            <hr>
            <p class="mb-0 text-center">預設資料為本年度月份累積資訊</p>
          </Widget>
        </div>
      </b-col>
    </b-row>
    <b-row>
      <b-col sm="6" xs="12">
        <div class="pb-xlg h-100">
          <Widget
              class="h-100 mb-0"
              title="
                <h5 class='d-flex align-items-center pb-1'>
                  <span class='circle bg-danger mr-sm' style='font-size: 6px'></span>
                  <span class='fw-normal ml-xs'>累計收入總額(本年)</span>
                </h5>"
              customHeader
              close
          >
            <div class="px-4 d-flex justify-content-between align-items-center mb-sm bt-sm">
              <h2>51,788,680</h2>
              <i class="la la-arrow-right text-primary la-lg rotate-315" />
            </div>
            <div class="px-4 d-flex flex-wrap justify-content-between">
              <div class="mt">
                <h6>+830,000</h6>
                <p class="text-muted mb-0 mr">
                  <small>收入</small>
                </p>
              </div>
              <div class="mt">
                <h6>80.5%</h6><p class="text-muted mb-0 mr"><small>現金</small></p>
              </div>
            </div>
          </Widget>
        </div>
      </b-col>
      <b-col sm="6" xs="12">
        <div class="pb-xlg h-100">
          <Widget
              class="h-100 mb-0"
              title="
                <h5 class='d-flex align-items-center pb-1'>
                  <span class='circle bg-primary mr-sm' style='font-size: 6px'></span>
                  <span class='fw-normal ml-xs'>累計拍照張數(本年)</span>
                </h5>"
              customHeader
              close
          >
            <div class="px-4 d-flex justify-content-between align-items-center mb-sm bt-sm">
              <h2>334,926</h2>
              <i class="la la-arrow-right text-primary la-lg rotate-315" />
            </div>
            <div class="px-4 d-flex flex-wrap justify-content-between">
              <div class="mt">
                <h6>+830</h6><p class="text-muted mb-0 mr"><small>張數</small></p>
              </div>
              <div class="mt">
                <h6>4.5%</h6>
                <p class="text-muted mb-0 mr">
                  <small>Rate</small>
                </p>
              </div>
            </div>
          </Widget>
        </div>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <div class="pb-xlg h-100">
          <Widget
              class="mb-0"
              title="每月收入總額"
              close
              collapse
          >
            <highcharts :options="barChart('dailyRevenue')"></highcharts>
          </Widget>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import Widget from '@/components/Widget/Widget';
import { Chart } from 'highcharts-vue';
import Highcharts from 'highcharts';
import exporting from 'highcharts/modules/exporting';
exporting(Highcharts);
import {zh} from 'vuejs-datepicker/dist/locale';

export default {
  name: 'YearlyOverview',
  components: {
    Widget,
    highcharts: Chart
  },
  data() {
    return {
      year: '',
      zh: zh,
    }
  },
  methods: {
    getYear() {
      this.year = new Date().toJSON().slice(0,4);
    },
    getData(seriesCount, accessories, max, min) {
      const data = [];

      for (let i = 0; i < seriesCount; i += 1) {
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
    barChart(dataType) {
      let series = [];

      switch (dataType) {
        case 'dailyRevenue':
          series = this.getData(1, ['月收入'],7500000,2000000);
          break;
        default:
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
          text: this.formatYear,
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
  },
  computed: {
    formatYear() {
      return new Date(this.year).toJSON().slice(0,4);
    },
  },
  created() {
    this.getYear()
  }
};
</script>

<style src="./YearlyOverview.scss" lang="scss" />
