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
            <div class="px-4 d-flex justify-content-between align-items-center mb-sm bt-sm">
              <h2>3,143,660</h2>
              <i class="la la-arrow-right text-primary la-lg rotate-315" />
            </div>
            <div class="px-4 d-flex flex-wrap justify-content-between">
              <div class="mt">
                <h6>+8,300</h6>
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
            <div class="px-4 d-flex justify-content-between align-items-center mb-sm bt-sm">
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
    <b-row cols="1">
      <b-col>
        <div class="pb-xlg h-100">
          <Widget
              class="mb-0"
              title="每日收入總額"
              close
              collapse
          >
            <ChartLine
                :titleText=formatMonth
                :accessories="['日收入']"
                :max="200000"
                :min="10000"
                :showType="'day'"
            />
          </Widget>
        </div>
      </b-col>
      <b-col>
        <div class="pb-xlg h-100">
          <Widget
              class="mb-0"
              title="收入來源每日筆數"
              close
              collapse
          >
            <ChartLine
                :titleText=formatMonth
                :accessories="['現金', '悠遊卡', '一卡通', 'LinePay', '國泰-信用卡', '國泰-悠遊卡']"
                :max="1000"
                :min="0"
                :showType="'day'"
            />
          </Widget>
        </div>
      </b-col>
      <b-col>
        <div class="pb-xlg h-100">
          <Widget
              class="mb-0"
              title="照片規格每日筆數"
              close
              collapse
          >
            <ChartLine
                :titleText=formatMonth
                :accessories="['1 吋', '2 吋', '身份證', '美簽']"
                :max="1100"
                :min="0"
                :showType="'day'"
            />
          </Widget>
        </div>
      </b-col>
      <b-col>
        <div class="pb-xlg h-100">
          <Widget
              class="mb-0"
              title="照片類型每日筆數"
              close
              collapse
          >
            <ChartLine
                :titleText=formatMonth
                :accessories="['一般照', '美肌']"
                :max="1100"
                :min="0"
                :showType="'day'"
            />
          </Widget>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import ChartLine from "@/components/Charts/ChartLine";
import {zh} from 'vuejs-datepicker/dist/locale';
import moment from 'moment';

export default {
  name: 'MonthlyOverview',
  components: {
    ChartLine,
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
  },
  computed: {
    formatMonth() {
      return moment(this.month).format('YYYY-MM');
    },
  },
  created() {
    this.getMonth()
  }
};
</script>
