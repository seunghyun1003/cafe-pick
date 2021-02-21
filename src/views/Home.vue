<template>
    <div id="home">
        <div class="logo">
            <button><router-link to="/">CafePick</router-link></button>
        </div>
        <div class="review-list">
            <div class="review-item" :key="index" v-for="(value, index) in data" @click="detailshow(index)">
              <li>{{ value.cafe_name }}</li>
              <li>{{ value.cafe_location }}</li>
              <li>{{ value.content }}</li>
              <li><span v-for="n in value.rating">★</span></li>
            </div>
        </div>
    </div>
</template>

<script>
import data from "@/data";

export default {
    data() {
        return {
          data : data
        }
    },
    methods: {
      detailshow(index){
        this.$router.push({
          name: "Detail",
          params:{
            contentId: index
          }
        })
      }
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.logo {
    font-size: x-large;
    padding: 0.5em 0;
    line-height: 3rem;
}
.logo a{
    text-decoration: none;
    color: black;
    font-weight: 800;
}
.review-item{
  border: 1px solid gray;
}
.review-item li {
  list-style: none;
}
</style>

