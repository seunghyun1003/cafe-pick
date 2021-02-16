<template>
    <div id="home">
        <Map></Map>
        <div class="postlist">게시물 리스트 뷰</div>
    </div>
</template>

<script>
import Map from "@/components/Map.vue";

export default {
  components: {
    'Map': Map
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#home{
  display:flex;
}
.postlist{
  flex-basis: 50%;
  }
</style>

