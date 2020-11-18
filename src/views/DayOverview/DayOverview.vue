<template>
  <div class="dashboard-page">
    <h1 class="page-title">結帳日總覽</h1>
    <b-row>
      <b-col >
        <div class="pb-xlg h-100">
          <Widget class="h-100 mb-0">
            <div class="d-flex justify-content-center align-items-center flex-column mb-lg">
              <h5>查詢日期</h5>
              <b-form-datepicker v-model="date" class="mt datepicker"></b-form-datepicker>
            </div>
            <hr>
            <p class="text-center">預設資料為昨日結帳累積資訊</p>
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
                  <span class='fw-normal ml-xs'>收入總額</span>
                </h5>"
              customHeader
              close
          >
            <div class="px-4 d-flex justify-content-between align-items-center mb-md">
              <h2>142,460</h2>
              <i class="la la-arrow-right text-primary la-lg rotate-315" />
            </div>
            <div class="px-4 d-flex flex-wrap justify-content-between">
              <div class="mt">
                <h6>+830</h6>
                <p class="text-muted mb-0 mr">
                  <small>現金</small>
                </p>
              </div>
              <div class="mt">
                <h6>+0.5%</h6>
                <p class="text-muted mb-0">
                  <small>張數</small>
                </p>
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
      <b-col sm="6" xs="12">
        <div class="pb-xlg h-100">
          <Widget
              class="h-100 mb-0"
              title="
                <h5 class='d-flex align-items-center pb-1'>
                  <span class='circle bg-primary mr-sm' style='font-size: 6px'></span>
                  <span class='fw-normal ml-xs'>營收最高地點</span>
                </h5>"
              customHeader
              close
          >
            <div class="px-4 d-flex justify-content-between align-items-center mb-md">
              <h2>14,880 / 外交部2</h2>
              <i class="la la-arrow-right text-primary la-lg rotate-315" />
            </div>
            <div class="px-4 d-flex flex-wrap justify-content-between">
              <div class="mt">
                <h6>33%</h6><p class="text-muted mb-0"><small>佔比</small></p>
              </div>
              <div class="mt">
                <h6>+830</h6><p class="text-muted mb-0 mr"><small>張數</small></p>
              </div>
              <div class="mt">
                <h6>4.5%</h6><p class="text-muted mb-0 mr"><small>Line Pay</small></p>
              </div>
            </div>
          </Widget>
        </div>
      </b-col>
      <b-col md="6" xl="3" sm="6" xs="12">
        <div class="pb-xlg h-100">
          <Widget
              class="h-100 mb-0"
              title="
                <h5 class='d-flex align-items-center pb-1'>
                  <span class='circle bg-info mr-sm' style='font-size: 6px'></span>
                  <span class='fw-normal ml-xs'>拍照張數</span>
                </h5>"
              customHeader
              close
          >
            <div class="px-4 d-flex justify-content-between align-items-center mb-md">
              <h2>934</h2>
              <i class="la la-arrow-right text-primary la-lg rotate-315" />
            </div>
            <div class="px-4 d-flex flex-wrap justify-content-between">
              <div class="mt">
                <h6>+0.5%</h6><p class="text-muted mb-0"><small>張數</small></p>
              </div>
              <div class="mt">
                <h6>4.5%</h6><p class="text-muted mb-0 mr"><small>Rate</small></p>
              </div>
            </div>
          </Widget>
        </div>
      </b-col>
      <b-col md="6" xl="3" sm="6" xs="12">
        <div class="pb-xlg h-100">
          <Widget
              class="h-100 mb-0"
              title="
                <h5 class='d-flex align-items-center pb-1'>
                  <span class='circle bg-info mr-sm' style='font-size: 6px'></span>
                  <span class='fw-normal ml-xs'>報表回傳設備</span>
                </h5>"
              customHeader
              close
          >
            <div class="px-4 d-flex justify-content-between align-items-center mb-md">
              <h2>96 / 103</h2>
              <i class="la la-arrow-right text-primary la-lg rotate-315" />
            </div>
            <div class="px-4 d-flex flex-wrap justify-content-between">
              <div class="mt">
                <h6>93%</h6><p class="text-muted mb-0 mr"><small>Rate</small></p>
              </div>
              <div class="mt">
                <p class="text-muted mb-0">不含停用設備</p>
              </div>
            </div>
          </Widget>
        </div>
      </b-col>
      <b-col md="6" xl="3" sm="6" xs="12">
        <div class="pb-xlg h-100">
          <Widget
              class="h-100 mb-0"
              title="
                <h5 class='d-flex align-items-center pb-1'>
                  <span class='circle bg-info mr-sm' style='font-size: 6px'></span>
                  <span class='fw-normal ml-xs'>無收入地點數</span>
                </h5>"
              customHeader
              close
          >
            <div class="px-4 d-flex justify-content-between align-items-center mb-md">
              <h2>8</h2>
              <i class="la la-arrow-right text-danger la-lg rotate-45" />
            </div>
            <div class="px-4 d-flex flex-wrap justify-content-between">
              <div class="mt">
                <h6>0.05%</h6><p class="text-muted mb-0 mr"><small>佔比</small></p>
              </div>
            </div>
          </Widget>
        </div>
      </b-col>
    </b-row>
    <b-row>
      <b-col md="6" xs="12">
        <div class="pb-xlg h-100">
          <Widget class="h-100 mb-0" title="收入來源筆數分佈" close>
            <highcharts :options="donut('revenue')"></highcharts>
          </Widget>
        </div>
      </b-col>
      <b-col md="6" xs="12">
        <div class="pb-xlg h-100">
          <Widget class="h-100 mb-0" title="照片規格筆數分佈" close>
            <highcharts :options="donut('specifications')"></highcharts>
          </Widget>
        </div>
      </b-col>
      <b-col md="6" xs="12">
        <div class="pb-xlg h-100">
          <Widget class="h-100 mb-0" title="照片類型筆數分佈" close>
            <highcharts :options="donut('type')"></highcharts>
          </Widget>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import Widget from '@/components/Widget/Widget';
import { Chart } from 'highcharts-vue';

export default {
  name: 'Dashboard',
  components: {
    Widget,
    highcharts: Chart
  },
  data() {
    return {
      date: '',
    }
  },
  methods: {
    getDate() {
      this.date = new Date(new Date().setDate(new Date().getDate()-1)).toJSON().slice(0,10);
    },
    getRevenueData() {
      const data = [];
      const seriesCount = 6;
      const accessories = ['現金', '悠遊卡', '一卡通', 'LinePay', '國泰-信用卡', '國泰-悠遊卡'];

      for (let i = 0; i < seriesCount; i += 1) {
        data.push({
          label: accessories[i],
          data: Math.floor(Math.random() * 100) + 1,
        });
      }

      return data;
    },
    getSpecificationsData() {
      const data = [];
      const seriesCount = 4;
      const accessories = ['1 吋', '2 吋', '身份證', '美簽'];

      for (let i = 0; i < seriesCount; i += 1) {
        data.push({
          label: accessories[i],
          data: Math.floor(Math.random() * 100) + 1,
        });
      }

      return data;
    },
    getTypeData() {
      const data = [];
      const seriesCount = 2;
      const accessories = ['一般照', '美肌'];

      for (let i = 0; i < seriesCount; i += 1) {
        data.push({
          label: accessories[i],
          data: Math.floor(Math.random() * 100) + 1,
        });
      }

      return data;
    },
    donut(dataType) {
      let analysisData = '';
      let seriesName = '';

      switch (dataType) {
        case 'revenue':
          analysisData = this.getRevenueData();
          seriesName = 'Revenue';
          break;
        case 'specifications':
          analysisData = this.getSpecificationsData();
          seriesName = 'Specifications';
          break;
        case 'type':
          analysisData = this.getTypeData();
          seriesName = 'Type';
          break;
        default:
      }

      let {primary, success, danger, warning, info, inverse} = this.appConfig.colors;
      let series = [
        {
          name: seriesName,
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
          text: '2020-11-18'
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
          enabled: false
        },
        series
      };
    },
  },
  created() {
    this.getDate();
  }
};
</script>

<style src="./DayOverview.scss" lang="scss" />
