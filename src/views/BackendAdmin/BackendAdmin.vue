<template>
  <div class="admin-page">
    <h1 class="page-title">後台管理者</h1>
    <div class="pb-xlg h-100">
      <Widget class="mb-0">
        <b-row class="mb-3" align-h="between">
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
          <b-col class="text-sm-right mt-1 mt-sm-0" sm="3">
            <b-button class="" variant="primary" @click.prevent="toEditPage(true)">
              <i class="fa fa-plus mr-1"/>
              新增
            </b-button>
          </b-col>
        </b-row>
        <div class="table-responsive">
          <b-table
              class="table-lg mb-0 requests-table"
              striped
              hover
              :filter="filter"
              :fields="fields"
              :items="userData"
              :per-page="perPage"
              :current-page="currentPage"
          >
            <template #cell(index)="data">
              {{ data.index + 1 }}
            </template>
            <template #cell(status)="data">
              <i :class="`fa fa-circle text-${data.item.status ? 'success' : 'danger'}`" />
            </template>
            <template v-slot:cell(actions)="data">
              <b-button-group>
                <b-button variant="warning" @click.prevent="toEditPage(false, data.item.id)">
                  <i class="fa fa-pencil"/>
                </b-button>
                <b-button variant="danger"
                          @click.prevent="confirmDisable(data.item.id, true)"
                          v-if="data.item.status"
                >
                  <i class="fa fa-minus-circle"/>
                </b-button>
                <b-button variant="success"
                          @click.prevent="confirmDisable(data.item.id, false)"
                          v-else
                >
                  <i class="fa fa-check-circle"/>
                </b-button>
              </b-button-group>
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
    <b-modal id="modal-disable"
             centered
             hide-header
             hide-footer
             size="sm"
    >
      <div class="d-block text-center">
        <i class="modal-icon fa fa-exclamation-circle text-warning mb-3"/>
        <h3 class="mb-5" v-if="isDisable">確認停用嗎?</h3>
        <h3 class="mb-5" v-else>確認啟用嗎?</h3>
      </div>
      <div class="text-center">
        <b-button variant="default" @click.prevent="hideModal('modal-disable')">取消</b-button>
        <b-button class="ml-3"
                  variant="info"
                  @click.prevent="updateStatus()"
                  v-if="isDisable"
        >
          停用
        </b-button>
        <b-button class="ml-3"
                  variant="info"
                  @click.prevent="updateStatus()"
                  v-else
        >
          啟用
        </b-button>
      </div>
    </b-modal>
  </div>
</template>

<script>
import {createNamespacedHelpers} from "vuex";
const { mapState, mapActions } = createNamespacedHelpers('backend');

export default {
  name: "BackendAdmin",
  data() {
    return {
      filter: '',
      fields: [
        {
          key: 'index',
          label: '#',
        },
        {
          key: 'name',
          label: '帳號',
          sortable: true,
        },
        {
          key: 'email',
          label: '電子郵件',
        },
        {
          key: 'status',
          label: '狀態',
          sortable: true,
        },
        {
          key: 'create',
          label: '建立日期',
          sortable: true,
        },
        {
          key: 'update',
          label: '更新日期',
          sortable: true,
        },
        {
          key: 'actions',
          label: '動作',
        },
      ],
      transProps: {
        name: 'flip-list'
      },
      currentPage: 1,
      perPage: 10,
      updateId: '',
      isDisable: '',
    }
  },
  methods: {
    ...mapActions(['disableUserData',]),
    showModal(modal) {
      this.$bvModal.show(modal);
    },
    hideModal(modal) {
      this.$bvModal.hide(modal);
    },
    toPage(path) {
      this.$router.push(path);
    },
    toEditPage(isNew, itemId) {
      if (!isNew) {
        this.toPage(`admin/create/${itemId}`);
      } else {
        this.toPage('admin/create');
      }
    },
    confirmDisable(itemId, status) {
      this.isDisable = status;
      this.showModal('modal-disable');
      this.updateId = itemId;
    },
    updateStatus() {
      this.disableUserData(this.updateId);
      this.hideModal('modal-disable');
    },
  },
  computed: {
    ...mapState(["userData"]),
    rows() {
      return this.userData.length;
    },
  },
}
</script>

<style src="./BackendAdmin.scss" lang="scss" />
