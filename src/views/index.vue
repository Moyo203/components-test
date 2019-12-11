<template>
  <div class="index">
      <h1>这里是navbar的父级index</h1>
      <navbar>
          <span slot="aa">哈哈哈</span><br>
          <span slot="cc">嘻嘻嘻</span><br>
          <span slot="bb">呵呵呵</span><br>

      </navbar>
  </div>
</template>

<script>
import navbar from '@/components/navbar.vue'
export default {

  // zc
  components: {
    navbar
  }

}
</script>

<style>

</style>
