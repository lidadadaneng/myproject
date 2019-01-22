import Vue from 'vue'
import Router from 'vue-router'
import zhu from '@/components/zhu'
import companyProfile from '@/components/companyProfile'
import Consulting from '@/components/Consulting'
import equipmentIntroduction from '@/components/equipmentIntroduction'
import importantNotice from '@/components/importantNotice'
import PlansIntroduce from '@/components/PlansIntroduce'
import Details from '@/components/Details'



Vue.use(Router);


export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/zhu/companyProfile'
    },
    {
      path: '/Details/:index',
      name:'/Details',
      component:Details
    },

    {
      path: '/zhu',
      name: 'zhu',
      component: zhu,
      children:[{
        path: '/zhu/companyProfile',
        name: 'companyProfile',
        component: companyProfile
      },
        {
          path: '/zhu/Consulting',
          name: 'Consulting',
          component: Consulting
        },
        {
          path: '/zhu/equipmentIntroduction',
          name: 'equipmentIntroduction',
          component: equipmentIntroduction
        },
        {
          path: '/zhu/importantNotice',
          name: 'importantNotice',
          component: importantNotice
        },{
          path: '/zhu/PlansIntroduce',
          name: 'PlansIntroduce',
          component: PlansIntroduce
        }]
    },


  ]
})
