<template>
  <div class="dashboard-page">
    <h1 class="page-title">年度總覽</h1>
    <b-row>
      <b-col >
        <div class="pb-xlg h-100">
          <Widget class="mb-0">
            <div class="d-flex justify-content-center align-items-center flex-column mb-lg">
              <h5>查詢年份區間</h5>
              <div class="d-flex flex-column flex-sm-row">
                <datepicker
                    :calendar-button-icon="'fa fa-calendar-o'"
                    :language="zh"
                    :minimumView="'year'"
                    :maximumView="'year'"
                    format="yyyy"
                    calendar-button
                    bootstrap-styling
                    v-model="yearFrom"
                    class="mt mx-3"
                >
                </datepicker>
                <datepicker
                    :calendar-button-icon="'fa fa-calendar-o'"
                    :language="zh"
                    :minimumView="'year'"
                    :maximumView="'year'"
                    format="yyyy"
                    calendar-button
                    bootstrap-styling
                    v-model="yearTo"
                    class="mt mx-3"
                >
                </datepicker>
              </div>
            </div>
            <hr>
            <p class="mb-0 text-center">
              預設資料為10年，各年度累積資料
              <br>
              查詢區間至多10年
            </p>
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
  name: 'AnnualOverview',
  components: {
    Widget,
    highcharts: Chart
  },
  data() {
    return {
      yearFrom: '',
      yearTo: '',
      zh: zh,
    }
  },
  methods: {
    getYear() {
      this.yearFrom = new Date(new Date().setFullYear(new Date().getFullYear() - 10));
      this.yearTo = new Date().toJSON().slice(0,4);
    },
  },
  computed: {
    formatYearFrom() {
      return new Date(this.yearFrom).toJSON().slice(0,4);
    },
    formatYearTo() {
      return new Date(this.yearTo).toJSON().slice(0,4);
    },
  },
  created() {
    this.getYear();
  }
};
</script>

<style src="./AnnualOverview.scss" lang="scss" />
