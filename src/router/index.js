import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login/Login'
import Home from '@/components/Main/Main'
import Projects from '@/components/Projects/Projects'
import Configure from '@/components/Configure/Configure'
import Environment from '@/components/Environment/Environment'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },

    {
      path: "/", component: Home,
      children: [
        { path: "/", component: Projects },
      ]
    },

    {
      path: "/Home", component: Home,  
      children: [
          { path: "/Projects", component: Projects },
          { path: "/Configure", component: Configure },
          { path: "/Environment", component: Environment }
      ],
    }
  ]
})