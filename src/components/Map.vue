<template>
    <div id=makemap>
    <div id="search-form">
        <v-text-field
            v-model = "searchkeyword"
            solo
            label="Prepend inner"
            prepend-inner-icon="mdi-map-marker"
        ></v-text-field>
        <v-btn
        @click="searchSubmit()"
        rounded
        color="primary"
        dark
        >
        검색
        </v-btn>
    </div>
        <div id="map"></div>
    </div>
</template>

<script>
export default {
    data: () => ({
        searchkeyword: ''
    }),
    mounted() {
        if (window.kakao && window.kakao.maps) {
            this.initMap();
        } else {
            const script = document.createElement('script');
            /* global kakao */
            script.onload = () => kakao.maps.load(this.initMap);
            script.src = 'http://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=bbe1a4947273a13c53290ba27cf970d7';
            document.head.appendChild(script);
        }
    },
    methods: {
        initMap() {
            var container = document.getElementById('map');
            var options = {
                center: new kakao.maps.LatLng(37.566826, 126.9786567),
                level: 3
            };

            var map2 = new kakao.maps.Map(container, options);

            var markerPosition  = new kakao.maps.LatLng(37.566826, 126.9786567); 
            var marker = new kakao.maps.Marker({
                position: markerPosition
            });
            marker.setMap(map2);

        },
        searchSubmit(){
            console.log("검색어 : " + this.searchkeyword)
        }
    }

}

</script>
<style>
#search-form{
    display: flex; 
}
.v-icon.v-icon{
    color: rgb(76, 76, 193);
}
.v-text-field__slot,.v-text-field__slot > label{
    padding: 0 1em;
}
#makemap{
    margin: 10px 5%;
    width: 90%;
}
#map {
    width: 100%;
    height: 600px;
}
</style>