<template>
  <div id="test">
    <div class="test_form">
      <h3>Create Test Tool</h3>
      <div class="test_from_cont">
        <el-form class="form" ref="form" :model="form" label-width="80px">
          <el-form-item label="Type">
            <el-select v-model="form.type_id" @change="changeOption">
              <el-option :key="key" v-for="(item,key) in addNames" :label="item.name" :value="item.name"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="Name" prop="unittest_name" :rules="[
          { required: true, message: '不能为空'}
        ]">
            <el-input v-model="form.unittest_name"></el-input>
          </el-form-item>
          <el-form-item label="端口" prop="unittest_port" :rules="[
          { required: true, message: '不能为空'}
        ]">
            <el-input v-model="form.unittest_port"></el-input>
          </el-form-item>
          <el-form-item label="地址" prop="unittest_host" :rules="[
          { required: true, message: '不能为空'}
        ]">
            <el-input v-model="form.unittest_host"></el-input>
          </el-form-item>
          <el-form-item label="用户名" prop="unittest_username" :rules="[
          { required: true, message: '不能为空'}
        ]">
            <el-input v-model="form.unittest_username"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="unittest_pwd" :rules="[
          { required: true, message: '不能为空'}
        ]">
            <el-input v-model="form.unittest_pwd"></el-input>
          </el-form-item>
          <el-form-item class="default" label="Default">
            <el-switch v-model="form.is_default" active-color="#00653d"></el-switch>
          </el-form-item>
          <el-form-item class="status" label="Status">
            <el-switch v-model="form.status" active-color="#00653d"></el-switch>
          </el-form-item>
          <el-form-item class="button-content">
            <el-button @click="onSubmit('form')">Confirm</el-button>
            <el-button>Cancel</el-button>
          </el-form-item>
        </el-form>
      </div>


    </div>
  </div>
</template>

<script>
  export default {
    name: 'test',

    data() {
      return {
        addNames: [],
        form: {
          unittest_name: '',
          unittest_port: '',
          unittest_host: '',
          unittest_username: '',
          unittest_pwd: '',
          is_default: false,
          status: true,
          type_id: '',
          sys_unittest_id: '',
          sysDict: {
            type_id: ''
          }
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
      this.getNames()
    },

    mounted: function () {

    },

    methods: {
      changeOption(val) {
        let obj = {};
        obj = this.addNames.find((item) => {
          return item.name === val
        });
        this.form.sysDict.type_id = obj.type_id
      },
      onSubmit(formName) {
        this.form.is_default = this.form.is_default ? 1 : 0;
        this.form.status = this.form.status ? 1 : 0
        this.$refs[formName].validate(valid => {
        if(valid){
        this.$axios({
          method: 'POST',
          url: 'api/ciapp-server/systool/unittest_merge',
          data: this.form
        }).then(res => {
            this.$message({
              message: res.data.message,
              iconClass: 'icon',
              center: true
            });
        })
        }else{
          return false
        }
        })
      },
      getNames() {
        this.$axios({
          method: 'POST',
          url: 'api/ciapp-server/dict/typeTool_5',
        }).then(response => {
          console.log(response)
          this.addNames = response.data
          this.typeId = response
          this.form.type_id = response.data[0].name
          this.form.sysDict.type_id = response.data[0].type_id
          // console.log(this.type_id)
        })
      }

    }
  }

</script>

<style lang="scss" scoped>
  #test {
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
    .test_form {
      width: 100%;
      min-height: 300px;
      height: auto !important;
      height: 300px;
      margin: 0 auto;
      background: #fff;
      .form {
        padding: 30px 30px;
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
  }

</style>
