<template>
  <div class="sister">
      <h2>这里是子级1--女儿</h2>
      <button @click="callname">点击告诉我弟弟我偶像是谁</button>
  </div>
</template>

<script>
// 导入总线
import eventbus from '@/utils/myeventbus.js'
export default {
  data () {
    return {
      ouname: '胡歌'
    }
  },
  methods: {
    callname () {
      eventbus.$emit('getname', this.ouname)
    }
  }
}
</script>

<style>
.sister{
    background-color: #f2f26f;
}
</style>
