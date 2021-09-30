import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faShoppingCart, faUser, faComments, faSearch, faChevronRight, faChevronLeft, faChevronDown, faChevronUp, faMinus, faPlus, faStar, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueAgile from 'vue-agile'
import mitt from 'mitt';
// 匯入 vee-validate 主套件
import {
  Field, Form, ErrorMessage, defineRule, configure,
} from 'vee-validate';

// 匯入 vee-validate 相關規則

import { required, email, min } from '@vee-validate/rules';

// 匯入多國語系的功能

import { localize, setLocale } from '@vee-validate/i18n';
// 匯入繁體中文語系檔案

import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json';


const emitter = mitt();
const app = createApp(App);
//FontAwesomeIcon
library.add(faUserSecret, faShoppingCart, faUser, faComments, faSearch, faChevronRight, faChevronLeft, faChevronDown, faChevronUp, faMinus, faPlus, faStar, faTrashAlt);

// 定義驗證規則
defineRule('required', required);
defineRule('email', email);
defineRule('min', min);
// 設定 vee-validate 全域規則
configure({
  generateMessage: localize({ zh_TW: zhTW }), // 載入繁體中文語系
  validateOnInput: true, // 當輸入任何內容直接進行驗證
});

// 設定預設語系
setLocale('zh_TW');

//emitter(eventbus)
app.config.globalProperties.emitter = emitter;
app.component('font-awesome-icon', FontAwesomeIcon);
// 註冊 vee-validate 三個全域元件
app.component('Form', Form);
app.component('Field', Field);
app.component('ErrorMessage', ErrorMessage);

app.use(VueAgile);
app.use(store);
app.use(router);
app.mount('#app');



// import VueAwesomeSwiper from 'vue-awesome-swiper'
// import swiper, { Navigation, Pagination, Autoplay } from 'swiper'
// //上面這行官方文件沒寫到。
// // import style (>= Swiper 6.x)
// // import style (<= Swiper 5.x)
// import 'swiper/dist/css/swiper.css'
//
//
// app.use(VueAwesomeSwiper, /* { default options with global component } */)
// swiper.use([Navigation, Pagination, Autoplay])
//上面這行官方文件也沒寫到
