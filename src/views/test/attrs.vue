<template>
  <div>
    <h4>attrs</h4>
    <div v-if="condition" key="a" class="yes">Yes</div>
    <div key="a" class="no" v-else>No</div>
    <ul>
      <li v-for="(item, index) in list" :class="item.name">
        {{ item.id }}
        <input type="text" :placeholder="item.name" />
        <button v-on:click="deleteLi(index)">删除</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'attrs',
  // inheritAttrs: false,
  props: ['test'],
  data() {
    return {
      condition: false,
      list: [
        { name: 'hello', id: 1 },
        { name: 'world', id: 2 }
      ]
    }
  },
  created() {
    console.log(this, this.$attrs)
  },
  mounted() {},
  methods: {
    deleteLi(index) {
      this.list.splice(index, 1)
    }
  }
}
</script>

<style lang="less" scoped>
.attrs {
}
</style>
