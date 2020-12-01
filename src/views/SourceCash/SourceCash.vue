<template>
  <div class="source-page">
    <h1 class="page-title">現金</h1>
    <b-row>
      <b-col >
        <div class="pb-xlg h-100">
          <Widget class="mb-0">
            <div class="d-flex justify-content-center align-items-center flex-column mb-lg">
              <h5>查詢結帳日期區間</h5>
              <div class="d-flex flex-column flex-sm-row">
                <datepicker
                    :calendar-button-icon="'fa fa-calendar-o'"
                    :language="zh"
                    v-model="dateFrom"
                    v-on:selected="highlightFrom"
                    :highlighted="highlighted"
                    format="yyyy-MM-dd"
                    calendar-button
                    bootstrap-styling
                    class="mt mx-3"
                >
                </datepicker>
                <datepicker
                    :calendar-button-icon="'fa fa-calendar-o'"
                    :language="zh"
                    v-model="dateTo"
                    v-on:selected="highlightTo"
                    :highlighted="highlighted"
                    format="yyyy-MM-dd"
                    calendar-button
                    bootstrap-styling
                    class="mt mx-3"
                >
                </datepicker>
              </div>
            </div>
            <hr>
            <p class="mb-0 text-center">付款時間，不等同結帳日，有可能設備網路問題，造成好幾天一起結帳</p>
          </Widget>
        </div>
      </b-col>
    </b-row>
    <div class="pb-xlg h-100">
      <Widget class="mb-0">
        <b-row class="mb-3 mt-2" align-h="between">
          <b-col sm="6">
            <b-form>
              <b-form-group>
                <b-input-group class="input-group-no-border">
                  <template v-slot:prepend>
                    <b-input-group-text><i class="la la-search"/></b-input-group-text>
                  </template>
                  <b-form-input
                      id="filterInput"
                      type="search"
                      placeholder="Search"
                      v-model="filter"
                      autocomplete="off"
                  />
                </b-input-group>
              </b-form-group>
            </b-form>
          </b-col>
        </b-row>
        <div class="table-responsive">
          <b-table
              class="table-lg mb-0 requests-table"
              striped
              hover
              :filter="filter"
              :fields="fields"
              :items="data"
              :per-page="perPage"
              :current-page="currentPage"
          >
            <template #cell(index)="data">
              {{ data.index + 1 }}
            </template>
          </b-table>
        </div>
        <b-pagination
            v-model="currentPage"
            :total-rows="rows"
            :per-page="perPage"
            aria-controls="my-table"
            align="right"
        ></b-pagination>
      </Widget>
    </div>
  </div>
</template>

<script>
import {zh} from 'vuejs-datepicker/dist/locale';
import moment from 'moment';

export default {
  name: "SourceCash",
  data() {
    return {
      highlighted: {},
      zh: zh,
      dateFrom: '',
      dateTo: '',
      filter: '',
      fields: [
        {
          key: 'index',
          label: '#',
        },
        {
          key: 'accountDate',
          label: '結帳日',
        },
        {
          key: 'equipId',
          label: '設備編號',
        },
        {
          key: 'equipName',
          label: '設備名稱',
        },
        {
          key: 'photoSpec',
          label: '規格',
        },
        {
          key: 'photoType',
          label: '照片類型',
        },
        {
          key: 'price',
          label: '單價',
        },
        {
          key: 'paymentDate',
          label: '付款時間',
          sortable: true,
        },
      ],
      data: [
        {
          id: 1,
          accountDate: '2020-12-01',
          equipId: 'ABC275',
          equipName: 'DonHo Subway',
          photoSpec: '2吋',
          photoType: 'ㄧ般照',
          price: '150',
          paymentDate: '2020-12-26 16:44:15',
        },
        {
          id: 2,
          accountDate: '2020-12-01',
          equipId: 'ABC275',
          equipName: 'DonHo Subway',
          photoSpec: '2吋',
          photoType: 'ㄧ般照',
          price: '150',
          paymentDate: '2020-12-27 16:44:15',
        },
      ],
      currentPage: 1,
      perPage: 10,
    }
  },
  methods: {
    highlightFrom(val) {
      if (typeof this.highlighted.from === "undefined") {
        this.highlighted = {
          to: this.highlighted.to,
          daysOfMonth: this.highlighted.daysOfMonth,
          from: null
        };
      }
      this.highlighted.from = val;
      this.setHighlightedDays();
    },
    highlightTo(val) {
      if (typeof this.highlighted.to === "undefined") {
        this.highlighted = {
          to: null,
          daysOfMonth: this.highlighted.daysOfMonth,
          from: this.highlighted.from
        };
      }
      this.highlighted.to = val;
      this.setHighlightedDays();
    },
    setHighlightedDays() {
      this.highlighted = {
        to: this.highlighted.to,
        daysOfMonth: this.highlighted.daysOfMonth,
        from: this.highlighted.from,
      };
    },
    getDate() {
      this.dateFrom = new Date(new Date().getFullYear(), new Date().getMonth(), 1);
      this.dateTo =  new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0);

      this.highlighted.from = this.dateFrom;
      this.highlighted.to = this.dateTo;
    },
  },
  computed: {
    formatDateFrom() {
      return moment(this.dateFrom).format('YYYY-MM-DD');
    },
    formatDateTo() {
      return moment(this.dateTo).format('YYYY-MM-DD');
    },
    rows() {
      return this.data.length;
    },
  },
  created() {
    this.getDate();
  }
}
</script>

<style src="./SourceCash.scss" lang="scss" />
