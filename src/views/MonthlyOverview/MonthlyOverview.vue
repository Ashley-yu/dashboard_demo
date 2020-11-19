<template>
  <div class="dashboard-page">
    <h1 class="page-title">每日總覽</h1>
    <b-row>
      <b-col >
        <div class="pb-xlg h-100">
          <Widget class="mb-0">
            <div class="d-flex justify-content-center align-items-center flex-column mb-lg">
              <h5>查詢月份</h5>
              <datepicker
                  :calendar-button-icon="'fa fa-calendar-o'"
                  :language="zh"
                  :minimumView="'month'"
                  :maximumView="'month'"
                  format="yyyy-MM"
                  calendar-button
                  bootstrap-styling
                  v-model="month"
                  class="mt"
              >
              </datepicker>
            </div>
            <hr>
            <p class="mb-0 text-center">預設資料為本月每日累積資訊</p>
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
                  <span class='fw-normal ml-xs'>累計收入總額(本月)</span>
                </h5>"
              customHeader
              close
          >
            <div class="px-4 d-flex justify-content-between align-items-center mb-md">
              <h2>3,143,660</h2>
              <i class="la la-arrow-right text-primary la-lg rotate-315" />
            </div>
            <div class="px-4 d-flex flex-wrap justify-content-between">
              <div class="mt">
                <h6>+8300</h6>
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
                  <span class='fw-normal ml-xs'>累計拍照張數(本月)</span>
                </h5>"
              customHeader
              close
          >
            <div class="px-4 d-flex justify-content-between align-items-center mb-md">
              <h2>20,759</h2>
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
      <b-col xs="12">
        <div class="pb-xlg h-100">
          <Widget
              class="mb-0"
              title="每日收入總額"
              close
              collapse
          >
            <highcharts :options="lineChart('dailyRevenue')"></highcharts>
          </Widget>
        </div>
      </b-col>
      <b-col xs="12">
        <div class="pb-xlg h-100">
          <Widget
              class="mb-0"
              title="收入來源每日筆數"
              close
              collapse
          >
            <highcharts :options="lineChart('dailyRevenue')"></highcharts>
          </Widget>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import Widget from '@/components/Widget/Widget';
import { Chart } from 'highcharts-vue';
import {zh} from 'vuejs-datepicker/dist/locale';

export default {
  name: 'Dashboard',
  components: {
    Widget,
    highcharts: Chart
  },
  data() {
    return {
      month: '',
      zh: zh,
    }
  },
  methods: {
    getMonth() {
      this.month = new Date().toJSON().slice(0,7);
    },
    getDailyRevenueData() {
      return [{
        name: "日收入",
        data: [
          [Date.UTC(2020, 11, 1), 197020],
          [Date.UTC(2020, 11, 2), 149620],
          [Date.UTC(2020, 11, 3), 149470],
          [Date.UTC(2020, 11, 4), 50600],
          [Date.UTC(2020, 11, 5), 37550],
          [Date.UTC(2020, 11, 6), 51820],
          [Date.UTC(2020, 11, 7), 85050],
          [Date.UTC(2020, 11, 8), 196620],
          [Date.UTC(2020, 11, 9), 151750],
          [Date.UTC(2020, 11, 10), 166050],
          [Date.UTC(2020, 11, 11), 142460],
          [Date.UTC(2020, 11, 12), 133840],
          [Date.UTC(2020, 11, 13), 65550],
          [Date.UTC(2020, 11, 14), 79630],
          [Date.UTC(2020, 11, 15), 170610],
          [Date.UTC(2020, 11, 16), 123030],
          [Date.UTC(2020, 11, 17), 160280],
          [Date.UTC(2020, 11, 18), 130400],
          [Date.UTC(2020, 11, 19), 128510],
          [Date.UTC(2020, 11, 20), 66320],
          [Date.UTC(2020, 11, 21), 74700],
          [Date.UTC(2020, 11, 22), 10000],
          [Date.UTC(2020, 11, 23), 15200],
          [Date.UTC(2020, 11, 24), 104530],
          [Date.UTC(2020, 11, 25), 114200],
          [Date.UTC(2020, 11, 26), 92910],
          [Date.UTC(2020, 11, 27), 23290],
          [Date.UTC(2020, 11, 28), 40530],
          [Date.UTC(2020, 11, 29), 124530],
          [Date.UTC(2020, 11, 30), 117590],
        ]
      }]
    },
    lineChart(dataType) {
      let series = "";

      switch (dataType) {
        case 'dailyRevenue':
          series = this.getDailyRevenueData();
          break;
        default:
      }

      const {inverse, info, primary, danger, warning, success, textColor} = this.appConfig.colors;
      const chartColors = this.appConfig.colors;
      const {axisColor} = chartColors;

      return {
        chart: {
          type: 'spline',
          height: 350
        },
        exporting: {
          enabled: false
        },
        title: {
          text: '2020年11月',
          style: {
            color: textColor
          }
        },
        credits: {
          enabled: false
        },
        xAxis: {
          type: 'datetime',
          dateTimeLabelFormats: {
            day: '%d',
          },
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
          enabled: true
        },
        plotOptions: {
          series: {
            marker: {
              enabled: true,
              symbol: 'circle'
            }
          }
        },
        colors: [primary, success, danger, warning, info, inverse],
        series
      };
    },
  },
  created() {
    this.getMonth()
  }
};
</script>

<style src="./MonthlyOverview.scss" lang="scss" />
