<template>
    <el-container height="100%" class="page-body">

        <!--定义页头-->
        <el-header height="50px">
        <label class="fs-18 ml-50">
            CI & CD Platform
        </label>
        
        <span class="logo pull-right">
            <el-dropdown placement="top-start" trigger="click">
            <span class="el-dropdown-link">
                <img class="logo mr-15" src="../../assets/logo.png" alt="" style="position:relative;float:left;" />管理员
            </span>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>
                <font style="color:#2b8815;margin-left:10px;">·</font> Logout</el-dropdown-item>
            </el-dropdown-menu>
            </el-dropdown>
        </span>

        </el-header>
        <el-container>

        <!--定义侧边栏导航区-->
        <el-aside width="240px" class="asideLeft">
            <el-menu default-active="2" text-color="#3d3935" active-text-color="#2b8815" unique-opened router>
                <el-submenu index="1" v-for="mainMenu in menuData" :key="mainMenu.menuId">
                    <template slot="title">
                      <font class="iconfont fs-16" v-if="mainMenu.menuId == 54">&#xe639;</font>
                      <font class="iconfont fs-16" v-if="mainMenu.menuId == 58">&#xe61f;</font>
                      <span class="fs-15">{{mainMenu.menuName}}</span>
                    </template>
                    <el-menu-item-group>
                        <el-menu-item @click="goPath(subMenu)" index="" class="fs-14" v-for="subMenu in mainMenu.subMenu" :key="subMenu.menuId">{{subMenu.menuName}}</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
            </el-menu>
        </el-aside>
        

        <!--定义内容区-->
        <el-main class="main">
            
            <el-header height="44px" class="main-header captionBar">
                <el-breadcrumb separator="/" class="lh-44">
                <el-breadcrumb-item v-for="item in caption" :to="{path: item.url}" :key="item.key">{{item.text}}</el-breadcrumb-item>
                </el-breadcrumb>
            </el-header>

            <el-container height="100%">
            
                <router-view class="Router"></router-view>
                
            </el-container>
        </el-main>

        </el-container>
    </el-container>
</template>

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
	  font-family:"iconfont" !important;
	  font-size:16px;
	  font-style:normal;
	  -webkit-font-smoothing: antialiased;
	  -moz-osx-font-smoothing: grayscale;
	}

  /*
    reset body html标签样式
  */
  body,html {
    margin:0px;
    border:0px;
    padding:0px;
    height:100%;
  }

  /*
    定义页面样式
  */
  .page-body {
    height:100%;
  }

  /*
    定义页头样式
  */
  .el-header{
    background-color: #006342;
    color:#fff;
    line-height:50px;
    padding:0px;
  }

  .main {
    position:relative;
  }

  /*
    侧边栏样式
  */
  .el-aside {
    background-color: #fff;
  }
  
  /*
    main标签样式
  */
  .el-main {
    background-color: #E9EEF3;
    padding:0px;
  }

  .fs-12 {
    font-size:12px;
  }

  .fs-16 {
    font-size:16px;
  }

  .fs-15 {
    font-size:15px;
  }
  
  .fs-14 {
    font-size:14px;
  }

  .fs-18 {

    font-size:18px;
  }

  .lh-44 {

    line-height:44px;
  }

  .ml-50 {

    margin-left:50px;
  }

  .mr-15 {

    margin-right:15px;
  }

  .pull-right {
    float:right;
  }

  .logo {
    cursor:pointer;
    margin-right:20px;
  }

  .logo img{

    width:30px;
    height:30px;
    margin-top:10px;
  }

  .logo font{

    position:relative;
    top:-10px;
    margin-right:30px;
  }

  .header-menu .el-submenu__title {
    height:47px !important;
    line-height:47px !important;
    background-color:#006342;
    color:#fff !important;
    border:0px !important;
  }
  
  .asideLeft .el-submenu__title {

    height:47px;
    line-height:47px;
  }

  .asideLeft .el-submenu .el-menu-item {

    height:38px;
    line-height:38px;
    background-color:#fff;
  }

  .asideLeft .el-menu-item-group__title {
    display:none;
  }

  .navItemAnimation {
    border-left:3px solid #2b8815;
  }

  /*删除按钮显示过程动程*/
    @keyframes navItemAnimation
    {
        from {border-left:0px;}
        to {border-left:3px solid #2b8815;}
    }
    @-webkit-keyframes navItemAnimation
    {
        from {border-left:0px;}
        to {border-left:3px solid #2b8815;}
    }

  .asideLeft .is-opened .el-submenu__title {
    color:#2b8815 !important;
    background-color: #f7f7f7;
    
    animation-iteration-count:0;
    animation:spreadDelBut 0.2s ;
    -webkit-animation:navItemAnimation 0.2s ;
    border-left:3px solid #2b8815;
  }

  .asideLeft .el-menu-item-group li:hover {
    animation-iteration-count:0;
    animation:spreadDelBut 0.5s ;
    -webkit-animation:navItemAnimation 0.2s ;
    border-left:3px solid #2b8815;
  }

  .asideLeft .el-menu-item.is-active {

    animation-iteration-count:0;
    animation:spreadDelBut 0.5s ;
    -webkit-animation:navItemAnimation 0.2s ;
    border-left:3px solid #2b8815;
  }

  .logo .el-dropdown-link {
    color:#fff;
  }

  .el-popper[x-placement^=bottom] .popper__arrow {
    display:none;
  }

  .el-dropdown-menu.el-popper {
    top:50px !important;
    margin:0px !important;
    padding:0px !important;
    border-radius: 0px  0px  4px 4px !important;
  }

  .el-dropdown-menu__item {
    padding:0px;
    padding-right:40px;
  }

  
  .captionBar {
    // position:absolute;
    position: fixed;
    z-index: 999;
    width:100%;
    background-color:#f7f7f7;
    color:#707070;
    line-height:44px;
    padding-left:15px;
  }

 
  .Router {
    margin-top:50px;
    padding-left:15px;
  }
</style>

<script>
    import Vue from 'vue'
    import axios from 'axios'
    import qs from 'qs'

    export default {
      name: 'App',

      data(){
          return {
            caption:"",
            menuData:[]
          }
      },

      created:function(){
       
        var self = this;
        cicd.captionBar = this;


        /*--菜单数据模拟开始--*/
        // 菜单json数据
        var menuDataJSON = '[{"menuId":54,"noId":null,"parentNoId":null,"isHome":null,"isVisible":null,"orderId":null,"menuIcon":"icon-LB","menuName":"CI","menuLink":"#","subMenu":[{"menuId":89,"noId":null,"parentNoId":null,"isHome":null,"isVisible":null,"orderId":null,"menuIcon":"","menuName":"Projects","menuLink":"/ciapp-server/ci/view__project_list","subMenu":[]},{"menuId":90,"noId":null,"parentNoId":null,"isHome":null,"isVisible":null,"orderId":null,"menuIcon":"","menuName":"Configure","menuLink":"/ciapp-server/ci/view__project-management","subMenu":[]},{"menuId":59,"noId":null,"parentNoId":null,"isHome":null,"isVisible":null,"orderId":null,"menuIcon":"","menuName":"Environment","menuLink":"/ciapp-server/ci/view__platform-configuration","subMenu":[]}]},{"menuId":58,"noId":null,"parentNoId":null,"isHome":null,"isVisible":null,"orderId":null,"menuIcon":"icon-install","menuName":"CD","menuLink":"#","subMenu":[{"menuId":60,"noId":null,"parentNoId":null,"isHome":null,"isVisible":null,"orderId":null,"menuIcon":"","menuName":"Workflow","menuLink":"cd-server/toPage/workflow|availableList","subMenu":[]},{"menuId":92,"noId":null,"parentNoId":null,"isHome":null,"isVisible":null,"orderId":null,"menuIcon":"","menuName":"History","menuLink":"cd-server/toPage/workflow|historyList","subMenu":[]},{"menuId":91,"noId":null,"parentNoId":null,"isHome":null,"isVisible":null,"orderId":null,"menuIcon":"","menuName":"Inventory","menuLink":"cd-server/inventory/listPage","subMenu":[]}]}]';
        
        // 定时器500毫秒获取数据
        setTimeout(function(){
          
          self.menuData = JSON.parse(menuDataJSON);
        },500)
        /*--菜单数据模拟结束--*/
      },

      mounted:function(){

          
      },

      methods: {
        
        goPath:function(menu) {

          if (menu.menuId == 89) {
            this.$router.push({ path: 'Projects'});
          } else if(menu.menuId == 90) {
            this.$router.push({ path: 'Configure'});
          } else if(menu.menuId == 59) {
            this.$router.push({ path: 'Environment'});
          }
        }
      }
    }
</script>