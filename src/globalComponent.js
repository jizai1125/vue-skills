import Vue from 'vue'

// require.context 第一个参数不能是变量，webpack在编译阶段无法定位目录
const requireComponent = require.context('./globalComponent', false, /.vue$/)
// console.log('requireComponent.keys():', requireComponent, requireComponent.keys()) // 打印

requireComponent.keys().forEach(filename => {
  const config = requireComponent(filename)
  // console.log('config:',config)  // 打印
  let componentName = filename.match(/\/(.*).vue$/)[1] // ./component.vue => component
  componentName = upperFirstCase(componentName)
  // 如果这个组件选项是通过 `export default` 导出的，
  // 那么就会优先使用 `.default`，
  // 否则回退到使用模块的根。
  // console.log(config)
  Vue.component(componentName, config.default || config) // 注册到全局
})

/**
 * 转成首字母大写
 * @param {*} str
 */
function upperFirstCase(str) {
  if (typeof str !== 'string') {
    str = str.toString()
  }
  return str.charAt(0).toUpperCase() + str.slice(1)
}
