import Vue from 'vue'
import Router from 'vue-router'
import Projects from '@/components/Projects/Projects'
import Configure from '@/components/Configure/Configure'
import Environment from '@/components/Environment/Environment'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Projects',
      component: Projects
    },
    {
      path: '/Projects',
      name: 'Projects',
      component: Projects
    },
    {
      path: '/Configure',
      name: 'Configure',
      component: Configure
    },
    {
      path: '/Environment',
      name: 'Environment',
      component: Environment
    }
  ]
})
