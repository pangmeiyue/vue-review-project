<template>
   
    <el-row class="h100ps">
        <el-col :span="12" class="h100ps">
            <el-container class="h100ps">
                <el-main>
                    <div class="tmd mt-100">
                        <i class="iconfont login-logo">&#xe683;</i>
                    </div>
                    <el-row>
                        <el-col :span="12" class="align-left h64"> <i class="iconfont login-icon pull-left mr-10">&#xe699;</i>Continuous </el-col>
                        <el-col :span="12" class="align-right h64"> <i class="iconfont login-icon mr-10 pos-abs mr--60">&#xe695;</i>Continuous&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="12" class="align-left h64"> <i class="iconfont login-icon pull-left mr-10">&#xe696;</i>Continuous Publish </el-col>
                        <el-col :span="12" class="align-right h64"> <i class="iconfont login-icon mr-10 pos-abs mr--60">&#xe697;</i>Continuous Test</el-col>
                    </el-row>
                </el-main>

                <el-footer class="w50ps tmd footer">
                    @ 2017 Starbucks Corporation. All <br/> rights reserved.
                </el-footer>
            </el-container>
        </el-col>
        <el-col :span="12" class="bg-f7 h100ps">
            <el-container class="ml-50 mr-50">
                <el-header class="align-right display-block  fs-14 color-gray w100ps mt-10 bold-none">
                    Technical support | Contact us
                </el-header>
                <el-main>
                    <div class="tmd fs-50" style="border-bottom:1px solid #dbdbdb;height:110px;line-height:110px;">Login</div>

                    <div class="inputWrap">
                        <div class="login_label clear-float">
                            <i class="iconfont icon-yonghu">&#xe61e;</i> <span class="separator">|</span>
                            <input id=""  name="username" placeholder="Please enter your name" type="text">
                        </div>
                    </div>

                    <div class="inputWrap">
                        <div class="login_label clear-float">
                            <i class="iconfont icon-mima">&#xe61d;</i> <span class="separator">|</span>
                            <input id=""   name="password" placeholder="Please enter your password" type="password">
                        </div>
                    </div>

                    <div style="text-align: center;">
                        <input class="button" v-on:click="submitLogin" style="width: 100%; height: 50px;" value="Sign in">
                    </div>

                </el-main>
            
            </el-container>
        </el-col>
    </el-row>
     
</template>

<style>

    .inputWrap {
        border: 1px #dcdcdc solid;
        margin: 35px 0;
        background-color: white;
        height: 52px;
        line-height: 52px;
    }

    .clear-float {
        clear: both;
    }

    .login_label i {
        float: left;
        font-size: 30px;
        color: #8b8784;
        height: 52px;
        line-height: 52px;
        margin: 0 5px;
    }

    .separator {
        float: left;
        margin-right: 7px;
        font-size: 30px;
        color: #ccc5bd;
    }

    input {
        width: 250px;
        float: left;
        height: 40px;
        line-height: 40px;
        margin-top: 6px;
        font-size: 20px;
        border: 0;
        outline-width: 0px;
    }

    .button {
        background-color: #b89e79;
        font-size: 30px;
        color: white;
        text-align: center;
        cursor: pointer;
    }

    .display-block {
        display:block;
    }

    .bold-none {
        font-weight: inherit;
    }

    .w50ps {
        width:50%;
    }

    .w100ps {
        width:100%;
    }

    .footer {
        position:absolute;
        bottom:0px;
    }

    .iconfont {
        font-family:"iconfont" !important;
        font-size:16px;
        font-style:normal;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }

      @font-face {
        font-family: 'iconfont';
        src: url('../../assets/font/iconfont.eot');
        src: url('../../assets/font/iconfont.eot?#iefix') format('embedded-opentype'),
        url('../../assets/font/iconfont.woff') format('woff'),
        url('../../assets/font/iconfont.ttf') format('truetype'),
        url('../../assets/font/iconfont.svg#iconfont') format('svg');
    }

    .fs-14 {
        font-size:14px;
    }

    .fs-50 {
        font-size:50px;
    }

    .color-gray {
        color:gray;
    }

    .pos-abs {
        position:absolute;
    }

    .pos-rel {
        position:relative;
    }

    .bg-f7{
        background-color:#f7f7f7;
    }

    .mt-10 {
        margin-top:10px;
    }

    .mt-100 {
        margin-top:100px;
    }

    .mr--60 {
        margin-left:-60px;
    }

    .align-left {
        text-align:left;
    }

    .ml-50 {
        margin-left:50px;
    }

    .mr-50 {
        margin-right:50px;
    }

    .mr-10 {
        margin-right:10px;
    }

    .pull-left {
        float:left;
    }

    .align-right {
        text-align:right;
    }

    .tmd {
        text-align:center;
    }

    .h64 {
        height:64px;
        line-height:64px;
    }

    body,html {
        padding:0px;
        margin:0px;
        border:0px;
        height:100%;
    }

    .h100ps {
        height:100%;
    }

    .grid-content {
        border:1px solid #dbdbdb;
    }

    .login-logo {
        font-size:200px;
        color:#00653d;
    }

    .login-icon {
        font-size:50px;
        color:#00653d;
    }
</style>

<script>

    import Vue from 'vue'
 
    export default {
      name: 'Environment',

      data(){
          return {
            
          }
      },

      created:function(){

      },

      mounted:function(){

      },

      methods: {
        submitLogin(){

          this.$router.push({ path: '/Projects'});
        }
      }
    }
</script>