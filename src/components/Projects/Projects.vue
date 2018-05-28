<template>
    <div id="projects">
        <el-table
        :data="tableData3"
        style="width: 100%"
        height="250">
        <el-table-column
        fixed
        prop="date"
        label="Domain"
        width="150">
        </el-table-column>
        <el-table-column
        prop="name"
        label="System"
        width="120">
        </el-table-column>
        <el-table-column
        prop="province"
        label="Creator"
        width="120">
        </el-table-column>
        <el-table-column
        prop="city"
        label="Remark"
        width="120">
        </el-table-column>
        <el-table-column
        prop="address"
        label="Operating"
        width="300">
        </el-table-column>
        <el-table-column
        prop="zip"
        label="邮编"
        width="120">
        </el-table-column>
    </el-table>
    </div>
</template>

<script>

    export default {
      name: 'projects',

      data(){
          return {
            tableData3: [{
            date: '2016-05-03',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
            }, {
            date: '2016-05-02',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
            }, {
            date: '2016-05-04',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
            }, {
            date: '2016-05-01',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
            }, {
            date: '2016-05-08',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
            }, {
            date: '2016-05-06',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
            }, {
            date: '2016-05-07',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
            }]
          }
      },

      created:function(){
         
        cicd.captionBar.caption = [
            {text:"Configure Manage",url:""},
            {text:"Project List",url:"/Projects"}
        ]
      },

      mounted:function(){

      },

      methods: {
 
      }
    }
</script>

<style lang="scss" scoped>
    #projects{
        width: 100%;
        // min-height: 400px;
        // height: auto !important;
        // height: 400px;
        height: 100%;
        padding: 30px 35px;
    }
    table{
        border: 0;
        td{
            border-bottom: 0;
        }
    }
</style>
