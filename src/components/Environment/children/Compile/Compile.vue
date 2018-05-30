<template>
     <div id="compile">
         <h3>Create Compile Tool</h3>
        <div class="compile_form">
            <div class="compile_from_cont">
                <el-form ref="form" :model="form" label-width="130px" :rules="rules">
                    <el-form-item label="Type" prop="type">
                        <el-select v-model="form.type" placeholder="choose">
                        <el-option label="JENKINS" value="JENKINS"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="Name" prop="name">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                    <el-form-item label="Port" prop="port">
                        <el-input v-model="form.port"></el-input>
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
                     <el-form-item label="Version" prop="version">
                    <el-input v-model="form.version"></el-input>
                </el-form-item> 
                <el-form-item>
                    <el-col :span="8">
                        <el-form-item label="Default" prop="default">
                            <el-switch v-model="form.default" size="mini"  active-color="#00653d"></el-switch>
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
             form: {
                type: '',
                name:'',
                port:'',
                usename: '',
                password: '',
                address: '',
                version:'',
                default: false,
                status:true
              
            },
             rules: {
                name: [
                    { required: true, message: 'Please Choose Name', trigger: 'blur' },
                ],
                 port: [
                    { required: true, message: 'Please Input Prot', trigger: 'blur' }
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
              {key:4,text:"Project Configure",url:"/Compile"}
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


