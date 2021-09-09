export default {
  path:'/module1',
  name:'module1',
  component: () => import('../../components/module1.vue'),  // 懒加载式引入，当跳转到时才进行引入chunk
  // children: [...]
}