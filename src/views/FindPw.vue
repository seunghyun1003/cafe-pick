<template>
    <div>
        <h2 >비밀번호를 잊으셨나요?</h2>
        <v-container id="findpw-container">
            <v-card flat>
                <v-text-field flat class="findpw-textfiled"
                    v-model="email"
                    label="email 입력"
                    solo
                ></v-text-field>
                <v-btn
                @click="findpassword()"
                rounded
                color="primary"
                dark
                >
                이메일로 비밀번호 찾기
                </v-btn>
            </v-card>
        </v-container>
    </div>
</template>

<script>
export default {
    name: 'findpw',
    data: () => ({
        email: ''
    }),
    methods: {
        findpassword(){
            console.log("비밀번호 찾기 " + this.email)
        }
    },
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#findpw-container{
    max-width: 450px;
    width:100%;
}
.findpw-textfiled{
    border: 1px solid black;
    border-radius: 0.25em;
    margin: 1em;
}
</style>

