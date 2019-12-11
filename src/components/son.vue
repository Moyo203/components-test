<template>
  <div class="son">
      <h2>这里是子级1 -- 儿子</h2>
      <h2>爸爸给我取名为{{myname}}</h2>
      <h2>我的女朋友叫{{mygfname}}</h2>
      <!-- 点击触发事件 -->
      <button @click="tellname">点击告诉爸爸女朋友名字</button>

  </div>
</template>
// 二、子级传递数据给父级
<script>

export default {
// 接收数据
  props: ['myname'],
  data () {
    return {
      mygfname: '小红'
    }
  },
  // 定义事件
  methods: {
    tellname () {
      // 发射事件，并传递参数
      this.$emit('getname', this.mygfname)
    }
  }
}
</script>

<style>
.son{
  background-color: #ff823a;
  color:#696758
}
</style>
