<template>
  <div class="sidebar-wrapper">
    <nav
        :class="{sidebar: true, sidebarStatic, sidebarOpened}"
        @mouseenter="sidebarMouseEnter"
        @mouseleave="sidebarMouseLeave"
    >
      <header class="logo">
        <router-link to="/app">
          <i class="fa fa-camera"></i><span class="primary-word">業績管理平台</span>
        </router-link>
      </header>
      <ul class="nav">
        <NavLink
            :activeItem="activeItem"
            header="營運分析"
            link="/dashboard"
            iconName="flaticon-search"
            index="dashboard"
            :childrenLinks="[
              { header: '結帳日總覽', link: '/dashboard/day' },
              { header: '每日總覽', link: '/dashboard/month' },
              { header: '每月總覽', link: '/dashboard/year' },
              { header: '年度總覽', link: '/dashboard/annual' },
              { header: '每月報表', link: '/dashboard/monthlyReport' },
            ]"
        />
        <NavLink
            :activeItem="activeItem"
            header="人員管理"
            link="/admin"
            iconName="flaticon-user"
            index="admin"
            :childrenLinks="[
              { header: '後台管理者', link: '/admin' },
            ]"
        />
        <NavLink
            :activeItem="activeItem"
            header="設備管理"
            link="/backend"
            iconName="flaticon-server-1"
            index="backend"
            :childrenLinks="[
              { header: '設備總覽', link: '/backend/equip' },
              { header: '費用類型', link: '/backend/costType' },
              { header: '網路回應檢查', link: '/backend/network' },
              { header: '底片剩餘數量', link: '/backend/remaining' },
              { header: '回傳錯誤代碼', link: '/backend/errors' },
            ]"
        />
        <NavLink
            :activeItem="activeItem"
            header="報表管理"
            link="/report"
            iconName="flaticon-list-1"
            index="report"
            :childrenLinks="[
              { header: '報表回傳狀態', link: '/report/overview' },
              { header: '今日回傳報表', link: '/report/examine' },
            ]"
        />
        <NavLink
            :activeItem="activeItem"
            header="收入來源"
            link="/source"
            iconName="flaticon-id-card-5"
            index="source"
            :childrenLinks="[
              { header: '現金', link: '/report/cash' },
              { header: '悠遊卡', link: '/report/easy_card' },
              { header: '一卡通', link: '/report/ipass' },
              { header: '國泰-信用卡', link: '/report/cathy_credit_card' },
              { header: '國泰-悠遊卡', link: '/report/cathy_easy_card' },
              { header: 'LinePay', link: '/report/line_pay' },
            ]"
        />
        <NavLink
            :activeItem="activeItem"
            header="發票查詢"
            link="/invoices"
            iconName="flaticon-record"
            index="invoices"
            :childrenLinks="[
              { header: '每日發票', link: '/invoices' },
            ]"
        />
        <NavLink
            :activeItem="activeItem"
            header="收入來源總計"
            link="/payments"
            iconName="flaticon-folder-1"
            index="payments"
            :childrenLinks="[
              { header: '金額每日筆數', link: '/payments/price' },
              { header: '設備每日筆數', link: '/payments/equip' },
              { header: '日累積筆數', link: '/payments/day' },
              { header: '月累積筆數', link: '/payments/month' },
              { header: '年累積筆數', link: '/payments/year' },
            ]"
        />
        <NavLink
            :activeItem="activeItem"
            header="收支資訊統計"
            link="/incomes"
            iconName="flaticon-list"
            index="incomes"
            :childrenLinks="[
              { header: '設備每日收入', link: '/incomes/equip' },
              { header: '日累積收入', link: '/incomes/day' },
              { header: '月累積收入', link: '/incomes/month' },
              { header: '年累積收入', link: '/incomes/year' },
            ]"
        />
        <NavLink
            :activeItem="activeItem"
            header="照片規格統計"
            link="/photo"
            iconName="flaticon-albums"
            index="photo"
            :childrenLinks="[
              { header: '設備每日筆數', link: '/photo/equip' },
              { header: '日累積筆數', link: '/photo/day' },
              { header: '月累積筆數', link: '/photo/month' },
              { header: '年累積筆數', link: '/photo/year' },
            ]"
        />
        <NavLink
            :activeItem="activeItem"
            header="照片類型統計"
            link="/photoType"
            iconName="flaticon-picture"
            index="photoType"
            :childrenLinks="[
              { header: '設備每日筆數', link: '/photoType/equip' },
              { header: '日累積筆數', link: '/photoType/day' },
              { header: '月累積筆數', link: '/photoType/month' },
              { header: '年累積筆數', link: '/photoType/year' },
            ]"
        />
      </ul>
    </nav>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import isScreen from '@/core/screenHelper';
import NavLink from './NavLink/NavLink';

export default {
  name: 'Sidebar',
  components: { NavLink },
  methods: {
    ...mapActions('layout', ['changeSidebarActive', 'switchSidebar']),
    setActiveByRoute() {
      const paths = this.$route.fullPath.split('/');
      paths.pop();
      this.changeSidebarActive(paths.join('/'));
    },
    sidebarMouseEnter() {
      if (!this.sidebarStatic && (isScreen('lg') || isScreen('xl'))) {
        this.switchSidebar(false);
        this.setActiveByRoute();
      }
    },
    sidebarMouseLeave() {
      if (!this.sidebarStatic && (isScreen('lg') || isScreen('xl'))) {
        this.switchSidebar(true);
        this.changeSidebarActive(null);
      }
    },
  },
  created() {
    this.setActiveByRoute();
  },
  computed: {
    ...mapState('layout', {
      sidebarStatic: state => state.sidebarStatic,
      sidebarOpened: state => !state.sidebarClose,
      activeItem: state => state.sidebarActiveElement,
    }),
  },
};
</script>

<!-- Sidebar styles should be scoped -->
<style src="./Sidebar.scss" lang="scss" scoped/>
