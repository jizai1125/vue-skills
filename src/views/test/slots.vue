<template>
  <div class="testSlot">
    <!-- testSlot -->
    <Comp></Comp>
  </div>
</template>

<script>
const LayoutComponent = {
  data() {
    return {}
  },
  render(h) {
    console.log('this.$slot>>>', this.$slots)
    const { default: defaultSlot, header, content } = this.$slots
    console.log(defaultSlot, header, content)
    return h('div', [defaultSlot, header, content])
  }
}

const Comp = {
  render(h) {
    return h(LayoutComponent, [
      h('h2', 'default slot'),
      h('h2', { slot: 'header' }, 'header slot'),
      h('h2', { slot: 'content' }, 'content slot')
    ])
  }
}
export default {
  name: 'testSlot',
  components: { Comp },
  data() {
    return {}
  },
  created() {},
  mounted() {
    console.log(this)
  },
  methods: {}
}
</script>

<style lang="less" scoped>
.testSlot {
}
</style>
