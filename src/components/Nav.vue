<template>
    <div class="nav">
        <v-tabs
            v-model="tabs"
            fixed-tabs
            dark
            background-color="teal darken-3"
        >
            <v-tab router-link to="/write"
                href="#mobile-tabs-5-1"
                class="primary--text"
            >
                <v-icon>{{ mdiPencil }}</v-icon>
            </v-tab>
            <v-tab router-link to="/search"
                href="#mobile-tabs-5-1"
                class="primary--text"
            >
                <v-icon>{{ mdiMapSearchOutline }}</v-icon>
            </v-tab>
            <v-tab router-link to="/mypage"
                href="#mobile-tabs-5-1"
                class="primary--text"
            >
                <v-icon>{{ mdiAccount }}</v-icon>
            </v-tab>
        </v-tabs>
    </div>
</template>

<script>
import {mdiPencil} from '@mdi/js';
import {mdiAccount} from '@mdi/js';
import { mdiMapSearchOutline } from '@mdi/js';
export default {
    data: () => ({
        mdiPencil,
        mdiAccount,
        mdiMapSearchOutline
    }),
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav {
    position: fixed;
    bottom: 0;
    left:0;
    width: 100%;
}

.nav a{
    width: 100%;
}
v-tabs{
    height: 3rem;
}
</style>

