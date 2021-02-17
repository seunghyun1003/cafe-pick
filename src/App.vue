<template>
    <div id="app">
        <div class="logo">
            <button><router-link to="/">pica</router-link></button>
        </div>
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
  height: 100%;
}

.logo {
    font-size: x-large;
    padding: 0.5em 0;
    line-height: 3rem;
}
.logo a{
    text-decoration: none;
    color: black;
    font-weight: 800;
}
</style>
