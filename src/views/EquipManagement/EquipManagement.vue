<template>
  <div class="equip-page">
    <h1 class="page-title">設備總覽</h1>
    <div class="pb-xlg h-100">
      <Widget class="mb-0">
        <div class="d-flex">
          <b-button variant="dark" @click.prevent="$router.push('equip/import')">
            <i class="fa fa-upload mr-1"/>
            匯入設定費用
          </b-button>
          <b-button class="ml-3" variant="default">
            <i class="fa fa-download mr-1"/>
            匯出設定費用
          </b-button>
        </div>
        <hr>
        <p class="mb-0">
          1. 下載設定費用上傳檔案，抽成金額和抽成百分比兩者擇一，請做檢查
          <br>
          2. 設定費用上傳檔案，為已上傳設備費用項目，若有新項目，則依序增加
        </p>
      </Widget>
    </div>
    <div class="pb-xlg h-100">
      <Widget class="mb-0">
        <b-row class="mb-3 mt-2">
          <b-col md="3">
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
              @row-clicked="expandAdditionalInfo"
          >
            <template #cell(index)="data">
              {{ data.index + 1 }}
            </template>
            <template #cell(detail)="data">
              <b-button variant="outline-dark"
                        size="sm"
              >
                明細
              </b-button>
            </template>
            <template slot="row-details" slot-scope="row">
              <b-card>
                <b-row class="mb-2">
                  <b-col sm="2" class="text-sm-right">
                    <b>地址:</b>
                  </b-col>
                  <b-col sm="2">
                    {{ row.item.address }}
                  </b-col>
                  <b-col sm="2" class="text-sm-right">
                    <b>數量:</b>
                  </b-col>
                  <b-col sm="2">
                    {{ row.item.number }}
                  </b-col>
                </b-row>
              </b-card>
            </template>
            <template #cell(actions)="data">
              <b-button class="mr-1 my-1"
                        variant="dark"
              >
                <i class="fa fa-pencil mr-1"/>
                編輯
              </b-button>
              <b-button class="mr-1 my-1"
                        variant="dark"
                        v-if="data.item.status"
              >
                <i class="fa fa-minus-circle mr-1"/>
                停用
              </b-button>
              <b-button class="mr-1 my-1"
                        variant="dark"
                        v-else
              >
                <i class="fa fa-check-circle mr-1"/>
                啟用
              </b-button>
              <b-button class="mr-1 my-1"
                        variant="default">
                <i class="fa fa-cog mr-1"/>
                設定費用
              </b-button>
              <b-button class="mr-1 my-1"
                        variant="default"
              >
                <i class="fa fa-refresh mr-1"/>
                開機中
              </b-button>
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
export default {
  name: "EquipManagement",
  data() {
    return {
      filter: '',
      perPage: 10,
      currentPage: 1,
      fields: [
        {
          key: 'index',
          label: '#',
        },
        {
          key: 'detail',
          label: '',
        },
        {
          key: 'equipId',
          label: '編號',
          sortable: true,
        },
        {
          key: 'equipName',
          label: '名稱',
        },
        {
          key: 'createDate',
          label: '建立日期',
          sortable: true,
        },
        {
          key: 'actions',
          label: '動作',
          tdClass: 'td-action'
        }
      ],
      data: [
        {
          id: 1,
          equipId: "ABC200",
          status: true,
          equipName: "xiny adam",
          address: "新北市",
          number: 30,
          createDate: "2020-01-10 09:38:08",
          _showDetails: false,
        },
        {
          id: 2,
          equipId: "ABC184",
          status: true,
          equipName: "songshan huzheng",
          address: "新北市",
          number: 30,
          createDate: "2020-01-09 01:03:45",
          _showDetails: false,
        },
        {
          id: 3,
          equipId: "ABC025",
          status: true,
          equipName: "zhonghe fuxing",
          address: "新北市",
          number: 30,
          createDate: "2020-01-07 01:00:24",
          _showDetails: false,
        },
        {
          id: 4,
          equipId: "ABC426",
          status: true,
          equipName: "hong shulin",
          address: "基隆市",
          number: 30,
          createDate: "2020-01-04 01:06:55",
          _showDetails: false,
        },
        {
          id: 5,
          equipId: "ABC145",
          status: true,
          equipName: "trade building",
          address: "基隆市",
          number: 30,
          createDate: "2020-01-04 01:02:42",
          _showDetails: false,
        },
        {
          id: 6,
          equipId: "ABC020",
          status: true,
          equipName: "yingge huzheng",
          address: "基隆市",
          number: 30,
          createDate: "2020-01-04 01:00:11",
          _showDetails: false,
        },
        {
          id: 7,
          equipId: "ABC305",
          status: true,
          equipName: "taidian dalou",
          address: "宜蘭縣",
          number: 30,
          createDate: "2020-01-03 01:04:48",
          _showDetails: false,
        },
        {
          id: 8,
          equipId: "ABC176",
          status: true,
          equipName: "guting yushan",
          address: "宜蘭縣",
          number: 30,
          createDate: "2020-01-03 01:02:41",
          _showDetails: false,
        },
        {
          id: 9,
          equipId: "ABC461",
          status: false,
          equipName: "datong baoya",
          address: "宜蘭縣",
          number: 30,
          createDate: "2019-12-31 01:07:05",
          _showDetails: false,
        },
        {
          id: 10,
          equipId: "ABC344",
          status: false,
          equipName: "dongming baoya",
          address: "宜蘭縣",
          number: 30,
          createDate: "2019-12-31 01:05:39",
          _showDetails: false,
        },
        {
          id: 11,
          equipId: "ABC071",
          status: false,
          equipName: "xinghou family",
          address: "桃園市",
          number: 30,
          createDate: "2019-12-31 01:01:14",
          _showDetails: false,
        },
        {
          id: 12,
          equipId: "ABC168",
          status: false,
          equipName: "gong guag",
          address: "桃園市",
          number: 30,
          createDate: "2019-12-28 01:02:32",
          _showDetails: false,
        },
      ],
    };
  },
  methods: {
    expandAdditionalInfo(row) {
      row._showDetails = !row._showDetails;
    }
  },
  computed: {
    rows() {
      return this.data.length;
    },
  },
}
</script>

<style src="./EquipManagement.scss" lang="scss" />
