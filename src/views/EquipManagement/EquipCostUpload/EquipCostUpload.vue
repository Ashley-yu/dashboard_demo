<template>
  <div class="import-equip-cost-page">
    <h1 class="page-title">費用匯入</h1>
    <div class="pb-xlg h-100">
      <b-button class="mb-3"
                variant="outline-dark" @click.prevent="$router.go(-1)">
        <i class="fa fa-angle-left mr-1"/>
        回上頁
      </b-button>
      <Widget class="mb-0">
        <form @submit.prevent="uploadFile">
          <b-row>
            <b-col lg="5" md="6">
              <b-form-file
                  v-model="file"
                  ref='files'
                  placeholder="Choose a file or drop it here..."
                  drop-placeholder="Drop file here..."
                  accept=".xlsx, .XLSX"
                  required
              ></b-form-file>
            </b-col>
            <b-col>
              <b-button class="my-1 my-md-0"
                        variant="dark"
                        type="submit"
              >
                上傳
              </b-button>
            </b-col>
          </b-row>
        </form>
        <hr>
        <p class="mb-0">
          1.預設顯示匯入前10筆
          <br>
          2.可重複匯入，每月2 5 10 15 20 25號計算費用，結算於報表中
          <br>
          3.點選匯入，該設備所有費用項目會歸零，並更新匯入項目費用
          <br>
          4.匯入完成，請至[設備管理->設備總覽]下載匯出設定費用，做核對
          <br>
          5.24號以前必須匯入上個月結帳設定費用，當月結帳費用請於25號以後在匯入設定費用
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
            <template #cell(actions)="data">
              <b-button class="mr-1 my-1"
                        variant="default"
              >
                <i class="fa fa-eye mr-1"></i>
                預覽
              </b-button>
              <b-button class="mr-1 my-1"
                        variant="default"
              >
                <i class="fa fa-upload mr-1"/>
                匯入
              </b-button>
              <b-button class="mr-1 my-1"
                        variant="default"
              >
                <i class="fa fa-download mr-1"/>
                下載
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
  name: "EquipCostUpload",
  data() {
    return {
      file: null,
      filter: '',
      perPage: 10,
      currentPage: 1,
      fields: [
        {
          key: 'index',
          label: '#',
          tdClass: 'td-index'
        },
        {
          key: 'uploadDate',
          label: '上傳檔案時間',
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
          uploadDate: "2019-01-21 16:41:50",
        },
      ],
      message: '',
    }
  },
  methods: {
    showNotification() {
      this.$toasted.success(this.message, {
        action: {
          text: 'X',
          onClick: (e, toastObject) => {
            toastObject.goAway(0);
          }
        }
      })
    },
    showErrorNotification() {
      this.$toasted.error(this.message, {
        action: [
          {
            text: 'X',
            onClick: (e, toastObject) => {
              toastObject.goAway(0);
            }
          }
        ]
      });
    },
    uploadFile() {
      this.message = '上傳成功！';
      this.showNotification();
    },
  },
  computed: {
    rows() {
      return this.data.length;
    },
  },
}
</script>

<style src="./EquipCostUpload.scss" lang="scss" />
