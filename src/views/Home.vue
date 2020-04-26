<template>
    <div class="home-container">
        <div class="home-content">
            首页
            <input type="text">
            <p>1</p>
            <p>1</p>
            <p>1</p>
            <p>1</p>
            <p>1</p>
            <p>1</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'home',
    created: function(){
        // this.$axios.post('/api/auth/login',{
        //     username: '18678771845',
        //     password: 'wr1997361'
        // }).then( function(data) {
        //     console.log(data)
        // }).catch();
    }
}
</script>

<style scoped>
.home-container {
    padding: 10px;
    padding-top: 5px;
}
.home-content {
    padding: 10px;
    border-radius: 5px;
    background: #fff;
}
</style>
