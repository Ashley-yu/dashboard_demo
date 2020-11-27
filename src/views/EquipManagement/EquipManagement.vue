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
<!--              <b-button class="mr-1"-->
<!--                        variant="danger"-->
<!--                        @click="deleteItem(data.item.id)"-->
<!--              >-->
<!--                Delete-->
<!--              </b-button>-->
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
          createDate: "2020-01-10 09:38:08",
        },
        {
          id: 2,
          equipId: "ABC184",
          status: true,
          equipName: "songshan huzheng",
          createDate: "2020-01-09 01:03:45",
        },
        {
          id: 3,
          equipId: "ABC025",
          status: true,
          equipName: "zhonghe fuxing",
          createDate: "2020-01-07 01:00:24",
        },
        {
          id: 4,
          equipId: "ABC426",
          status: true,
          equipName: "hong shulin",
          createDate: "2020-01-04 01:06:55",
        },
        {
          id: 5,
          equipId: "ABC145",
          status: true,
          equipName: "trade building",
          createDate: "2020-01-04 01:02:42",
        },
        {
          id: 6,
          equipId: "ABC020",
          status: true,
          equipName: "yingge huzheng",
          createDate: "2020-01-04 01:00:11",
        },
        {
          id: 7,
          equipId: "ABC305",
          status: true,
          equipName: "taidian dalou",
          createDate: "2020-01-03 01:04:48",
        },
        {
          id: 8,
          equipId: "ABC176",
          status: true,
          equipName: "guting yushan",
          createDate: "2020-01-03 01:02:41",
        },
        {
          id: 9,
          equipId: "ABC461",
          status: false,
          equipName: "datong baoya",
          createDate: "2019-12-31 01:07:05",
        },
        {
          id: 10,
          equipId: "ABC344",
          status: false,
          equipName: "dongming baoya",
          createDate: "2019-12-31 01:05:39",
        },
        {
          id: 11,
          equipId: "ABC071",
          status: false,
          equipName: "xinghou family",
          createDate: "2019-12-31 01:01:14",
        },
        {
          id: 12,
          equipId: "ABC168",
          status: false,
          equipName: "gong guag",
          createDate: "\t2019-12-28 01:02:32",
        },
      ],
    };
  },
  methods: {
    deleteItem(id) {
      const index = this.data.map(item => item.id).indexOf(id);
      this.data.splice(index, 1);
    },
  },
  computed: {
    rows() {
      return this.data.length;
    },
  },
}
</script>

<style src="./EquipManagement.scss" lang="scss" />
