<template>
  <div class="app-wrapper">
    <!-- 左部是一个侧边栏，可以封装为组件sidebar -->

  </div>
</template>
<script>
import { Sidebar, Navbar, AppMain } from '@/components'
export default {
  name: 'layout',
  components: {
    Sidebar,
    Navbar,
    AppMain
  },
  data() {
    return {

    }
  }
}
</script>