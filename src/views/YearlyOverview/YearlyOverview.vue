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
    <b-row cols="1">
      <b-col>
        <div class="pb-xlg h-100">
          <Widget
              class="mb-0"
              title="每月收入總額"
              close
              collapse
          >
            <ChartBar
                :titleText=formatYear
                :accessories="['月收入']"
                :max="7500000"
                :min="2000000"
                :showType="'month'"
            />
          </Widget>
        </div>
      </b-col>
      <b-col>
        <div class="pb-xlg h-100">
          <Widget
              class="mb-0"
              title="收入來源每月筆數"
              close
              collapse
          >
            <ChartLine
                :titleText=formatYear
                :accessories="['現金', '悠遊卡', '一卡通', 'LinePay', '國泰-信用卡', '國泰-悠遊卡']"
                :max="35000"
                :min="0"
                :showType="'month'"
            />
          </Widget>
        </div>
      </b-col>
      <b-col>
        <div class="pb-xlg h-100">
          <Widget
              class="mb-0"
              title="照片規格每月筆數"
              close
              collapse
          >
            <ChartColumn
                :titleText=formatYear
                :accessories="['1 吋', '2 吋', '身份證', '美簽']"
                :max="35000"
                :min="0"
            />
          </Widget>
        </div>
      </b-col>
      <b-col>
        <div class="pb-xlg h-100">
          <Widget
              class="mb-0"
              title="照片類型每月筆數"
              close
              collapse
          >
            <ChartColumn
                :titleText=formatYear
                :accessories="['一般照', '美肌']"
                :max="35000"
                :min="0"
            />
          </Widget>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import ChartBar from "@/components/Charts/ChartBar";
import ChartLine from "@/components/Charts/ChartLine";
import ChartColumn from "@/components/Charts/ChartColumn";
import Widget from '@/components/Widget/Widget';
import {zh} from 'vuejs-datepicker/dist/locale';

export default {
  name: 'YearlyOverview',
  components: {
    Widget,
    ChartBar,
    ChartLine,
    ChartColumn,
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
