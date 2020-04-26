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
                    key: 'infoid',
                },
                {
                    title: '发布人',
                    key: 'gid',
                },
                {
                    title: '发布时间',
                    key: 'starttimestr',
                },
                {
                    title: '截止时间',
                    key: 'deadlinestr',
                },

                {
                        title: '操作',
                        key: '',
                        fixed: 'right',
                        width: 90,
                        //align: auto,
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'text',
                                        size: 'small'
                                    }
                                }, '填写'),

                            ]);
                        }
                    }
            ],
            data1: [],
        }
    },
    created:function(){
        var temp = [];
        this.$axios.get('/xinxi/message/adminGetByPage',{
            params: {
                pageNum: 0,
                pageSize: 10,
                uId: 123
            }
        }
        ).then((data)=>{
            console.log(data.data);
            this.data1 = data.data;
        })
    }
}
</script>

<style scoped>

</style>
