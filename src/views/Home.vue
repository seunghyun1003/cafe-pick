<template>
    <div id="home">
        <Map></Map>
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
</style>

