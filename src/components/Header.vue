<template>
    <div class="header">
        <div class="logo">
            <a href="#">Logo</a>
        </div>
        <div class="nav">
            <button><router-link to="/write">write</router-link></button>
            <button><router-link to="/login">login</router-link></button>
            <button><router-link to="/mypage">mypage</router-link></button>
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
    padding: 1em 20px;
}
.nav button{
    border: none;
    background-color: inherit;
}
.nav a{
    text-decoration: none;
    color: black;
    font-weight: 800;
}
</style>

