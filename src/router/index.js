import Vue from 'vue'
import Router from 'vue-router'
import pageIndex from '@/components/pageIndex'
import pageIntro from '@/components/pageIntro'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'pageIndex',
      component: pageIndex
    },
    {
      path: '/intro',
      name: 'pageIntro',
      component: pageIntro
    }
  ]
})
