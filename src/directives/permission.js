import Vue from 'vue'

// 优雅操作 - VUE自定义指令
Vue.directive('permission',{
  inserted(el, binding, vnode, oldVnode){
    // inserted → 元素插入的时候
    
    let permission = binding.value // 获取到 v-permission的值

    if(permission){
      let hasPermission = checkJurisdiction(permission)
      if(!hasPermission){
        // 没有权限 移除Dom元素
        el.parentNode && el.parentNode.removeChild(el)
      }
    }else{
      throw new Error('需要传key')
    }
  }
})

function checkJurisdiction(key) {
  // 权限数组
  let jurisdictionList = ['1', '2', '3', '5']
  let index = jurisdictionList.indexOf(key)
  console.log('index:',index)
  if (index > -1) {
      // 有权限
      return true
  } else {
      // 无权限
      return false
  }
}