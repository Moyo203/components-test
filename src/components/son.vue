<template>
  <div class="son">
      <h2>这里是子级</h2>
      <h2>爸爸给我取名为{{myname}}</h2>
  </div>
</template>

<script>

export default {
// 接收数据
  props: ['myname']
}
</script>

<style>

</style>
