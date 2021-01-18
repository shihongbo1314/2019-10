<template>
  <el-container>
    <my-aside :ary='ary'></my-aside>
    <el-main class="my-main">
      <router-view ></router-view>
    </el-main>
  </el-container>
</template>
<script>
// @ is an alias to c
import ary from "@/router/org.js"
import nav from '@/components/nav.vue'
export default {
  name: "XXX",
  data() {
    return {
      ary:ary
    }
  },
  components: {
    'my-aside':nav
  }
};
</script>
<style lang="less" scoped>
    .my-main{
      padding: 0;
      line-height: normal;
    }
</style>
