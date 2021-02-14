<template>
    <div class="mypage-section">
        <div class="user-info">유저 정보
            <div class="user-name">
                유저 네임
            </div>
            <div class="follow-info">
                <div id="follower">팔로우/몇명</div>
                <div id="following">팔로잉/몇명</div>
            </div>
        </div>
        <div class="post-info">
            <div>
                내 게시물
            </div>
            <div>
                인기 게시물
            </div>
        </div>
    </div>
</template>

<script>
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.user-info{
    border-bottom: 1px solid black;
}
.user-name{
    background-color: skyblue;
}
.follow-info{
    background-color: yellowgreen;
    display: flex;
}
#follower, #following{
    padding: 10px;
    border: 1px solid black;
}
.post-info{
    display: block;
}
</style>

