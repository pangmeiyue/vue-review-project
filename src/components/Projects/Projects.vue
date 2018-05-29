<template>
    <div id="projects">
        <i class="iconfont  icon-detail" value="132"></i><i class="iconfont icon-more"></i>
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
            label="Domain"
            width="180">
        </el-table-column>
        <el-table-column
            prop="name"
            label="System"
            width="180">
        </el-table-column>
        <el-table-column
            prop="address"
            label="Creator">
        </el-table-column>
        <el-table-column
            prop="name"
            label="Remark"
            width="180">
        </el-table-column>
        <el-table-column
            prop="take"
            label="Operating" 
            v-html="take">
           <template slot-scope="scope">
                <i class="el-icon-edit-outline"></i>
                <i class="el-icon-tickets"></i>
                <span>123</span>
                <i class="iconfont icon-detail" style="height:20px;width:20px;font-size:10px;"></i>
            </template>
        </el-table-column>
        </el-table>
    </div>
</template>

<script>

    export default {
      name: 'projects',

      data(){
          return {
            take:'<i class="iconfont  icon-detail taskEntrance" value="132"></i><i class="iconfont icon-more active"></i>',
            tableData: [{
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄',
                // take:`<i class="iconfont  icon-detail taskEntrance" value="132"></i><i class="iconfont icon-more active"></i>`
            }, {
                date: '2016-05-04',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1517 弄',
                // take:'<i class="iconfont  icon-detail taskEntrance" value="132"></i><i class="iconfont icon-more active"></i>'
            }, {
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1519 弄',
                // take:'<i class="iconfont  icon-detail taskEntrance" value="132"></i><i class="iconfont icon-more active"></i>'
            }, {
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1516 弄',
                // take:'<i class="iconfont  icon-detail taskEntrance" value="132"></i><i class="iconfont icon-more active"></i>'
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
    
     #projects .el-table td{
        border-bottom: 0;
        height: 55px;
        border-bottom: 10px solid #e9eef3;
    }
    #projects .el-table tr{
        height: 55px;
    }
    #projects  .el-table th.is-leaf{
        background: #e9eef3;
        line-height: 70px;
    }
    #projects .has-gutter{
         height: 50px;
        background: #e9eef3;

    }
    #projects .el-table .cell{
        padding: 10px;
    }
    
   
</style>
