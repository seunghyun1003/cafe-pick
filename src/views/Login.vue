<template>
    <div>
        <v-container id="login-container">
            <v-card flat>
                <v-toolbar flat>
                    <v-toolbar-title style="text-align: center;">Login</v-toolbar-title>
                </v-toolbar>
                <div class="login-form">
                    <v-text-field flat class="login-textfiled"
                        v-model="user.email"
                        label="Email"
                        placeholder="email 입력하세요."
                        solo
                    ></v-text-field>
                    <v-text-field flat class="login-textfiled"
                        v-model="user.password"
                        label="PassWord"
                        type="password"
                        placeholder="password를 입력하세요."
                        solo
                    ></v-text-field>
                    <v-btn
                    @click="login()"
                    rounded
                    color="primary"
                    dark
                    >
                    로그인
                    </v-btn>
                </div>
                    <div><router-link to="/findpw">비밀번호 찾기</router-link></div>
                    <div><router-link to="/signup">signup</router-link></div>
            </v-card>
        </v-container>
    </div>
</template>

<script>
export default {
    name: 'Login',
    data() {
        return {
            user : {
                email : '',
                password : ''
            }
        }
    },
    methods: {
        login(){
            console.log("로그인 " + this.user.email, this.user.password)
            if (this.user.email == '') {alert('이메일을 입력해주세요.');return;}
            if (this.user.password == '') {alert('비밀번호를 입력해주세요.');return;}
            this.$http.post('/api/login', {user:this.user}).then((response) => {
                if (response.data.success == true) {
                    alert(response.data.message);
                    this.$router.push('/list'); //로그인 성공시 list 페이지로 이동
                } else {
                    alert(response.data.message);
                }
            });
        }
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
