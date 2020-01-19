import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path:'/manage',
      name:'manage',
      component:()=>import ('@/views/manage/Home.vue'),
      children:[
        {
          path: '/',
          name:'welcome',
          component: ()=>import('@/views/manage/Welcome.vue'),
          /*  components:{
              page1:()=>import('./views/Page1.vue'),
              page2:()=>import('./views/Page2.vue')
          } */
        },
        {
          path: '/welcome',
          name:'welcome',
          component: ()=>import('@/views/manage/Welcome.vue')
        },
        {
          path: '/content/:mnuesName',
          name:'content',
          component: ()=>import('@/views/manage/Content.vue'),
          children:[
            {
              path: '/mnuesDemo1',
              name:'mnuesDemo1',
              component: ()=>import('@/views/manage/MnuesDemo1.vue')
            }
          ]
        },
        
      ]
    },
    {
      path: '/error',
      name:'error',
      component: ()=>import('@/components/errors/404.vue'),
    },
		{//其他路径跳转到首页
			path:'*',
			redirect:{name:'error'}
		}
  ]
})
