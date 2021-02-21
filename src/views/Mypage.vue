<template>
    <div id="mypage">
        <div class="myinfo-wrap">
            <div class="user-name" v-if="isLoginSuccess">
                {{ userInfo.name }}님
            </div>
            <div class="user-name" v-else>
                -
            </div>
            <div class="user-follow">
                <p>팔로우 몇명</p>
                <p>팔로잉 몇명</p>
            </div>
        </div>
        <div v-if="user" class="post-info">
            <div>
                내 게시물
            </div>
            <div>
                인기 게시물
            </div>
        </div>
        <div v-else>
            <v-btn v-if="isLoginSuccess" @click="logout"><v-icon>{{ mdiLogout }}</v-icon></v-btn>
            <v-btn v-else router :to="{name: 'Login'}"><v-icon>{{ mdiLogin }}</v-icon></v-btn>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

import { mdiLogin } from '@mdi/js';
import { mdiLogout  } from '@mdi/js';

export default {
    data: () => ({
        user : false,
        mdiLogin,
        mdiLogout 
    }),
    computed:{
        ...mapState(["isLoginSuccess", "userInfo"])
    },
    methods:{
        ...mapActions(["logout"])
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#mypage{
    height: 100%;
}
.myinfo-wrap{
    border-bottom: 1px solid black;
    height: 40%;
    text-align: left;
    background-color: rgb(194, 194, 194);
}
.user-name{
    font-size: x-large;
    font-weight: 600;
}
.post-info{
    display: block;
}
</style>

