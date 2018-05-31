<template>
     <div id="compile">
         <h3>Create Compile Tool</h3>
        <div class="compile_form">
            <div class="compile_from_cont">
                <el-form ref="form" :model="form" label-width="130px" :rules="rules">
                    <el-form-item label="Type" prop="type_id">
                        <el-select v-model="form.type_id" placeholder="choose">
                         <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.name"
                            :value="item.type_id">
                        </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="Name" prop="build_name">
                        <el-input v-model="form.build_name"></el-input>
                    </el-form-item>
                    <el-form-item label="Port" prop="build_port">
                        <el-input v-model="form.build_port"></el-input>
                    </el-form-item>
                    <el-form-item label="User Name" prop="build_username">
                        <el-input v-model="form.build_username"></el-input>
                    </el-form-item>
                    <el-form-item label="Password" prop="build_pwd">
                        <el-input v-model="form.build_pwd"></el-input>
                    </el-form-item>
                    <el-form-item label="Address" prop="build_host">
                        <el-input v-model="form.build_host"></el-input>
                    </el-form-item>
                     <el-form-item label="Version" prop="build_version">
                    <el-input v-model="form.build_version"></el-input>
                </el-form-item> 
                <el-form-item>
                    <el-col :span="8">
                        <el-form-item label="Default" prop="is_default">
                            <el-switch v-model="form.is_default" size="mini"  active-color="#00653d"></el-switch>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="Status" prop="status" >
                            <el-switch v-model="form.status" size="mini"  active-color="#00653d"></el-switch>
                        </el-form-item>
                    </el-col>
                 </el-form-item> 
                </el-form>
            </div>
        </div>
        <div class="compile_form_foot">
            <el-button type="info" @click="onSubmit" plain>Confirm</el-button>
            <el-button  type="info" plain>Cancel</el-button>
        </div>
    </div>
    
</template>

<script>

    export default {
      name: 'Compile',

      data(){
          return {
              options:{},
             form: {
                type_id: '',
                build_name:'',
                build_port:'',
                build_username: '',
                build_pwd: '',
                build_host: '',
                build_version:'',
                is_default: false,
                status:true
              
            },
             rules: {
                build_name: [
                    { required: true, message: 'Please Choose Name', trigger: 'blur' },
                ],
                 build_port: [
                    { required: true, message: 'Please Input Prot', trigger: 'blur' }
                ],
                build_username: [
                    { required: true, message: 'Please Input User Name', trigger: 'blur' }
                ],
                build_pwd: [
                    { required: true, message: 'Please Input Password', trigger: 'blur' }
                ],
                build_host: [
                    { required: true, message: 'Please Input Address', trigger: 'blur' }
                ],
                
            }
          }
      },

      created:function(){
          this.selects()
         
          cicd.captionBar.caption = [
              {key:3,text:"Configure Manage",url:""},
              {key:4,text:"Project Configure",url:"/Compile"}
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
                   url:'api/ciapp-server/dict/typeTool_2',
                   method:'POST',
                })
                .then(function (response) {  
                    _this.options = response.data
                })
            },
            onSubmit() {
                let _this = this
                this.form.is_default = false ? 0 :1;
                this.form.status = false ? 0 :1;

                this.$axios({
                   url:'api/ciapp-server/systool/build_merge',
                   method:'POST',
                   data:this.form,
                })
                .then(function (response) {  
                     if(response.data.success == true){
                         _this.success(response.data.message)
                     }else{
                        _this.warning(response.data.message)
                     }
                })
                .catch(function (error) {
                    _this.err(error)
                })
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
#compile{
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
    .compile_form{
        width: 100%;
        min-height: 300px;
        height: auto !important;
        height: 300px;
        margin: 0 auto;
        background: #fff;
        .compile_from_cont{
            padding: 40px 20px;
        }
    }
    .compile_form_foot{
        width: 25%;
        height: 80px;
        margin: 20px auto;
    }

}
</style>


