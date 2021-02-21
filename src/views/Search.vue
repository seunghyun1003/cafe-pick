<template>
    <div id="search">
        <div id="search-form">
            <v-row class="d-flex align-center">
                <v-text-field
                    v-model="searchkeyword"
                    prepend-icon="mdi-map-marker"
                    placeholder = "찾고 싶은 위치 입력"
                ></v-text-field>
                <v-btn
                    @click="searchSubmit()"
                    style="margin-left: 10px; justify-"
                    color="primary"
                    dark
                >
                검색
                </v-btn>
            </v-row>
        </div>
        <Map></Map>
    </div>
</template>

<script>
import Map from "@/components/Map.vue";
export default {
    data: () => ({
        searchkeyword: ''
    }),
    components: {
        'Map': Map
    },
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
                level: 7
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
            // 주소로 좌표를 검색합니다
            this.geocoder.addressSearch(this.keyword, function(result, status) {

                // 정상적으로 검색이 완료됐으면
                if (status === kakao.maps.services.Status.OK) {
                    console.log(result[0].y)
                    console.log(result[0].x)

                    var coords = new kakao.maps.LatLng(result[0].y, result[0].x)
                    this.map.setCenter(coords); //에러 나는 부분
                }

            });
            
        }
    }

}

</script>
<style>
#search{
}
#search-form{
    position: fixed;
    top: 300px;
    width: 100%;
    max-width: 600px;
    z-index: 10;
}
.v-text-field__slot,.v-text-field__slot > label{
    padding: 0 1em;
}
</style>