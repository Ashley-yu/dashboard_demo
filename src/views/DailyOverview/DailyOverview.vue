<template>
  <div class="dashboard-page">
    <h1 class="page-title">結帳日總覽</h1>
    <div>
      <b-row>
        <b-col >
          <div class="pb-xlg h-100">
            <Widget class="mb-0">
              <div class="d-flex justify-content-center align-items-center flex-column mb-lg">
                <h5>查詢日期</h5>
                <datepicker
                    :calendar-button-icon="'fa fa-calendar-o'"
                    :language="zh"
                    :format="'yyyy-MM-dd'"
                    calendar-button
                    bootstrap-styling
                    v-model="date"
                    class="mt"
                >
                </datepicker>
              </div>
              <hr>
              <p class="mb-0 text-center">預設資料為昨日結帳累積資訊</p>
            </Widget>
          </div>
        </b-col>
      </b-row>
      <b-row>
        <b-col sm="6" xs="12">
          <div class="pb-xlg h-100">
            <Widget
                class="mb-0"
                title="
                <h5 class='d-flex align-items-center pb-1'>
                  <span class='circle bg-danger mr-sm' style='font-size: 6px'></span>
                  <span class='fw-normal ml-xs'>收入總額</span>
                </h5>"
                customHeader
                close
            >
              <div class="px-4 d-flex justify-content-between align-items-center mb-sm mt-sm">
                <h2>142,460</h2>
                <i class="la la-arrow-right text-primary la-lg rotate-315" />
              </div>
              <div class="px-4 d-flex flex-wrap justify-content-between">
                <div class="mt">
                  <h6>102,571</h6>
                  <p class="text-muted mb-0 mr">
                    <small>現金</small>
                  </p>
                </div>
                <div class="mt">
                  <h6>934</h6>
                  <p class="text-muted mb-0">
                    <small>張數</small>
                  </p>
                </div>
                <div class="mt">
                  <h6>72%</h6>
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
                class="mb-0"
                title="
                <h5 class='d-flex align-items-center pb-1'>
                  <span class='circle bg-primary mr-sm' style='font-size: 6px'></span>
                  <span class='fw-normal ml-xs'>營收最高地點</span>
                </h5>"
                customHeader
                close
            >
              <div class="px-4 d-flex justify-content-between align-items-center  mb-sm mt-sm">
                <h2>14,880 / 外交部2</h2>
              </div>
              <div class="px-4 d-flex flex-wrap justify-content-between">
                <div class="mt">
                  <h6>33%</h6><p class="text-muted mb-0"><small>佔比</small></p>
                </div>
                <div class="mt">
                  <h6>830</h6><p class="text-muted mb-0 mr"><small>張數</small></p>
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
              <div class="px-4 d-flex justify-content-between align-items-center mb-lg mt-sm">
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
              <div class="px-4 d-flex justify-content-between align-items-center mb-lg bt-sm">
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
              <div class="px-4 d-flex justify-content-between align-items-center mb-lg bt-sm">
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
        <b-col md="6" xl="3" sm="6" xs="12">
          <div class="pb-xlg h-100">
            <Widget
                class="h-100 mb-0"
                title="
                <h5 class='d-flex align-items-center pb-1'>
                  <span class='circle bg-info mr-sm' style='font-size: 6px'></span>
                  <span class='fw-normal ml-xs'>Server Overview</span>
                </h5>"
                customHeader
                close
            >
              <div class="d-flex align-items-center mb-sm">
                <p class="width-150"><small>60% / 37°С / 3.3 Ghz</small></p>
                <div style="width: calc(100% - 150px)">
                  <trend
                      :data="getRandomData()"
                      :gradient="[appConfig.colors.danger]"
                      :height="40"
                      stroke-width="4"
                      smooth />
                </div>
              </div>
              <div class="d-flex align-items-center mb-sm">
                <p class="width-150"><small>54% / 31°С / 3.3 Ghz</small></p>
                <div style="width: calc(100% - 150px)">
                  <trend
                      :data="getRandomData()"
                      :gradient="[appConfig.colors.info]"
                      :height="40"
                      stroke-width="4"
                      smooth />
                </div>
              </div>
              <div class="d-flex align-items-center">
                <p class="width-150"><small>57% / 21°С / 3.3 Ghz</small></p>
                <div style="width: calc(100% - 150px)">
                  <trend
                      :data="getRandomData()"
                      :gradient="[appConfig.colors.primary]"
                      :height="40"
                      stroke-width="4"
                      smooth />
                </div>
              </div>
            </Widget>
          </div>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="6" xl="4" xs="12">
          <div class="pb-xlg h-100">
            <Widget
                class="mb-0"
                title="收入來源筆數分佈"
                close
                collapse
            >
              <ChartDonut
                :titleText=formatDate
                :accessories="['現金', '悠遊卡', '一卡通', 'LinePay', '國泰-信用卡', '國泰-悠遊卡']"
                :seriesName="'Revenue'"
              />
            </Widget>
          </div>
        </b-col>
        <b-col md="6" xl="4" xs="12">
          <div class="pb-xlg h-100">
            <Widget
                class="mb-0"
                title="照片規格筆數分佈"
                close
                collapse
            >
              <ChartDonut
                  :titleText=formatDate
                  :accessories="['1 吋', '2 吋', '身份證', '美簽']"
                  :seriesName="'Specifications'"
              />
            </Widget>
          </div>
        </b-col>
        <b-col md="6" xl="4" xs="12">
          <div class="pb-xlg h-100">
            <Widget
                class="mb-0"
                title="照片類型筆數分佈"
                close
                collapse
            >
              <ChartDonut
                  :titleText=formatDate
                  :accessories="['一般照', '美肌']"
                  :seriesName="'Type'"
              />
            </Widget>
          </div>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import ChartDonut from "@/components/Charts/ChartDonut";
import Widget from '@/components/Widget/Widget';
import {zh} from 'vuejs-datepicker/dist/locale';

export default {
  name: 'DailyOverview',
  components: {
    Widget,
    ChartDonut,
  },
  data() {
    return {
      date: '',
      zh: zh,
    }
  },
  methods: {
    getDate() {
      this.date = new Date(new Date().setDate(new Date().getDate()-1)).toJSON().slice(0,10);
    },
    getRandomData() {
      const arr = [];

      for (let i = 0; i < 25; i += 1) {
        arr.push(Math.random().toFixed(1) * 10);
      }

      return arr;
    },
  },
  computed: {
    formatDate() {
      return new Date(this.date).toJSON().slice(0,10);
    },
  },
  created() {
    this.getDate();
  }
};
</script>
