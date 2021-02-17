<template>
    <div>
        <input 
            v-model="cafe_name"
            label="cafe_name" 
            placeholder="cafe_name"
        />
        <input 
            v-model="cafe_location"
            label="cafe_location" 
            placeholder="cafe_location"
        />
        <input 
            v-model="writer"
            label="writer" 
            placeholder="writer"
        />
        <textarea 
            v-model="content"
            label="content" 
            placeholder="content"
        />
        <button @click="index !== undefined ? reviewupdate() : reviewcreate()">{{ index !== undefined ? "수정 완료" : "작성 완료" }}</button>
    </div>
</template>

<script>
import data from '@/data';

export default{
    name: 'Write',
    data(){
        const index = this.$route.params.contentId
        return{
            data:data,
            index: index,
            cafe_name : index !== undefined ? data[index].cafe_name : "",
            cafe_location : index !== undefined ? data[index].cafe_location : "",
            writer : index !== undefined ? data[index].writer : "",
            content : index !== undefined ? data[index].content : "",
        }
    },
    methods: {
        reviewcreate() {
            this.data.push({
                cafe_name : this.cafe_name,
                cafe_location : this.cafe_location,
                writer : this.writer,
                content : this.content,
            })
            this.$router.push({
                path: '/'
            })
        },
        reviewupdate() {
            data[this.index].cafe_name = this.cafe_name
            data[this.index].cafe_location = this.cafe_location
            data[this.index].writer = this.writer
            data[this.index].content = this.content
            this.$router.push({
                path: '/'
            })
        }
    },
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

