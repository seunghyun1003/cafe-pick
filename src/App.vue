<template>
    <div id="app">
        <router-view/>
        <Nav></Nav>
    </div>
</template>

<script>
import Nav from "./components/Nav.vue";

export default {
  name: 'App',
  components: {
    Nav
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
}

li{
  list-style: none;
}
</style>
