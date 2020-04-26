<template>
  <div style="padding: 10px">
    <table>
      <tr>
        <td>
          <Input search enter-button="Search" @on-search="searchM()" @on-change="changeM()" v-model="valueSearch" placeholder="搜索课程号" style="width: 300px"/>
        </td>
        <td>
          <input style="visibility: hidden" />
        </td>
        <td>
          <Button type="success" size="small" @click="addOne()" >添加一个</Button>
        </td>
      </tr>
    </table>



      <div style="background: #fff; border-radius: 8px; padding: 20px;">

          <Table max-height="670" border stripe :columns="columns1" :data="data1">
            <template slot-scope="{ row, index }" slot="action">
              <Button type="primary" size="small" style="margin-right: 5px" @click="show(index)">概要</Button>
              <Button type="warning" size="small" @click="update(index)">编辑</Button>
              <Button  size="small" @click="del(index)"><Icon type="md-close" /></Button>
            </template>
          </Table>
          <br>
          <Page  :total="page.total" :current="page.index" :page-size="8"  show-total @on-change="pIndexChange"/>
          </div>
          <Modal
              v-model="modal1"
              title="编辑"
              fullscreen
              @on-ok="ok"
              @on-cancel="cancel">
              <Alert banner  type="warning">若未进行修改,请勿点:确定</Alert>
              <Form  label-position="left" :label-width="80"  :model="formCustom" >
                <table>
                  <tr>
                    <td><FormItem label="课程号" prop="courseid">
                          <Input v-model="formCustom.courseid" ></Input>
                      </FormItem></td>
                      <td><FormItem label="课程名" prop="coursename">
                            <Input v-model="formCustom.coursename"  ></Input>
                        </FormItem></td>
                  </tr>

                  <tr>
                    <td><FormItem label="课程类别" prop="coursetype">
                          <Input v-model="formCustom.coursetype"  ></Input>
                      </FormItem></td>
                    <td><FormItem label="课程性质" prop="coursechara">
                          <Input v-model="formCustom.coursechara"  ></Input>
                      </FormItem></td>
                  </tr>

                  <tr>
                    <td><FormItem label="总学时" prop="sumtimes">
                          <Input v-model="formCustom.sumtimes"  ></Input>
                      </FormItem></td>
                    <td><FormItem label="周学时" prop="everyweektimes">
                          <Input v-model="formCustom.everyweektimes"  ></Input>
                      </FormItem></td>
                    <td><FormItem label="学分" prop="credithour">
                          <Input v-model="formCustom.credithour"  ></Input>
                      </FormItem></td>
                  </tr>
                </table>
              </Form>
          </Modal>
          <Modal
              v-model="modal2"
              title="新增教学任务"
              width="700px"
              @on-ok="ok1"
              @on-cancel="cancel">
              <Alert banner  type="warning">请认真填写，避免输入错误字段</Alert>
              <Form  label-position="left" :label-width="80"  :model="formCustom" >
                <table>
                  <tr>
                    <td><FormItem label="课程号" prop="courseid">
                          <Input v-model="formCustom.courseid" ></Input>
                      </FormItem></td>
                  </tr>

                  <tr>
                    <td><FormItem label="课程名" prop="coursename">
                          <Input v-model="formCustom.coursename"  ></Input>
                      </FormItem></td>
                    <td><FormItem label="课程类别" prop="coursetype">
                          <Select v-model="formCustom.coursetype" style="width:200px">
                                  <Option v-for="item in typeList" :value="item.typename" :key="item.uuid">{{ item.typename }}</Option>
                          </Select>
                      </FormItem></td>

                  </tr>

                  <tr>
                    <td><FormItem label="课程性质" prop="coursechara">
                          <Select v-model="formCustom.coursechara" style="width:200px">
                                  <Option v-for="item in charaList" :value="item.typename" :key="item.uuid">{{ item.typename }}</Option>
                          </Select>
                      </FormItem></td>
                    <td><FormItem label="总学时" prop="sumtimes">
                          <Input v-model="formCustom.sumtimes"  ></Input>
                      </FormItem></td>

                  </tr>
                  <tr>
                    <td><FormItem label="周学时" prop="everyweektimes">
                          <Input v-model="formCustom.everyweektimes"  ></Input>
                      </FormItem></td>
                    <td><FormItem label="学分" prop="credithour">
                          <Input v-model="formCustom.credithour"  ></Input>
                      </FormItem></td>
                  </tr>
                </table>
              </Form>
          </Modal>
      </div>
</template>

<script>
  export default {
      name: 'coursemission',
      data() {
          return {
              historyData: [],
              modal1: false,
              modal2: false,
              valueSearch: '',
              page:{
                index: 1,
                total: 0,
                size: 8,
              },
              typeList: [],
              charaList: [],
              formCustom: {
                      historyid: '',
                      courseid: '',
                      coursename: '',
                      coursetype: '',
                      coursechara: '',
                      sumtimes: '',
                      everyweektimes: '',
                      credithour: '',
                  },
              columns1: [
                  {
                      title: '课程号',
                      key: 'courseid',
                      width: 180,
                  },
                  {
                      title: '课程名',
                      key: 'coursename',
                      width: 300,
                  },
                  {
                      title: '课程类别',
                      key: 'coursetype',
                      width: 180,
                  },
                  {
                      title: '课程性质',
                      key: 'coursechara',
                      width: 180,
                  },
                  {
                      title: '总学时',
                      key: 'sumtimes',
                      width: 180,
                  },
                  {
                      title: '周学时',
                      key: 'everyweektimes',
                      width: 180,

                  },
                  {
                      title: '学分',
                      key: 'credithour',
                      width: 180,
                  },
                  {
                          title: '操作',
                          key: '',
                          slot: 'action',
                          fixed: 'right',
                          width: 180,
                      }
              ],
              data1: [],


          }
      },
      methods:{
        pIndexChange(index){
                        var _start = ( index - 1 ) * this.page.size;
                        var _end = index * this.page.size;
                        this.data1 = this.historyData.slice(_start,_end);
                    },
        show(index) {
                                this.$Modal.info({
                                    title: '详细信息',
                                    content: `
                                    课程号：${this.data1[index].courseid}<br>
                                    课程名：${this.data1[index].coursename}<br>
                                    课程类别：${this.data1[index].coursetype}<br>
                                    课程性质：${this.data1[index].coursechara}<br>
                                    总学时：${this.data1[index].sumtimes}<br>
                                    周学时：${this.data1[index].everyweektimes}<br>
                                    学分：${this.data1[index].credithour}<br>
                                    `
                                })
                            },

        update(index){
          this.formCustom.historyid = this.data1[index].courseid,
          this.formCustom.courseid = this.data1[index].courseid,
          this.formCustom.coursename = this.data1[index].coursename,
          this.formCustom.coursetype = this.data1[index].coursetype,
          this.formCustom.coursechara = this.data1[index].coursechara,
          this.formCustom.sumtimes = this.data1[index].sumtimes,
          this.formCustom.everyweektimes = this.data1[index].everyweektimes,
          this.formCustom.credithour = this.data1[index].credithour,
          this.modal1 = true;
        },
        addOne(){
          this.formCustom.historyid = '',
          this.formCustom.courseid = '',
          this.formCustom.coursename = '',
          this.formCustom.coursetype = '',
          this.formCustom.coursechara = '',
          this.formCustom.sumtimes = '',
          this.formCustom.everyweektimes = '',
          this.formCustom.credithour = '',
          this.modal2 = true;
          },
        del(index){
            var flag = false;
            var msg = '';
            var pathVariable = this.data1[index].courseid;
            if(confirm("删除会级联删除该任务的所有安排！")){
              this.$axios.get(
              '/jiankao/sysManage/task/deleteOneMission/'+pathVariable,
              ).then((data)=>{
                  if (data.code == 200){
                    flag = true;
                  }
                  if (flag){
                    this.$Message.info('删除成功');
                    this.payloadPage();
                  }else{
                    this.$Message.error('删除失败');
                    //this.payloadPage();
                  }
              });
            }

        },
        ok () {
          var qs = require('qs');
          var flag = false;
          var postData = qs.stringify(this.formCustom);
          //console.log(this.formCustom);
          this.$axios.post(
          '/jiankao/sysManage/task/updateOneMission',
          //this.formCustom,
          postData,
          ).then((data)=>{
              if (data.code == 200){
                flag = true;
              }
              if (flag){
                this.$Message.info('修改成功');
                this.payloadPage();
              }else{
                this.$Message.error('修改失败');
                this.payloadPage();
              }
          });
              },
        ok1 () {
          var qs = require('qs');
          var flag = false;
          var postData = qs.stringify(this.formCustom);
          //console.log(this.formCustom);
          this.$axios.post(
          '/jiankao/sysManage/task/addOneCourseM',
          //this.formCustom,
          postData,
          ).then((data) =>{
              if (data.code == 200){
                flag = true;
              }
              if (flag){
                this.$Message.info('添加成功');
                this.payloadPage();
              }else{
                this.$Message.error({
                  content: '添加失败,原因：'+data.mass,
                  duration: 3,
                });
              }
          });
              },
        cancel () {
                  this.$Message.info('您未进行操作');
              },
        payloadPage(){
          this.$axios.get('/jiankao/sysManage/task/getAllMission',{
              params: {
                  pageNum: 0,
                  pageSize: 10
              }
          }
          ).then((data)=>{
              //console.log(data.data);
              this.historyData = data.data;
              this.page.total= parseInt(data.mass);

              if(this.page.total < this.pageSize){
                      this.data1 = this.historyData;
                  }else{
                      var temp = this.historyData.slice(0,this.page.size);
                      this.data1 = temp;
                  }
          })
        },
        getTypeName(){
          this.$axios.get('/jiankao/sysManage/task/dic',{
              params: {
                  item: '课程类别',
              }
          }
          ).then((data)=>{
            this.typeList = data.data;
          })
        },
        getCharaName(){
          this.$axios.get('/jiankao/sysManage/task/dic',{
              params: {
                  item: '课程性质',
              }
          }
          ).then((data)=>{
            this.charaList = data.data;
          })
        },
        searchM(){
          this.$axios.get('/jiankao/sysManage/task/searchById/'+this.valueSearch,

          ).then((data)=>{

            this.historyData = data.data;
            this.page.total= parseInt(data.mass);
            if(data.mass == 0){
              this.$Message.error({
                content: '没有匹配项！',
                duration: 3,
              });
            }
            if(this.page.total < this.pageSize){
                    this.data1 = this.historyData;
                }else{
                    var temp = this.historyData.slice(0,this.page.size);
                    this.data1 = temp;
                }
          })
        },
        changeM(){
          if (this.valueSearch == ''){
            this.payloadPage();
          }
        },
      },
      created() {
          this.payloadPage();
          this.getTypeName();
          this.getCharaName();
      },

  }
</script>

<style>
</style>
