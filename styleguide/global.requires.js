import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';

import "../src/assets/styles/app.scss";
import "../src/assets/styles/theme.scss";
import "../src/components/Sidebar/NavLink/NavLink.scss";

Vue.use(BootstrapVue);

Vue.component('RouterLink', {
    props: {
        tag: { type: String, default: 'a' }
    },
    render(createElement) {
        return createElement(this.tag, {}, this.$slots.default)
    }
});
