<template>
    <div class="header">
        <div class="logo">
            <button><router-link to="/">CafePicker</router-link></button>
        </div>
        <div class="nav">
            <button><router-link to="/write"><v-icon>{{ mdiPencil }}</v-icon></router-link></button>
            <button><router-link to="/search"><v-icon>{{ mdiMapSearchOutline }}</v-icon></router-link></button>
            <button><router-link to="/mypage"><v-icon>{{ mdiAccount }}</v-icon></router-link></button>
            <button v-if="user"><router-link to="/logout"><v-icon>{{ mdiLogout }}</v-icon></router-link></button>
            <button v-else><router-link to="/login"><v-icon>{{ mdiLogin }}</v-icon></router-link></button>
        </div>
    </div>
</template>

<script>
import {mdiPencil} from '@mdi/js';
import {mdiAccount} from '@mdi/js';
import { mdiMapSearchOutline } from '@mdi/js';
import { mdiLogin } from '@mdi/js';
import { mdiLogout  } from '@mdi/js';
    export default {
        data: () => ({
            mdiPencil,
            mdiAccount,
            mdiMapSearchOutline,
            mdiLogin,
            mdiLogout 
        }),
    }
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
.v-icon__svg{
    fill: none;
}
.nav a{
    text-decoration: none;
    color: black;
    font-weight: 800;
}
</style>

