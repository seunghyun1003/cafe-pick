<template>
<v-container id="login-container">
    <v-card>
        <v-toolbar flat>
            <v-toolbar-title>Login</v-toolbar-title>
        </v-toolbar>
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
            @click="login()"
            rounded
            color="primary"
            dark
            >
            로그인
            </v-btn>
        </div>
    </v-card>
</v-container>
</template>

<script>
export default {
    name: 'Login',
    data: () => ({
        email: '',
        password: '',
        allUsers:[
            {id:1, name:'admin',email:"admin@admin.com",password:"1234"}
        ]
    }),
    methods: {
        login(){
            console.log(this.email, this.password)
        }
    },
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
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

