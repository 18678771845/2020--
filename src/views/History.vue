<template>
    <div style="padding: 10px">
        <div style="background: #fff; border-radius: 8px; padding: 20px;">

            <Table max-height="670" border stripe :columns="columns1" :data="data1"></Table>
            <br>
            <Page :total="100" show-sizer show-elevator/>
        </div>
    </div>
</template>

<script>
export default {
    name: 'lastedpub',
    data() {
        return {
            columns1: [
                {
                    title: '标题',
                    key: 'biao',
                },
                {
                    title: '附件情况',
                    key: 'attach',
                },
                {
                    title: '发布人',
                    key: 'publish',
                },
            ],
            data1: [],
        }
    },
    created:function(){
        var messages=[];
        this.$axios.get('/api/message/adminGetByPage',{
            params: {
                pageNum: 0,
                pageSize: 10,
                uId: 123
            }
        }
        ).then((data)=>{
            console.log(data.data);
            messages = data.data;
        })
    }
}
</script>

<style scoped>

</style>
