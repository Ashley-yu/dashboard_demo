<template>
  <div class="dashboard-page">
    <h1 class="page-title">每日總覽</h1>
    <b-row>
      <b-col >
        <div class="pb-xlg h-100">
          <Widget class="h-100 mb-0">
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
            <p class="text-center">預設資料為本月每日累積資訊</p>
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
  },
  created() {
    this.getMonth()
  }
};
</script>

<style src="./MonthlyOverview.scss" lang="scss" />
