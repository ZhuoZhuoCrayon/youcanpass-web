import Vue from 'vue'
import Router from 'vue-router'
import HomePage from "@/view/HomePage";
import ReviewsPage from "@/view/ReviewsPage";
import CostPage from "@/view/CostPage";
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
  ]
})
