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
                   <i class="el-icon-edit-outline" @click="tap(scope.row.prj_id)"></i>
                    <router-link tag="i"  :to="{path:'/Projects/EC',query: {name: scope.row.prj_id}}" class="el-icon-tickets"></router-link>
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
            tableData: [],
            props: ['id'],
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
              let _this = this
               this.$axios({
                   url:'api/ciapp-server/project/prjIntegration',
                   method:'POST'
                })
                .then(function (response) {
                     _this.tableData = response.data;                      
                })
                .catch(function (error) {
                    console.log(error);
                })
          },
          tap(data){
            console.log('1221',data)
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
