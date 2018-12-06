import Vue from 'vue'
import Router from 'vue-router'
import Cartoon from './views/cartoon.vue'
import Home from './views/Home.vue'
import Login from './views/login.vue'
import Register from './views/register.vue'
import Sound from './views/sound.vue'
import test from './views/test.vue'
import radio from './views/radioDrama.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {path:"/",component:Home},
    {path:"/home",component:Home},
    {path:"/cartoon",component:Cartoon},
    {path:"/login",component:Login},
    {path:"/register",component:Register},
    {path:"/sound",component:Sound},
    {path:"/radio",component:radio},
    {path:"/test",component:test}
  ]
})
