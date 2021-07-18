import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faShoppingCart, faUser, faComments, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
const app = createApp(App);
library.add(faUserSecret, faShoppingCart, faUser, faComments, faSearch);



app.component('font-awesome-icon', FontAwesomeIcon);


app.use(store);
app.use(router);
app.mount('#app');
