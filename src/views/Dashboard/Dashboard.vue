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
      <b-col xs="12" sm="6">
        <div class="pb-xlg h-100">
          <Widget
              class="h-100 mb-0 widget-statistic"
              title="<h5 class='d-flex align-items-center pb-1'><span class='circle bg-primary mr-sm' style='font-size: 6px'></span><span class='fw-normal ml-xs'>收入總額</span></h5>"
              customHeader
              close
          >
            <div class="px-4 d-flex justify-content-between align-items-center widget-statistic-container">
              <h2>133,840</h2>
              <div class="d-flex justify-content-between widget-statistic-content">
                <div class="p-3">
                  <div class="d-flex align-items-start">
                    <h6>+833</h6>
                    <i class="la la-arrow-right la-lg ml-sm text-success rotate-315"/>
                  </div>
                  <p class="text-muted mb-0 mr"><small>現金</small></p>
                </div>
                <div class="p-3">
                  <div class="d-flex align-items-start">
                    <h6>4.5%</h6>
                    <i class="la la-arrow-right la-lg ml-sm text-danger rotate-45"/>
                  </div>
                  <p class="text-muted mb-0 mr"><small>一卡通</small></p>
                </div>
              </div>
            </div>
          </Widget>
        </div>
      </b-col>
      <b-col xs="12" sm="6">
        <div class="pb-xlg h-100">
          <Widget class="h-100 mb-0" title="營收最高地點" close>
            <div class="d-flex justify-content-between align-items-center">
              <h2>19,320/外交部3</h2>
            </div>
          </Widget>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import Widget from '@/components/Widget/Widget';
import BigStat from './components/BigStat/BigStat';
// import mock from './mock';

// import { Chart } from 'highcharts-vue';

export default {
  name: 'Dashboard',
  components: {
    Widget,
    BigStat,
  },
  // components: {
  //   Widget, BigStat, highcharts: Chart
  // },
  data() {
    return {
      date: '2020-11-17',
      bigStat: [
        {
          product: '收入總額',
          total: '133,840',
          color: 'primary',
          registrations: {
            value: 830,
            profit: true,
          },
          bounce: {
            value: 4.5,
            profit: false,
          },
        },
        {
          product: 'Sing App',
          total: '754',
          color: 'danger',
          registrations: {
            value: 30,
            profit: true,
          },
          bounce: {
            value: 2.5,
            profit: true,
          },
        },
      ],
    }
  },
  methods: {
  },
  computed: {
  }
};
</script>

<style src="./Dashboard.scss" lang="scss" />
