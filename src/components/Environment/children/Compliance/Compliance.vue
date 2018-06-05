<template>
  <div id="compliance">
    <div class="compliance_form">
      <h3>Create Compliance Review Tool</h3>
      <div class="compliance_from_cont">
        <el-form class="form" ref="validateForm" :model="validateForm" label-width="100px">
          <el-form-item label="Name" prop="comp_name" :rules="[
          { required: true, message: '不能为空'}
        ]">
            <el-select v-model="validateForm.comp_name" placeholder="请选择活动区域">
              <el-option :key="key" v-for="(item,key) in addNames" :label="item.name" :value="item.name"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="Port" prop="comp_port" :rules="[
          { required: true, message: 'Please Input Port'}
        ]">
            <el-input v-model="validateForm.comp_port"></el-input>
          </el-form-item>
          <el-form-item label="User Name" prop="comp_username" :rules="[
          { required: true, message: 'Please Input User Name'}
        ]">
            <el-input v-model="validateForm.comp_username"></el-input>
          </el-form-item>
          <el-form-item label="Password" prop="comp_pwd" :rules="[
          { required: true, message: 'Please Input Password'}
        ]">
            <el-input v-model="validateForm.comp_pwd"></el-input>
          </el-form-item>
          <el-form-item label="Address" prop="comp_host" :rules="[
          { required: true, message: 'Please Input Address'}
        ]">
            <el-input v-model="validateForm.comp_host"></el-input>
          </el-form-item>
          <el-form-item label="Version">
            <el-input v-model="validateForm.comp_version"></el-input>
          </el-form-item>
          <el-form-item class="default" label="Default">
            <el-switch v-model="validateForm.is_default" active-color="#00653d"></el-switch>
          </el-form-item>
          <el-form-item class="status" label="Status">
            <el-switch v-model="validateForm.status" active-color="#00653d"></el-switch>
          </el-form-item>
          <el-form-item class="button-content">
            <el-button @click="onSubmit('validateForm')">Confirm</el-button>
            <el-button>Cancel</el-button>
          </el-form-item>
        </el-form>
      </div>


    </div>
  </div>
</template>

<script>
  export default {
    name: 'compliance',

    data() {
      return {
        addNames: [], //Names
        validateForm: {
          comp_name: 'SONAR',
          comp_port: '',
          comp_host: '',
          comp_username: '',
          comp_pwd: '',
          comp_version: '',
          is_default: false,
          status: true,
          sysDict: {
            type_id: '12'
          },
          sys_comp_tool_id: ''
        }
      }
    },

    created: function () {

      cicd.captionBar.caption = [{
          key: 3,
          text: "Configure Manage",
          url: ""
        },
        {
          key: 4,
          text: "Project Configure",
          url: "/Test"
        }
      ]
      this.$nextTick(function () {
        let scroll = document.getElementsByClassName('el-main main')[0].scrollTop
        document.getElementsByClassName('el-main main')[0].scrollTop = 0
      })
      //获取Name
      this.getNames()
    },

    mounted: function () {

    },

    methods: {
      onSubmit(formName) {
        this.validateForm.is_default = this.validateForm.is_default ? 1 : 0;
        this.validateForm.status = this.validateForm.status ? 1 : 0
        console.log(this.validateForm)
        this.$refs[formName].validate(valid => {
          if (valid) {
            this.$axios({
              method: 'POST',
              url: 'api/ciapp-server/systool/compliance_merge',
              data: this.validateForm
            }).then(res => {
              if(res.data.success == false){
                this.$message({
                  message: res.data.message,
                  iconClass: 'icon',
                  center : true
                });
              }
            })
          } else {
            return
          }
        })
      },
      getNames() {
        this.$axios({
          method: 'POST',
          url: 'api/ciapp-server/dict/typeTool_3',
        }).then(reponse => {
          console.log(reponse)
          this.addNames = reponse.data
          this.typeId = reponse
        })
      },
      //提示框
      openMessageBox(message, type) {
        console.log('type', type)
        this.$alert(message, "提示", {
          confirmButtonText: "确定",
          type: type
        });
      }

    }
  }

</script>

<style lang="scss" scoped>
  #compliance {
    min-width: 80%;
    min-height: 320px;
    height: auto !important;
    height: 320px;
    margin-left: 60px;
    h3 {
      width: 100%;
      height: 70px;
      line-height: 70px;
      font-weight: 600;
      font-size: 18px;
      color: #555;
      text-align: center;
    }
    .compliance_form {
      width: 100%;
      min-height: 300px;
      height: auto !important;
      height: 300px;
      margin: 0 auto;
      background: #fff;
      .form {
        padding: 30px 30px;
        border-radius: 2px;
        min-width: 850px;
        .default,
        .status {
          display: inline-block;
          width: 49%;
        }
        .button-content {
          text-align: center;
        }
      }
      .code_from_cont {
        padding: 30px 20px;
      }

    }
    .el-select {
      margin-left: 0px;
    }
    .el-form-item__content .el-switch__core {
      border-color: #37BD28;
      background-color: #37BD28;
    }
  }

</style>
