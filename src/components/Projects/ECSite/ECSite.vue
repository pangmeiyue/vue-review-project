<template>
    <div class="container">
      <div class="container-top">
        <div class="footer-span"></div>
        <div class="container-top-left">
          <div class="left">
            <ol>
              <li>
                <dl class="display-block badge ml-10">
                  <dt>1</dt>
                  <dd>tasks</dd>
                </dl>
              </li>
              <li class="tmd">
                <img class="w50ps" src="../../../assets/icon_project-management.png" alt="" />
              </li>
              <li class="tmd color-black fs-17">
                Application Assets Platform
              </li>
              <li class="color-88 fs-13 tmd mt-30">
                <i class="iconfont">&#xe61c;</i>&nbsp;&nbsp;
                <span>Create time</span>&nbsp;&nbsp;
                <span class="color-black">2018-03-09</span>
              </li>

              <li class="color-88 fs-13 tmd mt-15">
                <i class="iconfont">&#xe658;</i>&nbsp;&nbsp;
                <span>Founder</span>&nbsp;&nbsp;&nbsp;&nbsp;
                <span class="color-black pos-rel left-15">Administrator</span>
              </li>
            </ol>
          </div>
          <div class="right"></div>
        </div>
        <dl class="container-top-right">
          <dt class="mt-15 ml-15 mr-15">
            <span class="fs-16 pos-rel top-5">Summary</span>&nbsp;&nbsp;
            <i class="iconfont color-99">&#xe663;</i>
            <span class="fs-10 float-right color-99">2018-05-30 00:00:00</span>
          </dt>
          <dd class="ml-15 mr-15">
            <ol class="ml-10 mr-10">
              <li class="mt-10">
                <h1 class="display-block fs-14 color-55">Compliance</h1>
                <div class="justfiy">
                  <dl class="float-left ml-15 mr-15 tmd">
                    <dt class="total-number h45">0</dt>
                    <dd class="fs-10 color-99">Total</dd>
                  </dl>
                  <dl class="float-left tmd">
                    <dt class="new-number h45">0</dt>
                    <dd class="fs-10 color-99">Added</dd>
                  </dl>
                  <dl class="float-left  ml-15 mr-15 tmd">
                    <dt class="no-number h45">0</dt>
                    <dd class="fs-10 color-99">Unsolved</dd>
                  </dl>
                </div>
              </li>
              <li class="mt-10">
                <h1 class="display-block fs-14 color-55">UTest</h1>
                <div class="justfiy">
                  <div class="tmd fs-12 UTestE ml-20 color-99">Success</div>
                  <div class="tmd fs-12 UTestE mr-20 color-99">Coverage</div>
                </div>
              </li>
              <li class="mt-10">
                <h1 class="display-block fs-14 color-55">Security</h1>
                <div class="justfiy">
                  <dl class="float-left ml-15 mr-15 tmd">
                    <dt class="total-number h45">0</dt>
                    <dd class="fs-10 color-99">Total</dd>
                  </dl>
                  <dl class="float-left tmd">
                    <dt class="new-number h45">0</dt>
                    <dd class="fs-10 color-99">Added</dd>
                  </dl>
                  <dl class="float-left  ml-15 mr-15 tmd">
                    <dt class="no-number h45">0</dt>
                    <dd class="fs-10 color-99">Unsolved</dd>
                  </dl>
                </div>
              </li>
            </ol>
          </dd>
        </dl>
      </div>
      <div class="container-bottom">
        <div class="ml-10 mr-10">
          <div class="taskBut">
            <div class="pos-rel top-85">
              <img src="../../../assets/add.png" alt="" /><br/>
              Create A New Task
            </div>
          </div>

          <dl class="platformCard">
              <dt class="h45 fs-18 ml-15 mr-15">
                <span >Asset Platform Manage Build</span>
              </dt>  
              <dd class="ml-15 mr-15">
                <ol>
                  <li class="justfiy">
                    <span class="fs-14">
                      <i class="iconfont fs-14 color-99">&#xe617;</i>
                      2018-03-09 16:11:28
                    </span>
                    <span>
                      <i class="iconfont fs-14 color-99">&#xe665;</i>
                      Executions 224
                    </span>
                  </li>

                  <li style="height:30px;">
                    <span class="fs-14 float-right">
                      <font class="color-green-1">In Operation</font>
                    </span>
                  </li>

                  <li class="color-55">
                    <table class="float-left ml-15" style="width:220px;">
                      <tr>
                        <td>
                          Unsolved <font class="color-red">( 0 )</font>
                        </td>
                        <td>
                          Security <font class="color-blue-1">( 0 )</font>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          Compliance <font class="color-blue-1">( 0 )</font>
                        </td>
                        <td>
                          Unit Test <font class="color-blue-1">( 0 )</font>
                        </td>
                      </tr>
                    </table>
                    <table class="float-right mr-15 tmd" style="width:65px;">
                      <tr>
                        <td class="fs-25 color-blue-1" style="border-bottom:1px solid #dbdbdb;">
                          22%
                        </td>
                      </tr>
                      <tr>
                        <td>
                          Success
                        </td>
                      </tr>
                    </table>
                  </li>

                  <li class="justfiy" style="width:100%;margin-top:15px;">
                    <img src="../../../assets/right.png" alt="" />
                    <img src="../../../assets/error.png" alt="" />
                    <img src="../../../assets/over.png" alt="" />
                    <img src="../../../assets/over.png" alt="" />
                  </li>
                </ol>
              </dd>
          </dl>

        </div>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'ECSite',

    data() {
      return {
        
      }
    },

    created: function () {

    },

    mounted: function () {

    },

    methods: {
      
    }
  }

</script>

<style lang="scss" scoped>

  .h45 {
    height:45px;
    line-height:45px;
  }

  .platformCard {
    float:left;
    width:348px;
    height:264px;
    margin-left:5px;
    margin-right:5px;
    border-radius: 5px;
    border:1px solid #dbdbdb;
  }

  @font-face {
        font-family: 'iconfont';
        src: url('../../../assets/font/iconfont.eot');
        src: url('../../../assets/font/iconfont.eot?#iefix') format('embedded-opentype'),
        url('../../../assets/font/iconfont.woff') format('woff'),
        url('../../../assets/font/iconfont.ttf') format('truetype'),
        url('../../../assets/font/iconfont.svg#iconfont') format('svg');
  }

  .iconfont {
	  font-family:"iconfont" !important;
	  font-size:16px;
	  font-style:normal;
	  -webkit-font-smoothing: antialiased;
	  -moz-osx-font-smoothing: grayscale;
	}

  .pos-rel {
    position:relative;
  }

  .tmd {
    text-align:center;
  }

  .justfiy {
    display: -webkit-box;
    display:-webkit-flex;
    display:-ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack:justify;
    justify-content: space-between;
  }

  .float-left {
    float:left;
  }

  .float-right{
    float:right;
  }

  .left-15 {
    left:15px;
  }

  .top-5 {
    top:5px;
  }

  .top-85 {
    top:85px;
  }

  .ml-10 {
    margin-left:10px;
  }

  .ml-15 {
    margin-left:15px;
  }

  .ml-20 {
    margin-left:20px;
  }

  .mr-20 {
    margin-right:20px;
  }

  .mr-10 {
    margin-right:10px;
  }

  .mr-15 {
    margin-right:15px;
  }

  .mt-10 {
    margin-top:10px;
  }

  .mt-15 {
    margin-top:15px;
  }

  .mt-30 {
    margin-top:30px;
  }

  .w60 {
    width:50px;
  }

  .w50ps {
    width:50%;
  }

  .h45 {
    height:45px;
    line-height:45px;
  }

  .fs-10 {
    font-size:10px;
  }

  .fs-12 {
    font-size:12px;
  }

  .fs-13 {
    font-size:13px;
  }

  .fs-14 {
    font-size:14px;
  }

  .fs-16 {
    font-size:16px;
  }

  .fs-17 {
    font-size:17px;
  }

  .fs-18 {
    font-size:18px;
  }

  .fs-25 {
    font-size:25px;
  }

  .float-right {
    float:right;
  }

  .color-black {
    color:#000;
  }

  .color-blue-1 {
    color:#2196f3;
  }

  .color-red {
    color:#d70303;
  }

  .total-number {
    color: #6ed4e8;
    font-family: MicrosoftYaHei Regular;
    font-size: 34px;
    margin: 0 auto;
    text-align: center;
  }

  .new-number {
    color: #feb74b;
    font-family: MicrosoftYaHei Regular;
    font-size: 34px;
    text-align: center;
  }

  .no-number {
    color: #20cb48;
    font-family: MicrosoftYaHei Regular;
    font-size: 34px;
    text-align: center;
  }

  .color-55 {
    color:#555;
  }

  .color-88 {
    color:#888;
  }

  .color-99 {
    color:#999;
  }

  .color-green-1 {
    color:#4a9900;
  }
  
  dl,dt,dd,ol,li {
    display:block;
    margin:0px;
    padding:0px;
    border:0px;
  }

  .display-block {
    display:block;
  }

  .container {
    
  }

  .container-top .container-top-left,
  .container-top .container-top-left .left,
  .container-top .container-top-left .right{
    float:left;
  }

  .container-top-right {
    position:absolute;
    left:837px;
  }

   .container-top .footer-span {
      position:absolute;
      z-index:999;
      left:0px;
      right:7px;
      height:11px;
      top:424px;
      background-image:url("../../../assets/icon_bg-line.png");
   }

  .container-top {
    width:1096px;
    height:428px;
    position: relative;
  }

  .container-top-left {
    position:relative;
    padding-top:15px;
    padding-bottom:15px;
    height:398px;
    background-color:#fff;
    border-radius:6px;
    width:836px;
  }

  .container-top-left .left {
    position:relative;
    width:249px;
    height:398px;
    border:1px solid #dbdde5;
  }

  .container-top-left .left .badge {
    position:relative;
    top:-5px;
    width:40px;
    height:52px;
    background-image:url("../../../assets/icon_tips.png");
    background-size:40px 52px;
    background-repeat: no-repeat;
    color:#fff;
    text-align:center;
    font-size:10px;
    line-height:13px;
  }

  .container-top-left .left .badge dt {
    padding-top:8px;
  }

  .container-top-left .left .badge dd {
    margin-left:-2px;
  }

  .container-top-left .right {
    width:584px;
    height:398px;
    border-top:1px solid #dbdde5;
    border-bottom:1px solid #dbdde5;
    border-right:1px solid #dbdde5;
    background: -webkit-linear-gradient(#e8f2fa, white,#e8f2fa);
  }

  .container-top-right {
    width:253px;
    height:428px;
    margin-left:5px;
    border:1px solid #dbdde5;
    border-radius:6px;
    background-color:#fff;
  }

  .container-top-right dt {
    border-bottom:1px solid #dbdbdb;
    height:35px;
  }

  .container-top-right dd ol li dl dt {
    height:auto;
  }

  .container-bottom {
    padding-top:20px;
    padding-bottom:20px;
    border-radius:6px;
    background-color:#fff;
    min-height:300px;
  }

  .UTestE{
    width:70px;
    height:70px;
    line-height:70px;
    border:1px solid #6ed4e8;
    border-radius:80px;
  }

  .taskBut {
    float:left;
    width:342px;
    height:264px;
    border: 2px dashed #acd9fd;
    border-radius: 8px;
    text-align:center;
    margin-right:5px;
  }

</style>
