<template>
    <div id="code">
       <h3>Create Code Bank Tool</h3>
       <div class="code_form">
           <div class="code_from_cont">
                <el-form ref="form" :model="form" label-width="130px" :rules="rules">
                <el-form-item label="Name" prop="name">
                    <el-select v-model="form.name" placeholder="choose">
                    <el-option label="GitLab" value="GitLab"></el-option>
                    <el-option label="GitHub" value="GitHub"></el-option>
                    </el-select>
                    
                </el-form-item>
                <el-form-item label="User Name" prop="usename">
                    <el-input v-model="form.usename"></el-input>
                </el-form-item>
                 <el-form-item label="Password" prop="password">
                    <el-input v-model="form.password"></el-input>
                </el-form-item>
                 <el-form-item label="Address" prop="address">
                    <el-input v-model="form.address"></el-input>
                </el-form-item>
                <template scope>
                    <div class="advanced">
                        <div class="advanced-set clearfix">
                            <span class="fl"></span>
                            <span class="fl"></span>
                            <a href="javascript:;" class="set">Advanced Settings<i class="iconfont icon-drop-down"></i></a>
                        </div>
                    </div>
                </template>
                <el-form-item label="Port" prop="port">
                    <el-input v-model="form.port"></el-input>
                </el-form-item>
                 <el-form-item label="Version" prop="version">
                    <el-input v-model="form.version"></el-input>
                </el-form-item> 
                 <el-form-item>
                    <el-col :span="8">
                        <el-form-item label="Default" prop="default">
                            <el-switch v-model="form.default" size="mini"></el-switch>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="SSL Encrypt" prop="sslencrypt" >
                            <el-switch v-model="form.sslencrypt" size="mini"></el-switch>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="Status" prop="status" >
                            <el-switch v-model="form.status" size="mini"></el-switch>
                        </el-form-item>
                    </el-col>
                 </el-form-item> 
                
                </el-form>
                
           </div>
       </div>
       <div class="code_form_foot">
            <el-button type="primary" @click="onSubmit">Confirm</el-button>
            <el-button>Cancel</el-button>
        </div>
    </div>
</template>

<script>

    export default {
      name: 'code',

      data(){
          return {
            form: {
                name: '',
                usename: '',
                password: '',
                address: '',
                port: '',
                version: '',
                default: false,
                sslencrypt: false,
                status:true
              
            },
             rules: {
                name: [
                    { required: true, message: 'Please Choose Name', trigger: 'change' },
                ],
                usename: [
                    { required: true, message: 'Please Input User Name', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: 'Please Input Password', trigger: 'blur' }
                ],
                address: [
                    { required: true, message: 'Please Input Address', trigger: 'blur' }
                ],
                
            }
          }
      },

      created:function(){
         
          cicd.captionBar.caption = [
              {key:3,text:"Configure Manage",url:""},
              {key:4,text:"Project Configure",url:"/Code"}
          ]
      },

      mounted:function(){

      },

      methods: {
            onSubmit() {
                console.log('submit!');
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
        margin: 20px auto;
    }

}

</style>


