<template>
    <div>
        <div class="title">
            <h2>{{title}}</h2>
        </div>
        <v-card flat>
            <v-toolbar flat>
                <v-toolbar-title style="text-align: center;">Login</v-toolbar-title>
            </v-toolbar>
            <v-alert 
                :value="isLoginError"
                type="error"
            >에러 메시지</v-alert>
            <div class="login-form">
                <v-text-field flat class="login-textfiled"
                    v-model="email"
                    label="Email"
                    placeholder="email 입력하세요."
                    solo
                ></v-text-field>
                <v-text-field flat class="login-textfiled"
                    v-model="password"
                    label="PassWord"
                    type="password"
                    placeholder="password를 입력하세요."
                    solo
                ></v-text-field>
                <v-btn
                @click="login({
                    email,
                    password
                })"
                rounded
                color="primary"
                dark
                depressed
                >
                로그인
                </v-btn>
            </div>
                <div><router-link to="/findpw">비밀번호 찾기</router-link></div>
                <div><router-link to="/signup">signup</router-link></div>
        </v-card>
    </div>
</template>

<script>
import { mapState, mapActions } from "vuex"
export default {
    name: 'Login',
    data() {
        return {
            title: 'Login',
            email : '',
            password : '',
        }
    },
    computed: {
        ...mapState(["isLogin","isLoginError"])
    },
    methods: {
        ...mapActions(['login'])
    },
};
</script>

<style scoped>
#login-container{
    max-width: 450px;
    width:100%;
}
.login-textfiled{
    border: 1px solid black;
    border-radius: 0.25em;
    margin: 1em;
}
</style>
