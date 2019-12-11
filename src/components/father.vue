<template>
  <div class="father">
      <h1>这里是父级</h1>
      <!-- 3、动态绑定，这里的myname是和子级的命名一致 -->
      <son :myname='sonname'></son>
  </div>
</template>
//一、父级传递数给子级，爸爸给儿子取名为小明
<script>
// 1、这里先引进子级
import son from '@/components/son.vue'
export default {
  data () {
    return {
      sonname: '小明'
    }
  },
  // 2、注意要注册
  components: {
    son
  }
}
</script>

<style>

</style>
