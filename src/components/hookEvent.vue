<template>
  <div>
    hook event
  </div>
</template>

<script>
export default {
  name: 'hookEvent',
  mounted() {
    // 监听 resize 事件
    window.addEventListener('resize', this._handleResize)

    // 利用 hookEvent 解绑事件，这样解绑操作跟绑定操作写在一起，提高了代码可读性
    this.$once('hook:beforeDestroy', () => {
      window.removeEventListener('resize', this._handleResize)
    })
  },
  methods: {
    _handleResize() {
      console.log('handle resize!!!!!')
    }
  }
}
</script>

<style></style>
