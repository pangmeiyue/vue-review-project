<template>
  <div class="h100ps" @click="frameDown()">
    <el-container class="h100ps">

      <div class="jenkins_wrong_question" v-show="isShowLogPop" :class="{showLogPop:isShowLogPop,hideLogPop:!isShowLogPop}" @click.stop="()=>{}">
        <div class="wrong_question">
          <div class="question_content_title">LOG</div>
          <div class="question_content_content">
            <pre>{{logPopContent}}</pre>
          </div>
        </div>
      </div>

      <!--定义页头-->
      <el-header height="50px" class="bg-green-1 color-white lh-50 pd-none">
        <label class="fs-18 ml-50">
          CI & CD Platform
        </label>

        <!--下拉菜单-->
        <span class="logo pull-right mr-20 cursor-hand">
          <el-dropdown placement="top-start" trigger="click">
            <span class="color-white">
              <img class="logo mr-15 mt-10 pull-left" src="../../assets/logo.png" alt="" />管理员
            </span>

            <!--菜单项-->
            <el-dropdown-menu slot="dropdown" @click.native="logout">
              <el-dropdown-item>
                <font class="ml-10 color-green-1">·</font> Logout
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </span>
      </el-header>

      <el-container>
        <!--定义左侧侧边栏-->
        <el-aside width="240px" class="bg-white asideLeft">

          <!--页面导航-->
          <el-menu default-active="2" text-color="#3d3935" active-text-color="#2b8815" unique-opened router>
            <el-submenu :index="mainMenu.menuId+''" v-for="mainMenu in menuData" :key="mainMenu.menuId">

              <!--子菜单标题-->
              <template slot="title">
                <font class="iconfont fs-16" v-if="mainMenu.menuId == 54">&#xe639;</font>
                <font class="iconfont fs-16" v-if="mainMenu.menuId == 58">&#xe61f;</font>
                <span class="fs-15">{{mainMenu.menuName}}</span>
              </template>

              <!--菜单项-->
              <el-menu-item-group>
                <el-menu-item @click="goPath(subMenu)" :index="subMenu.menuId+''" class="fs-14" v-for="subMenu in mainMenu.subMenu" :key="subMenu.menuId">{{subMenu.menuName}}</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </el-aside>

        <!--定义内容区-->
        <el-main class="pos-rel pd-none main">

          <!--内容区头部-->
          <el-header height="44px" class="main-header captionBar">
            <el-breadcrumb separator="/" class="lh-44">
              <el-breadcrumb-item v-for="item in caption" :to="{path: item.url}" :key="item.key">{{item.text}}</el-breadcrumb-item>
            </el-breadcrumb>
          </el-header>

          <router-view class="Router"></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
  import Vue from 'vue'
  import Bus from "../../common/Bus";
  import {login,getInfo,logout,updatePassword} from '../../api/login';
  import {getToken, getRefreshToken, setToken, removeToken} from '../../utils/token';
  export default {
    name: 'App',

    data() {
      return {
        caption: "",
        isShowLogPop: false,
        logPopContent: "",
        menuData: []
      }
    },

    created() {

      var self = this;
      cicd.captionBar = this;
      cicd.logPop = this;

      this.$axios.post('/api/menuList').then(function (res) {
        self.menuData = res.data;
      })

      /*--菜单数据模拟结束--*/
    },

    mounted() {


    },

    methods: {
      logout() {
        this.$confirm('确定注销登录?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          return new Promise((resolve, reject) => {
            let access_token = getToken()
            let refresh_token = getRefreshToken()
            console.log(access_token,refresh_token)
            logout(access_token,refresh_token).then((response) => {
              console.log(response)
              if (response.data.status) {
                removeToken();
                console.log(this)
                this.$router.push({
                  path: '/'
                })
                resolve();
              }
            }).catch(error => {
              reject(error);
            });
          });
          // this.$axios({
          //   method: 'POST',
          //   url: 'auth/removeToken',
          //   params: { 
          //     accessToken:Bus.$data.access_token,
          //     refreshToken: Bus.$data.refresh_token
          //   }
          // }).then(res=>{
          //   this.$router.push({
          //     path: '/'
          //   })
          // })

        }).catch((res) => {
          // console.log('aaaa',JSON.parse(localStorage.getItem('key')))
          console.log(res)
        });
      },
      frameDown() {
        this.isShowLogPop = false;
      },

      goPath(menu) {

        if (menu.menuId == 89) {
          this.$router.push({
            path: '/Projects'
          });
        } else if (menu.menuId == 90) {
          this.$router.push({
            path: '/Configure'
          });
        } else if (menu.menuId == 59) {
          this.$router.push({
            path: '/Environment'
          });
        }
      }
    }
  }

</script>

<style lang="scss">
  @font-face {
    font-family: 'iconfont';
    src: url('../../assets/font/iconfont.eot');
    src: url('../../assets/font/iconfont.eot?#iefix') format('embedded-opentype'),
    url('../../assets/font/iconfont.woff') format('woff'),
    url('../../assets/font/iconfont.ttf') format('truetype'),
    url('../../assets/font/iconfont.svg#iconfont') format('svg');
  }

  .iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .Router {
    margin-top: 50px;
    padding-left: 15px;
    padding-right: 15px;
  }

  /*-----------------------------logo样式开始------------------------------*/

  .logo img {
    width: 30px;
    height: 30px;
  }

  .logo font {
    position: relative;
    top: -10px;
    margin-right: 30px;
  }

  /*-----------------------------logo样式结束------------------------------*/

  /*--------------------------定制下拉菜单样式开始---------------------------*/

  .el-popper[x-placement^=bottom] .popper__arrow {
    display: none;
  }

  .el-dropdown-menu.el-popper {
    top: 50px !important;
    margin: 0px !important;
    padding: 0px !important;
    border-radius: 0px 0px 4px 4px !important;
  }

  .el-dropdown-menu__item {
    padding: 0px;
    padding-right: 40px;
  }

  /*--------------------------定制下拉菜单样式结束---------------------------*/

  /*--
    定义标题栏样式
  --*/

  .captionBar {
    position: fixed;
    z-index: 999;
    width: 100%;
    background-color: #eee;
    color: #707070;
    line-height: 44px;
    padding-left: 15px;
  }


  /*--------------------------定制左侧导航样式开始---------------------------*/

  .asideLeft .el-submenu__title {
    height: 47px;
    line-height: 47px;
  }

  .asideLeft .el-submenu .el-menu-item {
    height: 38px;
    line-height: 38px;
    background-color: #fff;
  }

  .el-menu-item-group__title {
    display: none;
  }

  .navItemAnimation {
    border-left: 3px solid #2b8815;
  }

  /*导航动画过程*/

  @keyframes navItemAnimation {
    from {
      border-left: 0px;
    }
    to {
      border-left: 3px solid #2b8815;
    }
  }

  @-webkit-keyframes navItemAnimation {
    from {
      border-left: 0px;
    }
    to {
      border-left: 3px solid #2b8815;
    }
  }

  .asideLeft .is-opened .el-submenu__title {
    color: #2b8815 !important;
    background-color: #f7f7f7;
    animation-iteration-count: 0;
    animation: spreadDelBut 0.2s;
    -webkit-animation: navItemAnimation 0.2s;
    border-left: 3px solid #2b8815;
  }

  .asideLeft .el-menu-item-group li:hover {
    animation-iteration-count: 0;
    animation: spreadDelBut 0.5s;
    -webkit-animation: navItemAnimation 0.2s;
    border-left: 3px solid #2b8815;
  }

  .asideLeft .el-menu-item.is-active {
    border-left: 3px solid #2b8815;
  }

  /*--------------------------定制左侧导航样式结束---------------------------*/

  .jenkins_wrong_question {
    position: fixed;
    top: 0;
    right: 0;
    margin: 0 auto;
    float: right;
    width: 0;
    height: 100%;
    z-index: 999999;
    background-color: #ffffff;
    box-shadow: -10px 0 10px rgba(102, 102, 102, 0.35);
  }

  .jenkins_wrong_question {
    overflow: auto;
  }

  .jenkins_wrong_question .wrong_question {
    margin: inherit;
    padding-top: 20px;
    border-radius: 0px;
    height: 97%;
    width: 97%;
  }

  .jenkins_wrong_question .wrong_question .question_content_title {
    text-align: center;
    font-size: 30px;
    padding-top: 10px;
  }

  .jenkins_wrong_question .wrong_question .question_content_content {
    margin-top: 50px;
  }

  pre {
    display: block;
    padding: 9.5px;
    margin: 0 0 10px;
    font-size: 13px;
    line-height: 1.42857143;
    color: #333;
    word-break: break-all;
    word-wrap: break-word;
    background-color: #f5f5f5;
    border: 1px solid #ccc;
    border-radius: 4px;
    overflow-x: hidden;
  }

  .showLogPop {
    animation-iteration-count: 0;
    animation: logPopShowAnimation 1s;
    -webkit-animation: logPopShowAnimation 1s;
    width: 60%;
  }

  @keyframes logPopShowAnimation {
    from {
      width: 0px;
    }
    to {
      width: 60%
    }
  }

  @-webkit-keyframes logPopShowAnimation {
    from {
      width: 0px;
    }
    to {
      width: 60%
    }
  }

  .hideLogPop {
    animation-iteration-count: 0;
    animation: logPopShowAnimation 1s;
    -webkit-animation: logPopShowAnimation 1s;
    width: 0px;
  }

  @keyframes logPopHideAnimation {
    from {
      width: 60%
    }
    to {
      width: 0px;
    }
  }

  @-webkit-keyframes logPopHideAnimation {
    from {
      width: 60%
    }
    to {
      width: 0px;
    }
  }

</style>
