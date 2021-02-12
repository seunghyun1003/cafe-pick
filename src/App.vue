<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/Header.vue'
export default {
    name: 'App',
    components: {
      Header
    }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  display: block;
}
.contents-section{
}
</style>

