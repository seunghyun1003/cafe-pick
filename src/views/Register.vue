<template>
<v-container id="signup-container">
    <v-card flat>
        <v-toolbar flat>
            <v-toolbar-title style="text-align: center;">Register</v-toolbar-title>
        </v-toolbar>
        <div class="signup-form">
            <v-text-field flat class="signup-textfiled"
                v-model="username"
                label="Username"
                solo
            ></v-text-field>
            <v-text-field flat class="signup-textfiled"
            v-model="email"
            label="Email"
            solo
            ></v-text-field>
            <v-btn
            @click="signup()"
            rounded
            color="normal"
            >
            이메일 인증 요청
            </v-btn>
            <v-text-field flat class="signup-textfiled"
                v-model="password"
                label="PassWord"
                type="password"
                solo
            ></v-text-field>
            <v-text-field flat class="signup-textfiled"
                v-model="ckpassword"
                label="PassWord 확인"
                type="password 확인"
                solo
            ></v-text-field>
            <v-btn
            @click="signup()"
            rounded
            color="primary"
            dark
            >
            가입완료
            </v-btn>
        </div>
    </v-card>
</v-container>
</template>

<script>
export default {
    name: 'register',
    data: () => ({
        username: '',
        email: '',
        password: '',
        ckpassword: '',
        allUsers:[
            {id:1, name:'admin',email:"admin@admin.com",password:"1234"}
        ]
    }),
    methods: {
        signup(){
            console.log("회원가입 " +this.username, this.email, this.password, this.ckpassword)
        }
    },
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#signup-container{
    max-width: 450px;
    width:100%;
}
.signup-textfiled{
    border: 1px solid black;
    border-radius: 0.25em;
    margin: 1em;
}
</style>

