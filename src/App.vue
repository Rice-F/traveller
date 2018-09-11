<template>
  <div id="app">
    <!--在组件切换过程中将状态保留在内存中，防止重复渲染DOM-->
    <!-- exclude属性表示除去当前组件，不参与缓存 -->
    <keep-alive exclude="Detail">
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
</style>
