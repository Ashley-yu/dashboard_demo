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
      year: '',
      zh: zh,
    }
  },
  methods: {
    getYear() {
      this.year = new Date().toJSON().slice(0,4);
    },
  },
  created() {
    this.getYear()
  }
};
</script>

<style src="./YearlyOverview.scss" lang="scss" />
