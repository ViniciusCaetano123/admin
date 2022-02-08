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

Vue.use(BootstrapVue)
Vue.use(VueRouter)
Vue.use(Vuex)
Vue.config.productionTip = false
const store = new Vuex.Store({
  state: {
    dados:[],
    spiner:false,
    historico:[],
    chaveAcesso:null,
    txtNoti:''
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