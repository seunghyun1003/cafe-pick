<template v-slot:extension>
    <div class="nav">
        <v-tabs
            v-model="tabs"
        >
            <v-tabs-slider></v-tabs-slider>
            <v-tab
                router-link to="/"
            >
                <v-icon>mdi-home</v-icon>
            </v-tab>
            <v-tab
                router-link to="/write"
            >
                <v-icon>mdi-pencil</v-icon>
            </v-tab>
            <v-tab
                router-link to="/search"
            >
                <v-icon>mdi-map-search-outline</v-icon>
            </v-tab>
            <v-tab
                router-link to="/mypage"
            >
                <v-icon>mdi-account</v-icon>
            </v-tab>
        </v-tabs>
    </div>
</template>

<script>
export default{
    data () {
        return {
            tabs: '',
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav {
    position: fixed;
    bottom: 0;
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
}
.nav a{
    width: 25%;
}
</style>

