<template>
    <div>
        <div class="title">
            <h2>{{title}}</h2>
        </div>
        <div>
            <li>{{ data.cafe_name }}</li>
            <li>{{ data.cafe_location }}</li>
            <li>{{ data.content }}</li>
<<<<<<< HEAD
=======
            <li><span v-for="n in data.rating">★</span></li>
>>>>>>> f3e93e674d60fd5ca38976906172489a11779643
        </div>
        <div>
            <button @click="reviewupdate()">수정</button>
            <button @click="reviewdelete()">삭제</button>
        </div>
    </div>
</template>

<script>
import data from "@/data";

export default {
    name: 'Detail',
    data(){
        const index = this.$route.params.contentId
        return{
            title: '상세 페이지',
            data: data[index],
            index: index,
        }
    },
    methods: {
        reviewupdate() {
            this.$router.push({
                name: 'Write',
                params: {
                    contentId: this.index
                }
            })
        },
        reviewdelete() {
            data.splice(this.index, 1)
            this.$router.push({
                path: '/'
            })
        }
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

