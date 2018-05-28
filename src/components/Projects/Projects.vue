<template>
    <div id="projects">
        <!-- <table class="tab_projects">
            <thead>
                <tr>
                    <th class="domain th" name="domain">Domain</th>
                    <th class="system  th" name="system">System</th>
                    <th class="creator  th" name="creator">Creator</th>
                    <th class="remark th" name="remark">Remark</th>
                    <th class="operating th" name="operating">Operating</th>
                </tr>
            </thead>
            <tbody>
                <tr class="tbtr">
                    <td>11111</td>
                    <td>1111</td>
                    <td>111</td>
                    <td>1111</td>
                    <td>1111</td>
                </tr>

            </tbody>
        </table> -->

        <el-table
        :data="tableData"
        style="width: 100%"
        highlight-current-row
        size:medium 
        >
        <el-table-column
            prop="date"
            label="日期"
            width="180">
        </el-table-column>
        <el-table-column
            prop="name"
            label="姓名"
            width="180">
        </el-table-column>
        <el-table-column
            prop="address"
            label="地址">
        </el-table-column>
        </el-table>
    </div>
</template>

<script>

    export default {
      name: 'projects',

      data(){
          return {
            tableData: [{
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-04',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1517 弄'
            }, {
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1519 弄'
            }, {
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1516 弄'
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

<style >
    #projects{
        width: 100%;
        height: 100%;
        padding: 30px 35px;
        
    }
    
     #projects .el-table td, .el-table th.is-leaf{
        border-bottom: 0;
    }
   
</style>
