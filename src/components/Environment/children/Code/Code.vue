<template>
    <div id="code">
       <h3>Create Code Bank Tool</h3>
       <div class="code_form">
           <div class="code_from_cont">
                <el-form ref="form" :model="form" label-width="130px" :rules="rules">
                <el-form-item label="Name" prop="code_tool_name">
                    <el-select v-model="form.code_tool_name" placeholder="choose">
                    <!-- <el-option label="GitLab" value="GitLab"></el-option>
                    <el-option label="GitHub" value="GitHub"></el-option> -->
                    <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.name"
                            :value="item.type_id">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="User Name" prop="code_tool_username">
                    <el-input v-model="form.code_tool_username"></el-input>
                </el-form-item>
                 <el-form-item label="Password" prop="code_tool_pwd">
                    <el-input v-model="form.code_tool_pwd"></el-input>
                </el-form-item>
                 <el-form-item label="Address" prop="code_tool_host">
                    <el-input v-model="form.code_tool_host"></el-input>
                </el-form-item>
                <template scope>
                    <div class="advanced">
                        <div class="advanced-set clearfix">
                            <span class="fl"></span>
                            <span class="fl"></span>
                            <a href="javascript:;" class="set" @click="toggleform">Advanced Settings<i  v-bind:class="arrow"></i></a>
                        </div>
                    </div>
                </template>
                <div class="advancedform" v-show="ok">
                    <el-form-item label="Port" prop="code_tool_port">
                        <el-input v-model="form.code_tool_port"></el-input>
                    </el-form-item>
                    <el-form-item label="Version" prop="code_tool_version">
                        <el-input v-model="form.code_tool_version"></el-input>
                    </el-form-item> 
                    <el-form-item>
                        <el-col :span="8">
                            <el-form-item label="Default" prop="is_default">
                                <el-switch v-model="form.is_default" size="mini" active-color="#00653d"></el-switch>
                            </el-form-item>
                        </el-col>
                        <el-col :span="8">
                            <el-form-item label="SSL Encrypt" prop="is_ssl" >
                                <el-switch v-model="form.is_ssl" size="mini"  active-color="#00653d"></el-switch>
                            </el-form-item>
                        </el-col>
                        <el-col :span="8">
                            <el-form-item label="Status" prop="status" >
                                <el-switch v-model="form.status" size="mini"  active-color="#00653d"></el-switch>
                            </el-form-item>
                        </el-col>
                    </el-form-item> 
                </div>
                </el-form>
                
           </div>
       </div>
       <div class="code_form_foot">
            <el-button type="info" @click="onSubmit" plain>Confirm</el-button>
            <el-button  type="info" plain>Cancel</el-button>
        </div>
    </div>
</template>

<script>

    export default {
      name: 'code',

      data(){
          return {
            options:{},
            form: {
                code_tool_name: '',
                code_tool_username: '',
                code_tool_pwd: '',
                code_tool_host: '',
                code_tool_port: '',
                code_tool_version: '',
                is_default: false,
                is_ssl: false,
                status:true
              
            },
             rules: {
                code_tool_name: [
                    { required: true, message: 'Please Choose Name', trigger: 'change' },
                ],
                code_tool_username: [
                    { required: true, message: 'Please Input User Name', trigger: 'blur' }
                ],
                code_tool_pwd: [
                    { required: true, message: 'Please Input Password', trigger: 'blur' }
                ],
                code_tool_host: [
                    { required: true, message: 'Please Input Address', trigger: 'blur' }
                ],
                
            },
            ok:false,
            arrow:" el-icon-arrow-down"
          }
      },

      created:function(){
         this.selects()
          cicd.captionBar.caption = [
              {key:3,text:"Configure Manage",url:""},
              {key:4,text:"Project Configure",url:"/Code"}
          ],
           this.$nextTick(function () {
                let scroll = document.getElementsByClassName('el-main main')[0].scrollTop
                document.getElementsByClassName('el-main main')[0].scrollTop = 0
            })
        },

      mounted:function(){

      },

      methods: {
           selects(){
                 let _this = this
                this.$axios({
                   url:'api/ciapp-server/dict/typeTool_1',
                   method:'POST',
                })
                .then(function (response) {  
                    console.log(response)
                    _this.options = response.data
                })
            },
            onSubmit() {
                let _this = this
                this.form.is_default = false ? 0 :1;
                this.form.is_ssl = false ? 0 :1;
                this.form.status = false ? 0 :1;

                this.$axios({
                   url:'api/ciapp-server/systool/code_merge',
                   method:'POST',
                   data:this.form,
                })
                .then(function (response) {    
                     if(response.data.success == true){
                         _this.success(response.data.message)
                     }else{
                         debugger
                        _this.warning(response.data.message)
                     }
                })
                .catch(function (error) {
                    _this.err(error)
                })
            },
            toggleform(){
                
                if(this.ok==true){
                    // 折叠
                    this.arrow = "el-icon-arrow-down"
                    this.ok=false
                }else{
                    // 展示
                    this.arrow = "el-icon-arrow-up"
                    this.ok=true
                }

            },
            msg(msg) {
                this.$message({
                    showClose: true,
                    message: msg
                });
            },
            success(msg) {
               this.$message({
                    showClose: true,
                    message: msg,
                    type: 'success'
                });
            },

            warning(msg) {
                this.$message({
                    showClose: true,
                    message: msg,
                    type: 'warning'
                });
            },

            err(msg) {
              this.$message({
                    showClose: true,
                    message: msg,
                    type: 'error'
                });
            }

        
      }
    }
</script>

<style lang="scss" scoped>
#code{
    width: 90%;
    min-height: 320px;
    height: auto !important;
    height: 320px;
    margin: 50px auto;
    h3{
        width: 100%;
        height: 70px;
        line-height: 70px;
        font-weight: 600;
        font-size: 18px;
        color: #555;
        text-align: center;
    }
    .code_form{
        width: 100%;
        min-height: 300px;
        height: auto !important;
        height: 300px;
        margin: 0 auto;
        background: #fff;
        .code_from_cont{
            padding: 40px 20px;
            .advancedform{
                width: 100%;
                height: 155px;
            }
        }
      
        .advanced{
            width: 98%;
            height: 30px;
            padding: 10px 10px;
        }
        .advanced-set {
            margin: 20px 0;
            text-align: center;
            position: relative;
            clear: both;
            span {
                display: inline-block;
                width: 50%;
                height: 1px;
                background-color: #ccc;
                vertical-align: middle;
            }
            a {
                font-family: "PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
                color: #333;
                display: inline-block;
                position: absolute;
                left: 50%;
                top: 50%;
                -webkit-transform: translate(-50%,-50%);
                -moz-transform: translate(-50%,-50%);
                -o-transform: translate(-50%,-50%);
                -ms-transform: translate(-50%,-50%);
                transform: translate(-50%,-50%);
                background-color: #fff;
                padding: 0 15px;
                i {
                    display: inline-block;
                    font-size: 14px;
                    margin-left: 10px;
                }
            }
        }

    }
    .code_form_foot{
        width: 25%;
        height: 80px;
        margin: 21px auto;
    }

}

</style>


