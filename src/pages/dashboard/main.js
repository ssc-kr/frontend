import Vue from 'vue';
import App from './App.vue';
import router from '../../router';
import store from '../../store';
import i18n from '../../i18n';
import VueCookie from 'vue-cookie';
// import jwtDecode from 'jwt-decode';
// import ResColor from '../../plugins/ResColor';
// import res_color from '../../resource/color';

Vue.config.productionTip = false
Vue.use(VueCookie);
// Vue.use(ResColor, res_color);

/**
 * vue의 진입점
 */
let vue = new Vue({
    router,
    store,
    i18n,
    render: function(h) {
        return h(App);
    },
}).$mount('#app');

export default vue;