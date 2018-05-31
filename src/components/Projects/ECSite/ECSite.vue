<template>
    <div class="container">

      <!--页面上半部-->
      <div class="container-top">

        <!--分界条-->
        <div class="footer-span"></div>

        <!--上半部分左侧区-->
        <div class="container-top-left">
          
          <!--左部-->
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

          <!--右部-->
          <div class="right"></div>
        </div>

        <!--上半部分右侧区-->
        <dl class="container-top-right">

          <!--区域标题-->
          <dt class="mt-15 ml-15 mr-15">
            <span class="fs-16 pos-rel top-5">Summary</span>&nbsp;&nbsp;
            <i class="iconfont color-99">&#xe663;</i>
            <span class="fs-10 pull-right color-99">2018-05-30 00:00:00</span>
          </dt>

          <!--区域内容-->
          <dd class="ml-15 mr-15">
            <ol class="ml-10 mr-10">

              <li class="mt-10">
                <h1 class="display-block fs-14 color-55">Compliance</h1>
                <div class="justfiy">
                  <dl class="pull-left ml-15 mr-15 tmd">
                    <dt class="total-number h45">0</dt>
                    <dd class="fs-10 color-99">Total</dd>
                  </dl>
                  <dl class="pull-left tmd">
                    <dt class="new-number h45">0</dt>
                    <dd class="fs-10 color-99">Added</dd>
                  </dl>
                  <dl class="pull-left  ml-15 mr-15 tmd">
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
                  <dl class="pull-left ml-15 mr-15 tmd">
                    <dt class="total-number h45">0</dt>
                    <dd class="fs-10 color-99">Total</dd>
                  </dl>
                  <dl class="pull-left tmd">
                    <dt class="new-number h45">0</dt>
                    <dd class="fs-10 color-99">Added</dd>
                  </dl>
                  <dl class="pull-left  ml-15 mr-15 tmd">
                    <dt class="no-number h45">0</dt>
                    <dd class="fs-10 color-99">Unsolved</dd>
                  </dl>
                </div>
              </li>
            </ol>
          </dd>
        </dl>
      </div>

      <!--页面下半部分-->
      <div class="container-bottom">
        <div class="ml-10 mr-10">

          <!--新任务创建按钮-->
          <div class="taskBut">
            <div class="pos-rel top-85">
              <img src="../../../assets/add.png" alt="" /><br/>
              Create A New Task
            </div>
          </div>

          <!--platform card-->
          <dl class="platformCard">
              <dt class="h45 ml-15 mr-15 fs-16">
                <span >Asset Platform Manage Build</span>
                <span class="fs-14 pull-right">
                  <font class="color-green-2">In Operation</font>
                </span>
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

                  <li class="color-55">
                    <table class="pull-left ml-15 w220">
                      <tr>
                        <td class="h40">
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
                    <table class="pull-right mr-15 tmd mt-15 w65">
                      <tr>
                        <td class="fs-25 color-blue-1 bb-db">
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

                  <li class="justfiy pos-rel top-20 w100ps">
                    <dl class="z-top">
                      <dt>
                        <img src="../../../assets/right.png" alt="" class="w22" />
                      </dt>
                      <dd class="fs-12">
                        Start
                      </dd>
                    </dl>
                    <dl class="tmd z-top">
                      <dt>
                        <img src="../../../assets/error.png" alt="" class="w22"  />
                      </dt>
                      <dd class="fs-12">
                        JENKINS
                      </dd>
                    </dl>
                    <dl class="tmd z-top">
                      <dt>
                        <img src="../../../assets/over.png"  alt="" class="w22"  />
                      </dt>
                      <dd class="fs-12">
                        AUTODEPLOY
                      </dd>
                    </dl>
                    <dl class="tmd z-top">
                      <dt>
                        <img src="../../../assets/over.png"  alt="" class="w22"  />
                      </dt>
                      <dd class="fs-12">
                        End
                      </dd>
                    </dl>
                    <hr class="hr" />
                  </li>
                </ol>
              </dd>
              <dt class="platformCard-foot">
                <div class="pull-left ml-15 color-88">
                  <i class="iconfont icon-user">&#xe66a;</i>
                  <p id="td0_task_create_emp"></p>
                </div>
                <div class="pull-right mr-15 color-88">
                  <i class="iconfont" title="Delete">&#xe671;</i>
                  <i class="iconfont ml-15" title="Edit">&#xe672;</i>
                  <i class="iconfont ml-15" title="Task details">&#xe652;</i>
                </div>
              </dt>
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
        prj:{}
      }
    },

    created: function () {
      this.$axios.post('/api/ciapp-server/taskview/prjview'+this.$route.query.id).then(function (res) {
          self.menuData = res.data;
      })
        
    },

    mounted: function () {

    },

    methods: {
      
    }
  }

</script>

<style lang="scss" scoped>

  /*--------------------------------定义风格样式开始-----------------------------*/
  .w22 {
    width:22px;
  }

  .w65 {
    width:65px;
  }

  .w220 {
    width:220px;
  }
  /*--------------------------------定义风格样式结束-----------------------------*/
  .container-top .container-top-left,
  .container-top .container-top-left .left,
  .container-top .container-top-left .right{
    float:left;
  }

  .container-top-right {
    position:absolute;
    left:820px;
  }

  
  /*--------------------------------定义页面上半部分样式开始-----------------------------*/
  .container-top {
    width:1081px;
    height:428px;
    position: relative;
  }

  .container-top .footer-span {
      position:absolute;
      z-index:999;
      left:10px;
      right:10px;
      height:11px;
      top:424px;
      background-image:url("../../../assets/icon_bg-line.png");
  }

  /*--左侧样式--*/
  .container-top-left {
    position:relative;
    padding-top:15px;
    padding-bottom:15px;
    height:398px;
    background-color:#fff;
    border-radius:6px;
    width:821px;
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

  /*--微章样式--*/
  .container-top-left .left .badge dt {
    padding-top:8px;
  }

  .container-top-left .left .badge dd {
    margin-left:-2px;
  }

  /*--右侧样式--*/
  .container-top-left .right {
    width:569px;
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
  /*--------------------------------定义页面上半部分样式结束-----------------------------*/

  /*--------------------------------定义页面下半部分样式开始-----------------------------*/
  .container-bottom {
    padding-top:20px;
    padding-bottom:20px;
    border-radius:6px;
    background-color:#fff;
    min-height:300px;
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

  .platformCard {
    position: relative;
    float:left;
    width:348px;
    height:264px;
    margin-left:5px;
    margin-right:5px;
    border-radius: 5px;
    border:1px solid #dbdbdb;
  }

  .platformCard-foot {
    position:absolute;
    width: 100%;
    background: #ececec;
    height: 38px;
    line-height:38px;
    bottom: 0px;
  }

  .hr {
    border:0px;
    height:0px;
    border-bottom: 2px solid #4a9900;
    position:absolute;
    left:0px;
    right:0px;
    top:10px;
    z-index:0;
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

  .UTestE{
    width:70px;
    height:70px;
    line-height:70px;
    border:1px solid #6ed4e8;
    border-radius:80px;
  }
  /*--------------------------------定义页面下半部分样式结束-----------------------------*/
  
</style>
