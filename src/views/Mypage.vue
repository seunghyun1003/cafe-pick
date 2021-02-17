<template>
    <div class="mypage-wrap">
        <div class="myinfo-wrap">
            <div class="user-name">
                username
            </div>
            <div class="user-follow">
                <p>팔로우 몇명</p>
                <p>팔로잉 몇명</p>
            </div>
            <div class="follow-info">
                <v-flex>
                    <v-col>
                        <div id="follower">팔로우/몇명</div>
                    </v-col>
                </v-flex>
                <v-flex>
                    <v-col>
                        <div id="following">팔로잉/몇명</div>
                    </v-col>
                </v-flex>
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
            <button><router-link to="/logout"><v-icon>{{ mdiLogout }}</v-icon></router-link></button>
            <button><router-link to="/login"><v-icon>{{ mdiLogin }}</v-icon></router-link></button>
        </div>
    </div>
</template>

<script>
import { mdiLogin } from '@mdi/js';
import { mdiLogout  } from '@mdi/js';
export default {
    data: () => ({
        mdiLogin,
        mdiLogout 
    }),
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.myinfo-wrap{
    border-bottom: 1px solid black;
    text-align: left;
    background-color: wheat;
}
.user-name{
    font-size: x-large;
    font-weight: 600;
}
.follow-info{
    background-color: gray;
    display: flex;
}
#follower, #following{
    padding: 10px 0;
    border: 1px solid black;
}
.post-info{
    display: block;
}
</style>

