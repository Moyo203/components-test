<template>
  <div class="father">
      <h1>这里是父级</h1>
      <h2>儿子告诉我他女朋友叫{{songfname}}</h2>
      <!-- 3、动态绑定，这里的myname是和子级的命名一致 -->
      <!-- 重点@getname='dname'事件监听 -->
      <son :myname='sonname' @getname='dname'></son>
      <sister></sister>

  </div>
</template>
//一、父级传递数给子级，爸爸给儿子取名为小明
<script>
// 1、这里先引进子级
import son from '@/components/son.vue'
import sister from '@/components/sister.vue'
export default {
  data () {
    return {
      sonname: '小明',
      songfname: '??'
    }
  },
  // 2、注意要注册
  components: {
    son,
    sister
  },
  methods: {
    dname (data) {
      this.songfname = data
    }
  }
}
</script>

<style>
.father{
background-color: #95cfb7;
height: 500px;
}
</style>
