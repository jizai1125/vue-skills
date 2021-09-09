<template>
  <div class="testPage">
    <!-- 2.x this.$attrs 不包含class -->
    <Attrs @test="test = 1" id="my-id" class="my-class" style="width: 100px" test="fdfd" test1="fdfd" />
    <!--  -->
    <Slots />
  </div>
</template>

<script>
import Attrs from './attrs'
import Slots from './slots'
import mixin from './mixin'
export default {
  name: 'test',
  components: { Attrs, Slots },
  mixins: [mixin],
  data() {
    return {
      test: {
        name: 'test',
        obj: {
          name: 'obj'
        }
      }
    }
  },
  created() {},
  mounted() {
    // console.log(this.$children)
  },
  methods: {}
}
</script>

<style lang="less" scoped>
.testPage {
}
</style>
