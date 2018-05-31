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
            prop="uzi_name"
            label="Domain"
            width="220">
        </el-table-column>
        <el-table-column
            prop="prj_name"
            label="System"
            width="220">
        </el-table-column>
        <el-table-column
            prop="create_emp"
            label="Creator"
            width="220">
        </el-table-column>
        <el-table-column
            prop="prj_remark"
            label="Remark">
        </el-table-column>
        <el-table-column
            prop="prj_id"
            label="Operating" 
            width="180">
           <template slot-scope="scope">
               <span>
                  
                   <i class="el-icon-edit-outline"></i>
                    <i class="el-icon-tickets"></i>
               </span>
                
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
            show:false,
            tableData: [{
                uzi_name: '2016-05-02',
                prj_name: '王小虎',
                create_emp: '上海市普陀区金沙江路 1518 弄',
                prj_remark:'iconfont  icon-detail taskEntrance',
                prj_id:'21423'
            }, 
            {
                uzi_name: '2016-05-02',
                prj_name: '王小虎',
                create_emp: '上海市普陀区金沙江路 1518 弄',
                prj_remark:'iconfont  icon-detail taskEntrance',
                prj_id:'22222'
            }, 
            {
                uzi_name: '2016-05-02',
                prj_name: '王小虎',
                create_emp: '上海市普陀区金沙江路 1518 弄',
                prj_remark:'iconfont  icon-detail taskEntrance',
                prj_id:'333333'
            }, 
            {
                uzi_name: '2016-05-02',
                prj_name: '王小虎',
                create_emp: '上海市普陀区金沙江路 1518 弄',
                prj_remark:'iconfont  icon-detail taskEntrance',
                prj_id:'4444'
            },
            // {
            //     date: '2016-05-04',
            //     name: '王小虎',
            //     address: '上海市普陀区金沙江路 1111 弄',
            //     take:'<i class="iconfont  icon-detail taskEntrance" value="132"></i><i class="iconfont icon-more active"></i>'
            // }, {
            //     date: '2016-05-01',
            //     name: '王小虎',
            //     address: '上海市普陀区金沙江路 1519 弄',
            //     take:'<i class="iconfont  icon-detail taskEntrance" value="132"></i><i class="iconfont icon-more active"></i>'
            // }, {
            //     date: '2016-05-03',
            //     name: '王小虎',
            //     address: '上海市普陀区金沙江路 1516 弄',
            //     take:'<i class="iconfont  icon-detail taskEntrance" value="132"></i><i class="iconfont icon-more active"></i>'
            // }
            ]
          }
      },

      created:function(){
         
        cicd.captionBar.caption = [
            {text:"Configure Manage",url:""},
            {text:"Project List",url:"/Projects"}
        ]
      },

      mounted:function(){
          this.tabledata();

      },

      methods: {
          tabledata(){
               this.$axios({
                   url:'api/ciapp-server/project/prjIntegration',
                   method:'POST'
                })
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                })
          }
         
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
        border-bottom: 10px solid #f7f7f7;
    }
    #projects .el-table tr{
        height: 55px;
    }
    #projects  .el-table th.is-leaf{
        background: #f7f7f7;
    }
    #projects .has-gutter{
         height: 50px;
        background: #f7f7f7;

    }
    #projects .el-table .cell{
        /* padding: 4px; */
        height: 31px;
        line-height: 31px;
    }
    #projects table i:hover {
        background-color: #fff;
    }
    #projects table i {
        width: 28px;
        height: 28px;
        font-size: 20px;
        color: #666;
        text-align: center;
        line-height: 28px;
        font-size: 12px;
        transition: all 0.5s;
        border-radius: 50%;
        margin-right: 10px;
        transition: all 0.5s;
        line-height: 31px;
    }
    
   
</style>
