<template>
  <div class="admin-page">
    <h1 class="page-title">後台管理者</h1>
    <div class="pb-xlg h-100">
      <Widget class="mb-0">
        <div class="d-flex justify-content-between align-items-center mb-3">
          <b-form>
            <b-form-group>
              <b-input-group class="input-group-no-border">
                <template v-slot:prepend>
                  <b-input-group-text><i class="la la-search"/></b-input-group-text>
                </template>
                <b-form-input
                    id="search-input"
                    placeholder="Search"
                    v-model="searchQuery"
                    autocomplete="off"
                />
              </b-input-group>
            </b-form-group>
          </b-form>
          <b-button variant="success" @click.prevent="toEditPage(true)">
            <i class="fa fa-plus"/>
          </b-button>
        </div>
        <div class="table-responsive">
          <table class="table table-striped table-lg mb-0 requests-table">
            <thead>
            <tr class="text-muted">
              <th>#</th>
              <th>帳號</th>
              <th>電子郵件</th>
              <th>狀態</th>
              <th>建立日期</th>
              <th>更新日期</th>
              <th>動作</th>
            </tr>
            </thead>
            <tbody>
            <tr
                v-for="row in filterData"
                :key="row.id"
            >
              <td>{{row.id}}</td>
              <td>{{row.name}}</td>
              <td>{{row.email}}</td>
              <td class="text-left">
                <i :class="`fa fa-circle text-${row.status ? 'success' : 'danger'}`" />
              </td>
              <td>{{row.create}}</td>
              <td>{{row.update}}</td>
              <td>
                <b-button-group>
                  <b-button variant="warning" @click.prevent="toEditPage(false, row.id)">
                    <i class="fa fa-pencil"/>
                  </b-button>
                  <b-button variant="danger" @click.prevent="confirmDisable(row.id)">
                    <i class="fa fa-minus-circle"/>
                  </b-button>
                </b-button-group>
              </td>
            </tr>
            </tbody>
          </table>

        </div>
        <b-pagination
            v-model="currentPage"
            :total-rows="rows"
            :per-page="perPage"
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
        <h3 class="mb-5">確認停用嗎?</h3>
      </div>
      <div class="text-center">
        <b-button variant="default" @click.prevent="hideModal('modal-disable')">取消</b-button>
        <b-button class="ml-3" variant="info" @click.prevent="updateStatus()">停用</b-button>
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
      searchQuery: '',
      currentPage: 1,
      perPage: 1,
      rows: 1,
      updateId: '',
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
    confirmDisable(itemId) {
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
    filterData() {
      if (this.searchQuery) {
        return this.userData.filter( item => {
          return Object.keys(item).some(key => {
            return String(item[key]).toLowerCase().indexOf(this.searchQuery) > -1;
          })
        })
      }
      return this.userData;
    },
  },
}
</script>

<style src="./BackendAdmin.scss" lang="scss" />
