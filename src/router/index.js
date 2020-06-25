import Vue from 'vue'
import Router from 'vue-router'
import HomePage from "@/view/HomePage";
import ReviewsPage from "@/view/ReviewsPage";
import CostPage from "@/view/CostPage";
import Guides from "@/view/Guides";
import BikeUser from "@/view/BikeUser";
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '',
      redirect: '/home',
    },
    {
      path: '/home',
      name: 'Homepage',
      component: HomePage
    },
    {
      path: '/reviews',
      name: 'ReviewsPage',
      component: ReviewsPage
    },
    {
      path: '/cost',
      name: 'costPage',
      component: CostPage
    },
    {
      path: '/guides',
      name: 'guides',
      component: Guides
    },
    {
      path: '/user/:id',
      name: 'user',
      component: BikeUser,
      props: true
    }
  ]
})
