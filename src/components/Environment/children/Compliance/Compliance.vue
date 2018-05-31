<template>
  <div id="compliance">
    <div class="compliance_form">
      <h3>Create Compliance Review Tool</h3>
      <div class="compliance_from_cont">
        <el-form class="form" ref="form" :model="form" label-width="100px">
          <el-form-item label="Name">
            <el-select v-model="form.name" placeholder="请选择活动区域">
              <el-option label="option1" value="option1"></el-option>
              <el-option label="option2" value="option2"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="Port">
            <el-input v-model="form.port"></el-input>
          </el-form-item>
          <el-form-item label="User Name">
            <el-input v-model="form.username"></el-input>
          </el-form-item>
          <el-form-item label="Password">
            <el-input v-model="form.password"></el-input>
          </el-form-item>
           <el-form-item label="Address">
            <el-input v-model="form.address"></el-input>
          </el-form-item>
          <el-form-item label="Version">
            <el-input v-model="form.version"></el-input>
          </el-form-item>
          <el-form-item class="default" label="Default">
            <el-switch v-model="form.default" active-color="#00653d"></el-switch>
          </el-form-item>
          <el-form-item class="status" label="Status">
            <el-switch v-model="form.status" active-color="#00653d"></el-switch>
          </el-form-item>
          <el-form-item class="button-content">
            <el-button  @click="onSubmit">Confirm</el-button>
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
        form: {
          name: '',
          port: '',
          address: '',
          username: '',
          password: '',
          version: '',
          default: false,
          status: true,
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
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
    },

    mounted: function () {

    },

    methods: {
      onSubmit() {
        console.log('submit!');
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
        .button-content{
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
