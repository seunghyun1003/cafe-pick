<template>
    <div class="header">
        <div class="logo">
            <button><router-link to="/">Logo</router-link></button>
        </div>
        <div class="nav">
            <button><router-link to="/write">write</router-link></button>
            <button><router-link to="/search">search</router-link></button>
            <button><router-link to="/mypage">mypage</router-link></button>
            <button v-if="user"><router-link to="/logout">logout</router-link></button>
            <button v-else><router-link to="/login">login</router-link></button>
        </div>
    </div>
</template>

<script>
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header{
    display: flex;
    justify-content: space-between;
    padding: 1em 2em;
}
.logo {
    font-size: x-large;
    padding: 0.5em 0;
}
.logo a{
    text-decoration: none;
    color: black;
    font-weight: 800;
}

.nav {
    display: flex;
}
.nav button{
    border: none;
    background-color: inherit;
    padding: 0 1em;
}
.nav a{
    text-decoration: none;
    color: black;
    font-weight: 800;
}
</style>

