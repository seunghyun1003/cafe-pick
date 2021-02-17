<template>
    <div id="home">
        <Map></Map>
        <div class="review-list">
            <div class="review-item" :key="index" v-for="(value, index) in data" @click="detailshow(index)">
              <li>{{ value.cafe_name }}</li>
              <li>{{ value.cafe_location }}</li>
              <li>{{ value.writer }}</li>
              <li>{{ value.content }}</li>
            </div>
        </div>
    </div>
</template>

<script>
import Map from "@/components/Map.vue";
import data from "@/data";

export default {
    components: {
      'Map': Map
    },
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
#home{
  display:flex;
}
.review-item{
  border: 1px solid gray;
}
.review-item li {
  list-style: none;
}
</style>

