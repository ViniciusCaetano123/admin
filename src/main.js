import Vue from 'vue'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import App from './App'
import Vuex from 'vuex'
import {routes} from './components/services/rotas.js'
import { BootstrapVue } from 'bootstrap-vue'
import VueRouter  from 'vue-router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VModal from 'vue-js-modal'
import BtnLoader from './components/BtnLoader.vue'
Vue.component('BtnLoader', BtnLoader)
Vue.use(BootstrapVue)
Vue.use(VModal,{ dialog: false })
Vue.use(VueRouter)
Vue.use(Vuex)
Vue.config.productionTip = false
const store = new Vuex.Store({
  state: {
    dados:[],
    spiner:false,
    historico:[],
    chaveAcesso:null,
    txtNoti:'',
    notificacoes:[]
  },  
})
const router=  new VueRouter({
	routes,
    mode: "history",
});
new Vue({
  router,
  store,
  render: h => h(App), 
}).$mount('#admin')