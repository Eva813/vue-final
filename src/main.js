import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faShoppingCart, faUser, faComments, faSearch, faChevronRight, faChevronLeft, faChevronDown, faChevronUp, faMinus, faPlus, faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import VueAgile from 'vue-agile'

const app = createApp(App);
library.add(faUserSecret, faShoppingCart, faUser, faComments, faSearch, faChevronRight, faChevronLeft, faChevronDown, faChevronUp, faMinus, faPlus, faStar);

app.component('font-awesome-icon', FontAwesomeIcon);
app.use(VueAgile)

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
