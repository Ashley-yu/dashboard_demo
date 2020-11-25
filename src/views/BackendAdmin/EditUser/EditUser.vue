<template>
  <div class="edit-page">
    <h1 class="page-title">新增後台管理者</h1>
    <div class="pb-xlg h-100">
      <Widget class="mb-0">
        <b-alert class="alert-sm text-center" variant="danger" :show="!!errorMessage">
          {{errorMessage}}
        </b-alert>
        <div class="d-flex flex-column align-items-center">
          <form @submit.prevent="saveData">
            <h5 class="d-flex align-items-center pb-1 mt-3">
              <span class='circle bg-primary mr-sm' style='font-size: 6px'></span>
              <span class='fw-normal ml-xs'>基本資料</span>
            </h5>
            <hr>
            <div class="form-group row">
              <label for="name" class="col-lg-3 col-form-label">帳號</label>
              <div class="col-lg-9">
                <input type="text"
                       class="form-control no-border"
                       id="name"
                       placeholder="請輸入帳號"
                       required
                       autocomplete="off"
                       v-model="item.name"
                       :disabled="editItemId"
                >
              </div>
            </div>
            <div class="form-group row">
              <label for="email" class="col-lg-3 col-form-label">電子信箱</label>
              <div class="col-lg-9">
                <input type="email"
                       class="form-control no-border"
                       id="email"
                       placeholder="請輸入電子信箱"
                       required
                       autocomplete="off"
                       v-model="item.email"
                >
              </div>
            </div>
            <h5 class="d-flex align-items-center pb-1 mt-5">
              <span class='circle bg-danger mr-sm' style='font-size: 6px'></span>
              <span class='fw-normal ml-xs'>設定密碼</span>
            </h5>
            <hr>
            <div class="form-group row">
              <label for="password" class="col-lg-3 col-form-label">新密碼</label>
              <div class="col-lg-9">
                <input type="password"
                       class="form-control no-border"
                       id="password"
                       placeholder="請輸入密碼"
                       required
                       autocomplete="off"
                       v-model="item.password"
                >
              </div>
            </div>
            <div class="form-group row">
              <label for="confirmPassword" class="col-lg-3 col-form-label">重新輸入新密碼</label>
              <div class="col-lg-9">
                <input type="password"
                       class="form-control no-border"
                       id="confirmPassword"
                       placeholder="請重新輸入新密碼"
                       required
                       autocomplete="off"
                       v-model="item.confirmPassword"
                >
              </div>
            </div>
            <div class="text-right mt-5">
              <b-button variant="default" @click.prevent="$router.go(-1)">
                取消
              </b-button>
              <b-button class="ml-3" variant="info" type="submit">
                儲存
              </b-button>
            </div>
          </form>
        </div>
      </Widget>
    </div>
  </div>
</template>

<script>
import {createNamespacedHelpers} from "vuex";
const { mapState, mapActions } = createNamespacedHelpers('backend');

export default {
  name: "EditUser",
  data() {
    return {
      errorMessage: null,
      editItemId: '',
    };
  },
  methods: {
    ...mapActions(['updateUserData', 'addUserData',]),
    toPage(path) {
      this.$router.push(path);
    },
    checkField() {
      this.errorMessage = '';
      if (this.item.password !== this.item.confirmPassword) {
        this.errorMessage = '密碼輸入不一致, 請重新輸入!!';
        return false;
      }
      return true;
    },
    saveData() {
      if (!this.checkField()) {
        return;
      }

      if (this.editItemId) {
        this.updateUserData(this.item);
        this.toPage('/dashboard/admin');
      } else {
        this.addUserData(this.item);
        this.toPage('/dashboard/admin');
      }
    },
  },
  computed: {
    ...mapState(["userData"]),
    item() {
      if (this.editItemId) {
        let tempData = this.userData[this.editItemId-1];
        tempData.password = '';
        tempData.confirmPassword = '';
        return tempData;
      }
      return {};
    },
  },
  created() {
    this.editItemId = this.$route.params.id;
  }
}
</script>

<style src="./EditUser.scss" lang="scss" scoped/>
