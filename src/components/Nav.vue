<template>
    <div class="nav">
        <v-tabs
            v-model="tab"
            dark
            icons-and-text
        >
            <v-tabs-slider></v-tabs-slider>
            <v-tab router-link to="/write">
                리뷰 작성
                <v-icon>{{ mdiPencil }}</v-icon>
            </v-tab>
            <v-tab router-link to="/search">
                검색
                <v-icon>{{ mdiMapSearchOutline }}</v-icon>
            </v-tab>
            <v-tab router-link to="/mypage">
                마이페이지
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
</style>

