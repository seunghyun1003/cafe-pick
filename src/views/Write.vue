<template>
    <div>
        <div>
            <h2>리뷰 {{ index !== undefined ? "수정" : "작성" }}</h2>
        </div>
        <v-container>
            <v-row>
                <v-col>
                <v-btn alert="작성을 취소하시겠습니까?" router-link to="/">취소</v-btn>
                </v-col>
                <v-spacer></v-spacer>
                <v-col>
                <v-btn @click="index !== undefined ? reviewupdate() : reviewcreate()">{{ index !== undefined ? "수정 완료" : "작성 완료" }}</v-btn>
                </v-col>
            </v-row>
            <div class="review-content">
                <textarea 
                    v-model="content"
                    label="content" 
                    placeholder="리뷰 작성"
                >
                </textarea>
                <v-img class="preview-img"></v-img>
            </div>
            <v-container>
                <v-row>
                    <v-col>
                        <input 
                            ref="imageInput" 
                            type="file" 
                            multiple
                            truncate-length="15"
                            prepend-icon="mdi-camera"
                            accept="image/png, image/jpeg, image/bmp"
                            hidden 
                        >
                        <v-btn type="button">
                            <v-icon>mdi-camera</v-icon>
                        </v-btn>
                    </v-col>
                    <v-col>
                        <v-text-field  
                            v-model="cafe_name"
                            label="cafe_name" 
                            placeholder="카페명"
                        >
                        </v-text-field>
                    </v-col>
                    <v-col>
                        <v-text-field 
                            v-model="cafe_location"
                            label="cafe_location" 
                            placeholder="장소 직접 입력"
                        >
                        </v-text-field>
                    </v-col>
                </v-row>
            </v-container>
        </v-container>
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
            content : index !== undefined ? data[index].content : "",
        }
    },
    methods: {
        reviewcreate() {
            this.data.push({
                cafe_name : this.cafe_name,
                cafe_location : this.cafe_location,
                content : this.content,

            })
            this.$router.push({
                path: '/'
            })
        },
        reviewupdate() {
            data[this.index].cafe_name = this.cafe_name
            data[this.index].cafe_location = this.cafe_location
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
.review-content{
    width: 100%;
    height: 100%;
    border: 1px solid gray;

}
textarea{
    width: 100%;
    padding: 20px;
    height: 300px;
}
.preview-img{
    width: 200px;
}
</style>

