import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "../views/Home.vue";

Vue.use(VueRouter)

/**
 * 该函数用于将所有分区路由中的路由添加到路由数组
 * @param {*} routerArr 
 * @return [{},..]
 */
function importAll(routerArr) {
  // console.log(routerArr, routerArr.keys())
  const res = routerArr.keys().reduce((module, modulePath) => {
    // console.log(module, modulePath)
    module.push(routerArr(modulePath).default)
    return module
  }, [])
  return res
}

const routerList = importAll(require.context('./module', true, /\.routes\.js/))

const routes = [
  ...routerList,
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path:'*',
    name: 'not-found',
    component: () => import('@/views/notFound.vue')
  }
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue")
  // }
]

const router = new VueRouter({
  routes
})

export default router
