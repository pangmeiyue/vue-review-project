import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login/Login'
import Home from '@/components/Main/Main'
import Projects from '@/components/Projects/Projects'
import ECSite from '@/components/Projects/ECSite/ECSite'
import Task from '@/components/Projects/ECSite/Task'
import AssetPlatform from '@/components/Projects/ECSite/AssetPlatform'

import Configure from '@/components/Configure/Configure'
import Environment from '@/components/Environment/Environment'
import Code from '@/components/Environment/children/Code/Code'
import Compile from '@/components/Environment/children/Compile/Compile'
import Compliance from '@/components/Environment/children/Compliance/Compliance'
import Test from "@/components/Environment/children/Test/Test"


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Login,
    },

    // {
    //   path: "/", component: Home,
    //   // children: [
    //   //   { path: "/", component: Projects },
    //   // ]
    // },

    {
      path: "/home", component: Home,  
      children: [
          { path: "/Projects", component: Projects},
          { path: "/Projects/EC", component: ECSite},
          { path: "/Projects/Task", component: Task},
          { path: "/Projects/AssetPlatform", component: AssetPlatform},
          { path: "/Configure", component: Configure },
          { 
            path: "/Environment",
            component: Environment,
            
          },
          { path: "/Code", component: Code },
          { path: "/Compile", component: Compile },
          { path: "/Compliance", component: Compliance },
          { path: "/Test", component: Test }
      ],
    }
  ]
})