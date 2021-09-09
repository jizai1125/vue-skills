import router from './router'
import store from './store'
import axios from 'axios'

// 切换路由时，取消所有未响应的请求 
router.beforeEach((to, from, next) => {
  
  const axiosCancelSource = store.getters.axiosCancelSource
  // 1. 进入新路由时，先执行cancel，取消上个路由所有未响应的请求
  axiosCancelSource && axiosCancelSource.cancel()
  // 2. 更新 source, 从而更新 axios request 配置的 cancelToken
  const CancelToken = axios.CancelToken;
  const source = CancelToken.source();
  store.commit('SET_AXIOS_CANCEL_SOURCE', source)
  next()
})