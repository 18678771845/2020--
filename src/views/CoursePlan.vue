<template>
    <div style="padding: 10px">
      <table>
        <tr>
          <td>
            <Input search enter-button="课程号查询" @on-search="searchM()" @on-change="changeM()" v-model="valueSearch" placeholder="搜索课程号" style="width: 300px"/>
          </td>
          <td>
            <input style="visibility: hidden" />
          </td>
          <td>
            <router-link to="/addcourseplan">
            <Button type="success" size="small" >添加安排</Button>
            </router-link>
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
                  <td><FormItem label="学年学期" prop="yearandterm">
                        <Input v-model="formCustom.yearandterm" ></Input>
                    </FormItem></td>
                  <td><FormItem label="课程号" prop="courseid">
                        <Input v-model="formCustom.courseid" disabled ></Input>
                    </FormItem></td>
                    <td><FormItem label="课程名" prop="coursename">
                          <Input v-model="formCustom.coursename" disabled ></Input>
                      </FormItem></td>
                </tr>

                <tr>
                  <td><FormItem label="课程类别" prop="coursetype">
                        <Input v-model="formCustom.coursetype" disabled ></Input>
                    </FormItem></td>
                  <td><FormItem label="课程性质" prop="coursechara">
                        <Input v-model="formCustom.coursechara" disabled ></Input>
                    </FormItem></td>
                    <td><FormItem label="总学时" prop="sumtimes">
                          <Input v-model="formCustom.sumtimes" disabled ></Input>
                      </FormItem></td>
                </tr>

                <tr>
                  <td><FormItem label="周学时" prop="everyweektimes">
                        <Input v-model="formCustom.everyweektimes" disabled ></Input>
                    </FormItem></td>
                  <td><FormItem label="学分" prop="credithour">
                        <Input v-model="formCustom.credithour" disabled ></Input>
                    </FormItem></td>
                    <td><FormItem label="课程周学时" prop="weektimes">
                          <Input v-model="formCustom.weektimes"></Input>
                      </FormItem></td>
                </tr>

                <tr>
                  <td><FormItem label="授课学时" prop="teachtimes">
                        <Input v-model="formCustom.teachtimes" ></Input>
                    </FormItem></td>
                  <td><FormItem label="实验学时" prop="experiencetimes">
                        <Input v-model="formCustom.experiencetimes"></Input>
                    </FormItem></td>
                    <td><FormItem label="上机学时" prop="computertimes">
                          <Input v-model="formCustom.computertimes"></Input>
                      </FormItem></td>
                </tr>

                <tr>
                  <td><FormItem label="其他学时" prop="othertimes">
                        <Input v-model="formCustom.othertimes" ></Input>
                    </FormItem></td>
                  <td><FormItem label="课容量" prop="sumstudent">
                        <Input v-model="formCustom.sumstudent"></Input>
                    </FormItem></td>
                    <td><Tooltip max-width="200" content="请用#进行分隔.例如:张三#李四#王五" placement="right">
                    <FormItem label="上课老师" prop="teachers">
                          <Input v-model="formCustom.teachers"></Input>
                      </FormItem></Tooltip></td>
                </tr>

                <tr>
                  <td><FormItem label="考试类型" prop="testtype">
                        <Input v-model="formCustom.testtype" ></Input>
                    </FormItem></td>
                  <td><FormItem label="教学类型" prop="teachtype">
                        <Input v-model="formCustom.teachtype"></Input>
                    </FormItem></td>
                    <td><Tooltip content="请用#进行分隔" placement="right">
                    <FormItem label="上课班级" prop="classes">
                          <Input v-model="formCustom.classes"></Input>
                      </FormItem></Tooltip></td>
                </tr>

                <tr>
                  <td><FormItem label="教室类型" prop="roomtype">
                        <Input v-model="formCustom.roomtype" ></Input>
                    </FormItem></td>
                  <td><FormItem label="上机地点" prop="computeratwhere">
                        <Input v-model="formCustom.computeratwhere" ></Input>
                    </FormItem></td>
                    <td><FormItem label="上课周次" prop="sumweeks">
                          <Input v-model="formCustom.sumweeks"></Input>
                      </FormItem></td>
                </tr>

                <tr>
                  <td><FormItem label="教研室" prop="teachroom">
                        <Input v-model="formCustom.teachroom" ></Input>
                    </FormItem></td>
                  <td><FormItem label="任务状态" prop="taskstatus">
                        <Input v-model="formCustom.taskstatus" disabled></Input>
                    </FormItem></td>
                    <td><FormItem  prop="taskid">
                          <Input v-model="formCustom.taskid"  type="hidden"></Input>
                      </FormItem></td>

                </tr>
              </table>
            </Form>
        </Modal>
    </div>

</template>

<script>
export default {
    name: 'courseplan',
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
            formCustom: {
                    taskid: '',
                    yearandterm: '',
                    courseid: '',
                    coursename: '',
                    coursetype: '',
                    coursechara: '',
                    sumtimes: '',
                    everyweektimes: '',
                    credithour: '',
                    weektimes: '',
                    teachtimes: '',
                    experiencetimes: '',
                    computertimes: '',
                    othertimes: '',
                    sumstudent: '',
                    teachers: '',
                    testtype: '',
                    teachtype: '',
                    classes: '',
                    roomtype: '',
                    computeratwhere: '',
                    sumweeks: '',
                    teachroom: '',
                    taskstatus: '',
                },
            columns1: [
                {
                    title: '学年学期',
                    key: 'yearandterm',
                    width: 220,
                    //fixed: 'left'
                },
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
                    title: '课程周学时',
                    key: 'weektimes',
                    width: 180,
                },
                {
                    title: '授课学时',
                    key: 'teachtimes',
                    width: 180,
                },
                {
                    title: '实验学时',
                    key: 'experiencetimes',
                    width: 180,
                },
                {
                    title: '上机学时',
                    key: 'computertimes',
                    width: 180,
                },
                {
                    title: '其他学时',
                    key: 'othertimes',
                    width: 180,
                },
                {
                    title: '课容量',
                    key: 'sumstudent',
                    width: 180,
                },
                {
                    title: '上课老师',
                    key: 'teachers',
                    width: 300,
                },
                {
                    title: '考试类型',
                    key: 'testtype',
                    width: 180,
                },
                {
                    title: '教学类型',
                    key: 'teachtype',
                    width: 180,
                },
                {
                    title: '上课班级',
                    key: 'classes',
                    width: 300,
                },
                {
                    title: '教室类型',
                    key: 'roomtype',
                    width: 180,
                },
                {
                    title: '上机地点',
                    key: 'computeratwhere',
                    width: 180,
                },
                {
                    title: '上课周次',
                    key: 'sumweeks',
                    width: 180,
                },
                {
                    title: '教研室',
                    key: 'teachroom',
                    width: 180,
                },
                {
                    title: '任务状态',
                    key: 'taskstatus',
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
                                  title: '部分重要信息',
                                  content: `学年学期：${this.data1[index].yearandterm}<br>
                                  课程号：${this.data1[index].courseid}<br>
                                  课程名：${this.data1[index].coursename}<br>
                                  课程类别：${this.data1[index].coursetype}<br>
                                  课程性质：${this.data1[index].coursechara}<br>
                                  上课教师：${this.data1[index].teachers}<br>
                                  上课班级：${this.data1[index].classes}<br><br>
                                  <i>任务状态：${this.data1[index].taskstatus}</i><br>
                                  `
                              })
                          },

      update(index){
        this.formCustom.taskid = this.data1[index].taskid;
        this.formCustom.yearandterm = this.data1[index].yearandterm;
        this.formCustom.courseid = this.data1[index].courseid,
        this.formCustom.coursename = this.data1[index].coursename,
        this.formCustom.coursetype = this.data1[index].coursetype,
        this.formCustom.coursechara = this.data1[index].coursechara,
        this.formCustom.sumtimes = this.data1[index].sumtimes,
        this.formCustom.everyweektimes = this.data1[index].everyweektimes,
        this.formCustom.credithour = this.data1[index].credithour,
        this.formCustom.weektimes = this.data1[index].weektimes,
        this.formCustom.teachtimes = this.data1[index].teachtimes,
        this.formCustom.experiencetimes = this.data1[index].experiencetimes,
        this.formCustom.computertimes = this.data1[index].computertimes,
        this.formCustom.othertimes = this.data1[index].othertimes,
        this.formCustom.sumstudent = this.data1[index].sumstudent,
        this.formCustom.teachers = this.data1[index].teachers,
        this.formCustom.testtype = this.data1[index].testtype,
        this.formCustom.teachtype = this.data1[index].teachtype,
        this.formCustom.classes = this.data1[index].classes,
        this.formCustom.roomtype = this.data1[index].roomtype,
        this.formCustom.computeratwhere = this.data1[index].computeratwhere,
        this.formCustom.sumweeks = this.data1[index].sumweeks,
        this.formCustom.teachroom = this.data1[index].teachroom,
        this.formCustom.taskstatus = this.data1[index].taskstatus,
        this.modal1 = true;

      },
      del(index){
          var flag = false;
          var pathVariable = this.data1[index].taskid;
          this.$axios.get(
          '/jiankao/sysManage/task/deleteOne/'+pathVariable,
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
      },

      ok () {
        var qs = require('qs');
        var flag = false;
        var postData = qs.stringify(this.formCustom);
        //console.log(this.formCustom);
        this.$axios.post(
        '/jiankao/sysManage/task/updateOne',
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
              this.$Message.info('修改失败');
              this.payloadPage();
            }
        });
            },
      cancel () {
                this.$Message.info('您未进行操作');
            },
      payloadPage(){
        this.$axios.get('/jiankao/sysManage/task/getAll',{
            params: {
                pageNum: 0,
                pageSize: 10
            }
        }
        ).then((data)=>{
            //console.log(data.data);
            this.historyData = data.data;
            this.page.total= data.mass;

            if(this.page.total < this.pageSize){
                    this.data1 = this.historyData;
                }else{
                    var temp = this.historyData.slice(0,this.page.size);
                    console.log(temp);
                    this.data1 = temp;
                }
        })
      },
      searchM(){
        this.$axios.get('/jiankao/sysManage/task/searchPlanById/'+this.valueSearch,

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
    },

}
</script>

<style scoped>

</style>
