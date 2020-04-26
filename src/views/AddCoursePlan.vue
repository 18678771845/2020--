<template>
  <div style="padding: 10px">
    <div style="background: #fff; border-radius: 8px; padding: 20px;">
  <Form  label-position="left" :label-width="80"  :model="formCustom" >
    <table>
      <tr>
        <td><FormItem label="学年学期" prop="yearandterm">
              <Input v-model="formCustom.yearandterm" ></Input>
          </FormItem></td>
        <td><FormItem label="课程号" prop="courseid">
              <Input v-model="formCustom.courseid" @on-blur="mov" clearable ></Input>
          </FormItem></td>
          <td><FormItem label="课程名" prop="coursename">
                <Input v-model="formCustom.coursename" readonly ></Input>
            </FormItem></td>
      </tr>

      <tr>
        <td><FormItem label="课程类别" prop="coursetype">
              <Input v-model="formCustom.coursetype" readonly ></Input>
          </FormItem></td>
        <td><FormItem label="课程性质" prop="coursechara">
              <Input v-model="formCustom.coursechara" readonly ></Input>
          </FormItem></td>
          <td><FormItem label="总学时" prop="sumtimes">
                <Input v-model="formCustom.sumtimes" readonly ></Input>
            </FormItem></td>
      </tr>

      <tr>
        <td><FormItem label="周学时" prop="everyweektimes">
              <Input v-model="formCustom.everyweektimes" readonly ></Input>
          </FormItem></td>
        <td><FormItem label="学分" prop="credithour">
              <Input v-model="formCustom.credithour" readonly ></Input>
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
              <Input v-model="formCustom.taskstatus" readonly></Input>
          </FormItem></td>
          <td><FormItem  prop="taskid">
                <input v-model="formCustom.taskid" type="hidden"></input>
            </FormItem></td>

      </tr>
    </table>
  </Form>
  </div>
  </div>
</template>

<script>
  export default {
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
                  taskstatus: '确认中',
              },
        };
      },
      methods:{
        mov(){
          this.$axios.get('/jiankao/sysManage/task/searchPlanById/'+this.formCustom.courseid,

          ).then((data)=>{
            var res = data.data;
            this.formCustom.coursename = res.coursename;
            this.formCustom.coursetype = res.coursetype;
            this.formCustom.coursechara = res.coursechara;
            this.formCustom.sumtimes = res.sumtimes;
            this.formCustom.everyweektimes = res.everyweektimes;
            this.formCustom.credithour = res.credithour;
          })
        },
      },
      created() {

      },
    }
</script>

<style>
  #mother div {
    width: 300px;
  }
</style>
