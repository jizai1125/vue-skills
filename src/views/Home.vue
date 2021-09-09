<template>
  <div class="home">
    <!-- 全局组件 -->
    <Base1 />
    <!-- 自定义权限指令 -->
    <PermissionTest />
    <!-- 其他 -->
    <Test />
  </div>
</template>

<script>
// @ is an alias to /src
import PermissionTest from '@/components/permissionTest.vue'
import Test from './test'
export default {
  name: 'Home',
  components: {
    PermissionTest,
    Test
  },
  created() {
    // console.log(this)
  }
}
</script>
