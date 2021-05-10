<template>
  <li v-if="!childrenLinks && isHeader" :class="{headerLink: true, className}">
    <router-link :to="link" class="sidebar-link">
      <span class="icon">
        <i :class="fullIconName"></i>
      </span>
      {{header}} <sup v-if="label" :class="'text-' + labelColor" class="headerLabel">{{label}}</sup>
      <b-badge v-if="badge" variant="primary" pill>{{badge}}</b-badge>
    </router-link>
  </li>
  <li v-else-if="childrenLinks" :class="{headerLink: true, className}">
    <div @click="() => togglePanelCollapse(link)">
      <router-link :to="link" event="" class="d-flex sidebar-link">
        <span class="icon">
          <i :class="fullIconName"></i>
        </span>
        {{header}} <sup v-if="label" :class="'text-' + labelColor" class="ml-1 headerLabel">{{label}}</sup>
        <div :class="{caretWrapper: true, carretActive: isActive}">
          <i class="fa fa-angle-left" />
        </div>
      </router-link>
    </div>
    <b-collapse :id="'collapse' + index" :visible="isActive">
      <ul class="sub-menu">
        <NavLink v-for="link in childrenLinks"
                 :activeItem="activeItem"
                 :header="link.header"
                 :index="link.index"
                 :link="link.link"
                 :childrenLinks="link.childrenLinks"
                 :key="link.link"
        />
      </ul>
    </b-collapse>
  </li>
  <li v-else>
    <router-link :to="index !== 'menu' && link">
      {{header}} <sup v-if="label" :class="'text-' + labelColor" class="headerLabel">{{label}}</sup>
    </router-link>
  </li>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'NavLink',
  props: {
    /**
     * 設定要顯示於右方的 badge 文字
     */
    badge: { type: String, dafault: '' },
    /**
     * 設定要顯示的連結文字
     */
    header: { type: String, default: '' },
    /**
     * 設定要顯示的 icon class 名稱
     */
    iconName: { type: String, default: '' },
    /**
     * 未使用
     */
    headerLink: { type: String, default: '' },
    /**
     * 設定要前往的 router-link 連結
     */
    link: { type: String, default: '' },
    /**
     * 設定多個子選單的名稱及連結
     */
    childrenLinks: { type: Array, default: null },
    /**
     * 設定 li 的客製化 class 名稱
     */
    className: { type: String, default: '' },
    /**
     * 設定是否要有選單標題樣式, 未設置子選單時(childrenLinks)才能使用
     */
    isHeader: { type: Boolean, default: false },
    /**
     * 未使用
     */
    deep: { type: Number, default: 0 },
    /**
     * 用來判斷哪個項目要設置為 active 樣式
     */
    activeItem: { type: String, default: '' },
    /**
     * 設定連結標題右上方標註文字
     */
    label: { type: String },
    /**
     * 設定標註文字顏色
     * @values primary, secondary, success, info, warning, danger,
     * dark, inverse, gray, light, default,
     * primary-light, success-light, info-light, warning-light, danger-light
     */
    labelColor: { type: String, default: 'warning' },
    /**
     * 為每個連結設定唯一的識別文字, 作為判斷 active 時使用
     */
    index: { type: String },
  },
  data() {
    return {
      headerLinkWasClicked: true,
    };
  },
  methods: {
    ...mapActions('layout', ['changeSidebarActive']),
    togglePanelCollapse(link) {
      this.changeSidebarActive(link);
      this.headerLinkWasClicked = !this.headerLinkWasClicked
          || !this.activeItem.includes(this.index);
    },
  },
  computed: {
    fullIconName() {
      return `fi ${this.iconName}`;
    },
    isActive() {
      return (this.activeItem
          && this.activeItem.includes(this.index)
          && this.headerLinkWasClicked);
    },
  },
};
</script>

<style src="./NavLink.scss" lang="scss" scoped />
