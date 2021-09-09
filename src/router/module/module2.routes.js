export default {
  path:'/module2',
  name:'module2',
  component: () => import('../../components/module2.vue'),  // 懒加载式引入，当跳转到时才进行引入chunk
  // children: [...]
}