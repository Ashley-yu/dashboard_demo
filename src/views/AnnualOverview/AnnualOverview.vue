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
    <b-row cols="1">
      <b-col>
        <div class="pb-xlg h-100">
          <Widget
              class="mb-0"
              title="年度收入總額"
              close
              collapse
          >
            <ChartBar
                :titleText="titleText"
                :accessories="['年收入']"
                :max="52000000"
                :min="2000000"
                :showType="'year'"
            />
          </Widget>
        </div>
      </b-col>
      <b-col>
        <div class="pb-xlg h-100">
          <Widget
              class="mb-0"
              title="收入來源年度筆數"
              close
              collapse
          >
            <ChartStackedColumn
                :titleText="titleText"
                :accessories="['現金', '悠遊卡', '一卡通', 'LinePay', '國泰-信用卡', '國泰-悠遊卡']"
                :max="350000"
                :min="0"
            />
          </Widget>
        </div>
      </b-col>
      <b-col>
        <div class="pb-xlg h-100">
          <Widget
              class="mb-0"
              title="照片規格年度筆數"
              close
              collapse
          >
            <ChartStackedColumn
                :titleText="titleText"
                :accessories="['1 吋', '2 吋', '身份證', '美簽']"
                :max="350000"
                :min="0"
            />
          </Widget>
        </div>
      </b-col>
      <b-col>
        <div class="pb-xlg h-100">
          <Widget
              class="mb-0"
              title="照片類型年度筆數"
              close
              collapse
          >
            <ChartStackedColumn
                :titleText="titleText"
                :accessories="['一般照', '美肌']"
                :max="350000"
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
import ChartStackedColumn from "@/components/Charts/ChartStackedColumn";
import {zh} from 'vuejs-datepicker/dist/locale';

export default {
  name: 'AnnualOverview',
  components: {
    ChartBar,
    ChartStackedColumn,
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
    titleText() {
      return `${this.formatYearFrom}~${this.formatYearTo}`;
    }
  },
  created() {
    this.getYear();
  }
};
</script>
